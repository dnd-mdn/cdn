const core = require('@actions/core')
const httpClient = require('@actions/http-client')

async function run() {
	const files = process.argv.slice(2)
	const http = new httpClient.HttpClient()

	// Add minified js/css
	for (const file of files) {
		if (/(?!\.min).{4}\.(js|css)$/.test(file)) {
			files.push(file.replace(/\.(js|css)$/, '.min.$1'))
		}
	}

	for (const file of files) {
		const url = `https://purge.jsdelivr.net/gh/${process.env.repo}@latest/${file}`

		core.startGroup(`Purging "${file}"`)

		try {
			const res = await http.get(url)

			if (res.message.statusCode !== 200) {
				throw new Error(res.message.status)
			}

			const raw = await res.readBody()
			const obj = JSON.parse(raw)

			for (const path in obj.paths) {
				if (obj.paths[path].throttled === true) {
					core.info(`Throttled for ${obj.paths[path].throttlingReset} seconds`)
				}
			}

			core.info(`Status "${obj.status}"`)
		} catch (err) {
			core.info(err)
		}

		core.endGroup()
	}
}

try {
	run()
} catch (err) {
	core.setFailed(err)
}
