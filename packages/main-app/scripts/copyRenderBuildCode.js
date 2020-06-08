const path = require('path');
const fs = require('fs-extra');

const renderBuildPath = path.join(__dirname, '..', '..', 'render-app', 'build');
const source = path.join(__dirname, '..', 'static', 'render');
fs.copySync(renderBuildPath, source);