# npm-package
Template for NPM package

## Checklist

* Push current branch only

      git config push.default current

* Configure your user

      git config user.name "Alexey"
      git config user.email lesha.ogonkov@gmail.com

* Ignore InteliJ files

      echo '.idea' >> .git/info/exclude

* Change `name`, `repository.url`, `homepage`, `bugs`, `description` and
  `keywords` in `package.json`
* Change `scripts.build` to actual build command
* Remove `private` in `package.json`
* Add package files to `files` in `package.json`
* Squash all commits to `Initial commit`
* Edit this readme
* Setup branches protection

## NPM scripts

* `build` runs actual package build, it should put `index.js` to the root of
  the package
* `lint` runs against sources in `src` folder
* `pretest` removes previous coverage report and lint files on `npm test`
* `preversion` runs tests before tagging branch (TODO check that we tag only
  `master` branch)
* `postversion` push changed `package.json` and tags
* `prepack` build library before packing it

## TODO

* Decide on coverage service
