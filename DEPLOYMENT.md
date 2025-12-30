# Static Export Deployment Guide

This Next.js application is configured for static export and can be deployed to any static hosting provider, including shared hosting via FTP.

## Build Configuration

The app is configured with:
- ✅ `output: "export"` - Generates static HTML files
- ✅ `images.unoptimized: true` - No image optimization (works on any host)
- ✅ `trailingSlash: true` - Ensures proper routing on static hosts
- ✅ No API routes, middleware, or server actions
- ✅ All pages are statically generated
- ✅ Favicon from `public/cl-logo.png`

## Building for Production

```bash
npm install --legacy-peer-deps
npm run build
```

This creates an `/out` directory with all static files.

## Deploying to Hostinger (or similar shared hosting)

1. **Build the project** (locally or in CI):
   ```bash
   npm run build
   ```

2. **Upload via FTP**:
   - Connect to your hosting via FTP
   - Navigate to `public_html` (or your site's root directory)
   - Upload **all contents** from the `/out` directory to `public_html`
   - Make sure to upload the `_next` folder and all HTML files

3. **File structure on server**:
   ```
   public_html/
   ├── _next/              (Next.js assets)
   ├── index.html          (Home page)
   ├── cl-logo.png         (Favicon)
   ├── privacy/
   │   └── index.html
   ├── projects/
   │   ├── metadao/
   │   ├── meteora/
   │   └── zcash/
   ├── team/
   └── terms/
   ```

## Deploying to a Subdirectory

If you need to deploy to a subdirectory (e.g., `yourdomain.com/site`):

1. **Update `next.config.mjs`**:
   ```javascript
   const nextConfig = {
     output: "export",
     basePath: '/site',        // Uncomment and set your subdirectory
     assetPrefix: '/site',     // Uncomment and set your subdirectory
     // ... rest of config
   }
   ```

2. **Rebuild**:
   ```bash
   npm run build
   ```

3. **Upload to subdirectory**:
   - Upload `/out` contents to `public_html/site/`

## Important Notes

- ✅ No Node.js runtime required
- ✅ Works on any static hosting (Hostinger, cPanel, Netlify, Vercel, etc.)
- ✅ All pages are pre-rendered at build time
- ✅ Client-side JavaScript still works (React hydration, interactivity)
- ✅ External scripts (Calendly) load dynamically on the client
- ⚠️ Install dependencies with `--legacy-peer-deps` flag due to React 19

## Troubleshooting

**Issue**: Pages show 404 errors
- **Solution**: Make sure `.html` files are in the correct directories
- Check that your server is configured to serve `index.html` for directory requests

**Issue**: Assets not loading
- **Solution**: Verify the `_next` folder was uploaded completely
- Check file permissions (should be 644 for files, 755 for directories)

**Issue**: Routing doesn't work
- **Solution**: This is expected - static export uses file-based routing
- Links will work correctly with the generated HTML files

## Testing Locally

You can test the static export locally:

```bash
# Using Python
cd out
python -m http.server 8000

# Using Node.js
npx serve out

# Using PHP
cd out
php -S localhost:8000
```

Then visit `http://localhost:8000` to preview your site.
