const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const getFile = async (fileName) => {
  const file = await readFile(path.join(__dirname, fileName));
  return JSON.parse(file);
};

const listBurgers = async () => getFile('burgers.json');
const ranking = async () => getFile('rank.json');

const listBurgersByRank = async () => {
  const burgers = await listBurgers();
  const burgersAsObj = burgers.reduce((r, b) => ({ ...r, [b.id]: b }), {});
  const rank = await ranking();
  const rankedBurgers = Object.values(rank).map(r => burgersAsObj[r]);
  return rankedBurgers;
};

const getBurger = async (id) => {
  const burgers = await listBurgers();
  return burgers.find(b => b.id === id);
};

module.exports = { listBurgersByRank, getBurger };
