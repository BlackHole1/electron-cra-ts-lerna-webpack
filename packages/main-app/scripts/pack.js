const { build, Platform } = require('electron-builder');
const yaml = require('js-yaml');
const fs = require('fs-extra');
const path = require('path');

const buildType = process.argv[2];

if (!['mac', 'win', 'linux'].includes(buildType)) {
  throw Error('build type must is: mac/win/linux');
}

const config = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '..', 'electron-builder.yml')));

config.directories.output = `release/${buildType}`;

config.extraResources = [
  {
    from: 'static',
    to: 'static',
  }
];

const packMac = () => {
  build({
    config: config,
    targets: Platform.MAC.createTarget(),
  });
};

const packWin = () => {
  build({
    config: config,
    targets: Platform.WINDOWS.createTarget(),
  });
};

const packLinux = () => {
  build({
    config: config,
    targets: Platform.LINUX.createTarget(),
  });
};

(() => {
  buildType === 'mac'
    ? packMac()
    : buildType === 'linux'
      ? packLinux()
      : packWin()
})()