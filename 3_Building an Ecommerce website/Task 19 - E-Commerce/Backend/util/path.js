// The Path module provides a way of working with directories and file paths.
const path = require('path');

module.exports = path.dirname(process.mainModule.filename);