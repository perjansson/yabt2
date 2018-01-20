import React from 'react'
import { storiesOf } from '@storybook/react'

import Teaser from './teaser'

const burger = {
    id: 'barrels',
    name: 'Barrels',
    rank: '1',
    web: 'http://www.barrels.se'
}

const localImage = 'http://localhost:3000/static/images/burgers/teaser/barrels.jpg'

const NoWebPDecorator = storyFn => {
    document.documentElement.classList.add('no-webp')
    return <div style={{ height: '350px', width: '500px' }}>{storyFn()}</div>
}

storiesOf('Teaser', module)
    .addDecorator(NoWebPDecorator)
    .add('with image', () => <Teaser burger={burger} localImage={localImage} />)
    .add('without image loaded', () => <Teaser burger={burger} />)
    .add('without burger name or rank', () => {
        const noNameBurger = { ...burger, name: '', rank: '' }
        return <Teaser burger={noNameBurger} localImage={localImage} />
    })
