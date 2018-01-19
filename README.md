# dataset.tools
![Build Status](https://github.com/PhiDataKappa/dataset.electron)
![dependencies Status](https://david-dm.org/jschr/electron-react-redux-boilerplate/status.svg)
![devDependencies Status](https://david-dm.org/jschr/electron-react-redux-boilerplate/dev-status.svg)

A minimal desktop file manager for the data.world community

Including:

* [React Router](https://reacttraining.com/react-router/)
* [Redux Thunk](https://github.com/gaearon/redux-thunk/)
* [Redux Actions](https://github.com/acdlite/redux-actions/)
* [Redux Local Storage](https://github.com/elgerlambert/redux-localstorage/)
* [Electron Packager](https://github.com/electron-userland/electron-packager)
* [Electron DevTools Installer](https://github.com/MarshallOfSound/electron-devtools-installer)
* [Electron Mocha](https://github.com/jprichardson/electron-mocha)
* [Browsersync](https://browsersync.io/)

## Quick start

Clone the repository
```bash
git clone --depth=1 git@github.com:PhiDataKappa/dataset.electron.git
```

Install dependencies
```bash
cd dataset.electron
npm install
```

Development
```bash
npm run develop
```

## DevTools

Toggle DevTools:

* OSX: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

## Packaging

Modify [electron-builder.yml](./electron-builder.yml) to edit package info.

For a full list of options see: https://github.com/electron-userland/electron-builder/wiki/Options.

Create a package for OSX, Windows and Linux
```
npm run pack
```

Or target a specific platform
```
npm run pack:mac
npm run pack:win
npm run pack:linux
```

## Tests

```
npm run test
```

## Maintainers

- [@noblemillie](https://github.com/noblemillie)
- [@calebkress](https://github.com/calebkress)
- [@joshpawlik](https://github.com/joshawesome12)
- [@bencollins](https://github.com/ghostcoder8)

## Apps using this utility

- [data.world](https://data.world)
