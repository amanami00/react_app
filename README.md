# OA Frontend Components

This is the home of all the oa frontend components (a copy of [frontend-distribution](https://github.com/theorchard/frontend-distribution)) and will ONLY be used to update / add new OA frontend compontents.
Frontend-distribution will still be used for all the the Project Manager (Product and Projetc Builder) related stuff.

## Setup
Install `yarn` package manager for building `frontend-react-components` library during dependencies installation
```bash
brew install yarn # installs yarn package manager
```

The current known working versions for our dependencies are:

node: `10.16.0`

yarn: `1.16.0`

npm: `6.9.0`

After ensuring you have the right versions proceed with the below:
```bash
cp .env.shadow .env # initialize environment configuration
yarn # installs all yarn.lock dependencies or package.json dependencies if no yarn.lock is present
yarn start # starts dev server
```

## Development

### Tasks

* `yarn start` runs local development server at localhost:8080
* `yarn test` to run the linter and unit tests (run with SOURCE_MAPS=true for webpack source maps)
* `yarn lint` to run only the linter
* `yarn lint:css` to only lint SCSS files
* `yarn lint:js` to only lint Javascript files
* `yarn test:unit` to run only the unit tests
* `yarn watch` to run unit tests every time a change is saved
* `yarn build` bundles all application js into build/bundle.js

Note: To run a subset use something like:
`NODE_ENV=test NODE_PATH=. jest -u project-highlights --config=jest.config.json`
only add the `-u` to update the snapshot

Note: to see all available tasks, run `yarn run`.

### Developer Tools
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### `.env` variables
We define some variables inside .env file and use them with [dotenv](https://www.npmjs.com/package/dotenv) package before bundling any frontend application.

Variable | Description | Example
-------- | ----------- | -------
`APPLICATION_NAME`|Determines which application (entry point in webpack config) should be in `main.bundle.js` and rendered in standalone mode. By default it is set with `project-manager` value, but can have any application name defined in src/applications folder.|
`USER_FEATURES`|A json object that is a direct mapping from `features.yml` in the [orchard-features respository](https://github.com/theorchard/orchard-features/blob/master/configs/features.yml) using the `toArray()` static method of the `FeatureUtils` PHP class|Default: `{"project_manager":{"enabled":true,"control":false}}`

### Feature Flags

See [FEATURES.md](FEATURES.md)


### Troubleshooting
If you encounter an error after running `yarn` similar to this:
```bash
2 warnings and 5 errors generated.
make: *** [Release/obj.target/binding/src/binding.o] Error 1
gyp ERR! build error
gyp ERR! stack Error: `make` failed with exit code: 2
gyp ERR! stack     at ChildProcess.onExit (/Users/etan/orch/frontend-distribution/node_modules/node-gyp/lib/build.js:262:23)
gyp ERR! stack     at ChildProcess.emit (events.js:200:13)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:272:12)
gyp ERR! System Darwin 18.6.0
gyp ERR! command "/usr/local/Cellar/node/12.3.1/bin/node" "/Users/etan/orch/frontend-distribution/node_modules/node-gyp/bin/node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags=" "--libsass_library="
gyp ERR! cwd /Users/etan/orch/frontend-distribution/node_modules/node-sass
gyp ERR! node -v v12.3.1
gyp ERR! node-gyp -v v3.8.0
```
Try to downgrade node to `10.16.0`.
You can downgrade by following this guide:
https://www.abeautifulsite.net/how-to-upgrade-or-downgrade-nodejs-using-npm
TL;DR of that article is
```
sudo npm cache clean -f
sudo npm install -g n
sudo n 10.16.0
```
