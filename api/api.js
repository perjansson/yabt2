const path = require('path')
const fs = require('fs')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)

const getFile = async (fileName) => {
  const file = await readFile(path.join(__dirname, fileName))
  return JSON.parse(file)
}

const listBurgers = async () => getFile('burgers.json')
const getRanking = async () => getFile('rank.json')

const listBurgersByRank = async () => {
  const burgersAsList = await listBurgers()
  const burgersAsObj = burgersAsList.reduce(
    (burgers, burger) => ({ ...burgers, [burger.id]: burger }),
    {},
  )
  const ranking = await getRanking()
  const rankedBurgers = Object.entries(ranking).map(([rank, burger]) => ({
    ...burgersAsObj[burger],
    rank,
  }))
  return rankedBurgers
}

const getBurger = async (id) => {
  const burgers = await listBurgers()
  return burgers.find(b => b.id === id)
}

module.exports = { listBurgersByRank, getBurger }
