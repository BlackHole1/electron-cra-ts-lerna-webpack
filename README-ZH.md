<h2 align="center">
  electron-cra-ts-lerna-webpack
</h2>

<h3 align="center">
  立刻开发 <code>electron</code> 应用，无需等待
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


[English Documentation](https://github.com/BlackHole1/electron-cra-ts-lerna-webpack/blob/master/README.md)

### 技术栈

1. [Electron](https://github.com/electron/electron)
2. [create-react-app](https://github.com/facebook/create-react-app)
3. [TypeScript](https://github.com/Microsoft/TypeScript)
4. [Webpack](https://github.com/webpack/webpack)
5. [electron-webpack](https://github.com/electron-userland/electron-webpack)
6. [electron-builder](https://github.com/electron-userland/electron-builder)
7. [react-hot-loader](https://github.com/gaearon/react-hot-loader)
8. [lerna](https://github.com/lerna/lerna)
9. [yarn](https://github.com/yarnpkg/yarn)

### 功能

1. 渲染进程热更新(只刷新有改动的组件)
2. 主进程热更新(自动重启)
3. 主进程和与渲染进程全部使用 `TypeScript`
4. 支持 `mac` 打包 (`dmg` 和 `zip`)
5. 支持 `windwos` 打包 (`nsis` 和 `zip`)
6. 支持 `linux` 打包 (`AppImage` 和 `deb`)
7. 使用 `lerna` 和 `yarn workspace` 减少项目大小
8. 使用 `yarn autoclean` 减少最终包的大小

### 使用

#### 安装 

```bash
git clone git@github.com:BlackHole1/electron-cra-ts-lerna-webpack.git --depth=1 newProject
cd newProject
yarn
```

#### 开发
```bash
# renderer-app (第一个窗口，无需关闭)
cd packages/renderer-app
yarn start

# main-app (第二个窗口，无需关闭)
cd packages/main-app
yarn start
```

#### 构建

```bash
cd packages/renderer-app
yarn build
cd ../packages/main-app
# 或者 yarn copyRenderBuildCode && yarn build:main && yarn pack:mac
yarn pack:mac:auto
```