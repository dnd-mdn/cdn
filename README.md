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

Updates to this repository may take 24 hours to update due to [caching](https://github.com/jsdelivr/jsdelivr#caching).
