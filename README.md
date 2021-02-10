# fastestcleanestweb.com
An experimental (ideal) website with minimal content, minifier, brotli compression and other server settings

- accessible
- fast
- clean
- responsive
- compression enabled
- HTTP security headers (almost all)

### Usage

Run gulp task to get a minified and brotli compressed static website

```
gulp build
```

Upload the `dist` folder created to the server.

Add various security HTTP headers like:
- Strict-Transport-Security
- X-Content-Type-Options
- Content-Security-Policy
- X-Frame-Options
