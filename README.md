## electron-cra-ts-lerna-webpack

Develop the electron application immediately without waiting

### tech stack

1. [Electron](https://github.com/electron/electron)
2. [create-react-app](https://github.com/facebook/create-react-app)
3. [TypeScript](https://github.com/Microsoft/TypeScript)
4. [Webpack](https://github.com/webpack/webpack)
5. [electron-webpack](https://github.com/electron-userland/electron-webpack)
6. [electron-builder](https://github.com/electron-userland/electron-builder)
7. [react-hot-loader](https://github.com/gaearon/react-hot-loader)
8. [lerna](https://github.com/lerna/lerna)
9. [yarn](https://github.com/yarnpkg/yarn)

### feature

1. render hot update(Refresh only changed components)
2. `main-process` hot update(Auto restart)
3. `main-process` and `renderer-process` all use TypeScript
4. support mac pack (`dmg` and `zip`)
5. support windows pack (`nsis` and `zip`)
6. support linux pack (`AppImage` and `deb`)
7. use `lerna` and `yarn workspace` reduce project size
8. use `yarn autoclean` to reduce the size of the final package

### use

#### install 

```bash
git clone electron-cra-ts-lerna-webpack -deptch 1 newProject
cd newProject
yarn
```

#### development
```bash
# renderer-app (The first shell window, Don't close)
cd packages/renderer-app
yarn start

# main-app (Second shell window, Don't close)
cd packages/main-app
yarn start
```

#### build

```bash
cd packages/renderer-app
yarn build
cd ../packages/main-app
# or yarn copyRenderBuildCode && yarn build:main && yarn pack:mac
yarn pack:mac:auto
```