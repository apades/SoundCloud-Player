const fs = require('fs');
const doetenv = require('dotenv');
const path = require('path');
const { merge } = require('lodash');

function getEnvConf() {
  try {
    let envFile = path.resolve(__dirname, `../.env.${process.env.envFile}`);
    return doetenv.parse(fs.readFileSync(envFile, 'utf-8'));
  } catch (error) {
    try {
      let envFile = path.resolve(__dirname, `../.env.dev`);
      return doetenv.parse(fs.readFileSync(envFile, 'utf-8'));
    } catch (error) {
      return {};
    }
  }
}
function getWebpackDefinePlugin(data = {}) {
  let env = merge(getEnvConf(), data);
  let envData = {};

  Object.entries(env).forEach(([key, val]) => {
    envData[`process.env.${key}`] = /^(\d+|true|false)$/.test(val)
      ? val
      : `"${val}"`;
  });
  console.log('envData', envData);
  return envData;
}
module.exports = {
  getEnvConf,
  getWebpackDefinePlugin,
};
