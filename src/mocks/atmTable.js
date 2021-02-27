const utils = require('./utils');

const addressList = [
  'Дубининская ул., 33В, Москва',
  'Воронцовская ул., 1/3с2, Москва',
  'Волжский бул., 16, корп. 1, Москва',
  'Шоссейная ул., 1/2с4, Москва',
  'Шоссейная ул., 34/36, Москва',
  'ул. Гурьянова, 2А, Москва',
  'Ставропольская ул., 23, корп. 1, Москва',
  'Краснодарская ул., 57, корп. 1, Москва',
  'ул. Вавилова, 66, Москва',
  'Ленинский просп., 66, Москва'
];

const vendors = [
  'Альфабанк',
  'Райфайзенбанк',
  'Doutche Bank',
  'Сбербанк',
  'МТС Банк',
  'ПочтаБанк',
  'Московский Кредитный банк',
  'МИН Банк',
  'ВТБ',
  'Тинькофф',
];

const models = [
  'Diebold Opteva 520',
  'P5800L',
  'diebold opteva 720',
  'Nautilus MX 7600 usb',
  'NCR 6626',
  'P5800L',
  'wincor nixdorf 1500',
  'NCR Personas 5870',
  'wincor nixdorf procash',
  'Wincor Nixdorf ProCash 2100xe',
  'Diebold Opteva 720',
]

const names = [
  'Альфабанк Дубининская',
  'Райфайзенбанк Воосточная',
  'Doutche Bank Академическая 1',
  'Сбербанк Воронцовские пруды',
  'МТС Банк Загородная',
  'ПочтаБанк Почтовая',
  'Московский Кредитный банк 1',
  'МИН Банк 12',
  'ВТБ 6',
  'Тинькофф Гурьянова 12',
]

function createData(length = 10) {
  const res = [];

  for (let i = 0; i < length; i++) {
    const obj = {
      id: i + 1,
      name: utils.getRandomObjectOfArray(names),
      address: utils.getRandomObjectOfArray(addressList),
      vendor: utils.getRandomObjectOfArray(vendors),
      model: utils.getRandomObjectOfArray(models),
    };

    res.push(obj);
  }

  return console.log(JSON.stringify(res, null, ' '));
}

module.exports = createData;

createData();
