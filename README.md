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

* Change `repository.url`, `description` and `keywords` in `package.json`
* Remove `private` in `package.json`
* Add package files to `files` in `package.json`
* Edit this readme
