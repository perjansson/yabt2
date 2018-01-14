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
const getPositions = async () => getFile('position.json')

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
  const ranking = await getRanking()
  const positions = await getPositions()
  const burger = burgers.find(b => b.id === id)
  const rank = Object.entries(ranking).find(([, i]) => i === burger.id)[0]
  const position = positions[burger.id]
  return { ...burger, rank, position }
}

module.exports = { listBurgersByRank, getBurger }
