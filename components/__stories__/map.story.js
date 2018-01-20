import React from 'react'
import { storiesOf } from '@storybook/react'

import Map from '../map'

const position = { lat: 59.340409, long: 18.00802 }

storiesOf('Map', module).add('showing coordinates', () => <Map {...position} />)
