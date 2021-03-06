const express = require('express')
const next = require('next')
const compression = require('compression')
const sslRedirect = require('heroku-ssl-redirect')

const path = require('path')

const { listBurgersByRank, getBurger } = require('./api/api.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(compression())
    server.use(sslRedirect())

    // API
    server.get('/api/b', async (req, res) => {
      const burgers = await listBurgersByRank()
      res.json(burgers)
    })

    server.get('/api/b/:id', async (req, res) => {
      const burger = await getBurger(req.params.id)
      res.json(burger)
    })

    // Pages
    server.get('/b/:id', (req, res) => {
      const actualPage = '/burger'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    // Service worker
    server.get('/service-worker.js', (req, res) =>
      res.sendFile(path.resolve('./.next/service-worker.js')))

    server.get('*', (req, res) => handle(req, res))

    const port = process.env.PORT || 3000
    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on port ${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
