const express = require('express');
const app = express();
const {readFileAsJson, writeFileAsJson} = require('./utils');

const createStatus = require('./atmService');
const createAtmTable = require('./atmTable');

const ATM_TABLE_PATH = './src/server/atmTable.json';
const ATM_STATUS_PATH = './src/server/statusTable.json';
const INITIALIZE_LENGTH = 5;
const UPDATE_STATUS_INTERVAL = 10 * 1000;

const initialAtmTable = createAtmTable(INITIALIZE_LENGTH);
const initialAtmStatus = createStatus(INITIALIZE_LENGTH);

writeFileAsJson(ATM_TABLE_PATH, initialAtmTable);
writeFileAsJson(ATM_STATUS_PATH, initialAtmStatus);

updateStatusCircle();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, HEAD, OPTIONS, POST, PUT, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  next();
});
app.use(express.json());

app.post('/api/atm', (req, res, next) => {
  const atmFile = readFileAsJson(ATM_TABLE_PATH);
  const statusFile = readFileAsJson(ATM_STATUS_PATH);

  let id = 1;
  atmFile.atmTable.forEach((el) => {
    if (el.id > id) {
      id = el.id;
    }
  });
  id++;

  const createdStatus = createStatus(1).statusTable[0];
  createdStatus.id = id;
  const atm = Object.assign({}, req.body, {id});

  atmFile.atmTable.push(atm);
  statusFile.statusTable.push(createdStatus);
  writeFileAsJson(ATM_TABLE_PATH, atmFile);
  writeFileAsJson(ATM_STATUS_PATH, statusFile);

  res.json(atm);
});

app.get('/api/atm/all', (req, res, next) => {
  const file = readFileAsJson(ATM_TABLE_PATH);
  res.json(file);
});

app.get('/api/atm/*[0-9]', (req, res, next) => {
  const parsed = req.path.split('/');
  const file = readFileAsJson(ATM_TABLE_PATH);
  const find = file.atmTable.find((el) => el.id == parsed[3]);
  res.json({atm: find});
});

app.delete('/api/atm/*[0-9]', (req, res, next) => {
  let result = true;

  const id = req.path.split('/')[3];
  const atmTable = readFileAsJson(ATM_TABLE_PATH);
  const statusTable = readFileAsJson(ATM_STATUS_PATH);

  atmTable.atmTable = atmTable.atmTable.filter((el) => el.id != id);
  statusTable.statusTable = statusTable.statusTable.filter((el) => el.id != id);

  writeFileAsJson(ATM_TABLE_PATH, atmTable);
  writeFileAsJson(ATM_STATUS_PATH, statusTable);

  res.json({result, id});
});

app.post('/support/status', (req, res, next) => {
  const file = readFileAsJson(ATM_STATUS_PATH);

  const filtered = file.statusTable.filter(
    el => req.body.some(id => id == el.id)
  );
  res.json({statusTable: filtered});
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

function updateStatusCircle() {
  setInterval(() => {
    const file = readFileAsJson(ATM_STATUS_PATH);
    const newStatusList = createStatus(file.statusTable.length);

    for (let i = 0; i < file.statusTable.length; i++) {
      file.statusTable[i].status = newStatusList.statusTable[i].status;
    }

    writeFileAsJson(ATM_STATUS_PATH, file);
  }, UPDATE_STATUS_INTERVAL);
}
