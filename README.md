# cdn

This repository stores static assets for use in other applications.

## Usage

These files are to be loaded through [jsDelivr](https://github.com/jsdelivr/jsdelivr#github), a free and open source CDN service with global infrastucture.


Example CSS file
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dnd-mdn/cdn@latest/maple-leaf.css" />
```

Adding `.min` to any JS/CSS will use an automatically generated minified version.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dnd-mdn/cdn@latest/maple-leaf.min.css" />
```

## Caching

Updates to this repository will take time to reach users due to CDN [caching](https://github.com/jsdelivr/jsdelivr#caching).  This repository is not meant for active development, only commit changes that are ready for production.

We do have the ability to [purge](https://github.com/jsdelivr/jsdelivr#purge-cache) cached files within minutes, contact @Ben on [Slack](slack://user?team=THM0PFTTQ&id=UJ1JVAU4F) for more information.
