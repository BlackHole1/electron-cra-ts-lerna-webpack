<h2 align="center">
  electron-cra-ts-lerna-webpack
</h2>

<h3 align="center">
  Develop the <code>electron</code> application immediately without waiting
</h3>

<p align="center">
  <a href="https://github.com/BlackHole1/electron-cra-ts-lerna-webpack/issues">
    <img src="https://img.shields.io/github/issues/BlackHole1/electron-cra-ts-lerna-webpack?style=flat-square" alt="Github Issues"/>
  </a>
    <a href="https://twitter.com/Free_BlackHole">
    <img src="https://img.shields.io/twitter/follow/Free_BlackHole?style=flat-square" alt="Twitter"/>
  </a>
  <a href="https://github.com/BlackHole1/electron-cra-ts-lerna-webpack/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/BlackHole1/electron-cra-ts-lerna-webpack?style=flat-square" alt="GitHub license"/>
    </a>
  <br />
</p>


[中文文档](https://github.com/BlackHole1/electron-cra-ts-lerna-webpack/blob/master/README-ZH.md)

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
git clone git@github.com:BlackHole1/electron-cra-ts-lerna-webpack.git --depth=1 newProject
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