

### Built with:

* React 16
* Webpack 4
* React Router 4
* SASS
* Babel Cli
* Hot Module Reloading
* Jest 21
* Enzyme 3 for testing

### Features

* Simple src/index.jsx and src/index.css (local module css).
* Webpack configuration for development (with hot reloading) and production (with minification).
* Both js(x) and css hot loaded during development.
* [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:7357/`


### To test
To run unit tests:

```
npm test
```

Tests come bundled with:

* Jest
* Enzyme
* React Test Utils
* React Test Renderer
