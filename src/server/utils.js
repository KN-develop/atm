const fs = require('fs');
const path = require('path');

function getRandomObjectOfArray(arr) {
  const index = Math.floor((Math.random() * arr.length ));
  return arr[index];
}

function readFileAsJson(str) {
  return JSON.parse(fs.readFileSync(path.resolve(str)));
}

function writeFileAsJson(str, data) {
  fs.writeFileSync(
    path.resolve(str),
    JSON.stringify(data, null, ' '),
    'utf-8'
  );
}

module.exports = Object.freeze({
  getRandomObjectOfArray,
  readFileAsJson,
  writeFileAsJson
});
