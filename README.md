# cdn

[![stats](https://img.shields.io/jsdelivr/gh/hm/dnd-mdn/cdn)](https://www.jsdelivr.com/package/gh/dnd-mdn/cdn?tab=stats)

This repository is for static assets used in our other applications.  It is recommended to only commit changes that are ready for production rather than for active development.

## Usage

Files are to be loaded through [jsDelivr](https://github.com/jsdelivr/jsdelivr#github), a free and open source CDN service with global infrastucture.  

Example HTML
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dnd-mdn/cdn@latest/ml/maple-leaf.min.css" />
```
All URLs should include the `@latest` tag as shown in the example above.

For CSS/JS files, adding `.min` before the file extension is optional, but recommended.  It automatically generates a compressed version.

## Caching

Updates to this repository will take time to reach users due to CDN [caching](https://github.com/jsdelivr/jsdelivr#caching).  To force changes to take effect immediately, use the [purge](https://www.jsdelivr.com/tools/purge) tool.

Example purge tool input
```
https://cdn.jsdelivr.net/gh/dnd-mdn/cdn@latest/ml/maple-leaf.css
https://cdn.jsdelivr.net/gh/dnd-mdn/cdn@latest/ml/maple-leaf.min.css
```
