# React Server Side Rendering App for Space X launches ⚛️

**What's included:**

- Server-side rendering code logic written in Server folder
- Server-side data fetching and client-side hydration
- Conditionally load pollyfills -- only ship bloat to outdated browsers
- Dev server with hot reloading styles
- Jest and react-testing-library ready to test the crap out of some stuff
- CSS Modules, Sass, and autoprefixer
- Node.js clusters for improved performance under load (in production)
- Prettier and ESLint run on commit
- Docker-ized for production like a bawsss

## Initial setup

- `npm install`

## Development

- `npm start`
  - Start the dev server at [http://localhost:3000](http://localhost:3000)
- `npm run build`
  - Script used to get production build

## Production

- `npm run build`
  - Bundle the JS and fire up the Express server for production
- `npm run docker`
  - Build and start a local Docker image in production mode (mostly useful for debugging)

## General architecture

This app has two main pieces: the server and the client code.

#### Server (`server/`)
    - React app first page server side rendering phase

#### Client (`src/`)
     - client side aplication logic 
#### Unit Test case (`src/`)
     - Component unit test case is in progress