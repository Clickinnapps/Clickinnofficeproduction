# Clickinn Office

A minimal static landing page for Clickinn Office. The repository previously contained only an AI Studio README, with no application source or package manifest. This starter provides the files required to deploy; it does not restore the original AI Studio application.

## Development

Edit `index.html` to update the page. No third-party dependencies are required. Use Node.js 22 or newer.

## Deployment

Netlify uses the repository root as its base directory, runs `npm run build`, and publishes `dist`, as specified in `netlify.toml`. The build script copies `index.html` into `dist/index.html`.

To replace the starter with the intended application, add its exported source and update the package manifest and build configuration to match its framework.
