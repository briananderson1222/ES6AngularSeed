# MyApp Angular

MyApp Angular is a boilerplate setup for angular projects

# Setup

* Install `node` 4.0 or later and `npm` for package management
* From the root directory run `npm install`
* For convenience, install the node module `gulp` globally: `npm install -g gulp`

If you run into issues with dependencies, start by running `npm cache clean` and removing the `node_modules` directory in between attempts.

# Commands

The commands are defined in the `scripts` block in `package.json`.

* `npm install` to install
* `npm start` to build and serve
* `npm test` to run the unit tests

# Gulp Tasks

The commands mostly point to gulp tasks, which you can run directly
if you have installed `gulp` globally.

* `gulp` or `gulp serve` to run default task for linting, building and live reloading.
* `gulp build:production` to build an optimized version of your application in `/build`
* `gulp test` to launch your unit tests with Karma
* `gulp test:tdd` to run and auto-watch your unit tests with Karma

# Deployment

The build process puts files into the `build` directory, from which they should be moved to a location where they can be served from the context root `/build`.
