# cdn

[![hit counter](https://img.shields.io/jsdelivr/gh/hm/dnd-mdn/cdn)](https://www.jsdelivr.com/package/gh/dnd-mdn/cdn) ![repo size](https://img.shields.io/github/repo-size/dnd-mdn/cdn) 

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