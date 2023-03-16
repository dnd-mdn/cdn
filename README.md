# cdn

![jsDelivr hit counter](https://data.jsdelivr.com/v1/stats/packages/gh/dnd-mdn/cdn/badge)

This repository stores static assets for use in our other applications.  It is recommended to only commit changes ready for production rather than for active development.

## Usage

Files are to be loaded through [jsDelivr](https://github.com/jsdelivr/jsdelivr#github), a free and open source CDN service with global infrastucture.


Example CSS file
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dnd-mdn/cdn@latest/maple-leaf.css" />
```

Adding `.min` to any JS/CSS will use an automatically generated minified version.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dnd-mdn/cdn@latest/maple-leaf.min.css" />
```

## Caching

Updates to this repository will take time to reach users due to CDN [caching](https://github.com/jsdelivr/jsdelivr#caching).  To force changes to take effect immediately, use the [purge](https://www.jsdelivr.com/tools/purge) tool.  Each URL entered should include the `@latest` tag as shown in the examples above.