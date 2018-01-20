import { configure } from '@storybook/react'

const req = require.context('..', true, /\.story\.js$/)

const loadStories = () => req.keys().forEach(fileName => req(fileName))

configure(loadStories, module)
