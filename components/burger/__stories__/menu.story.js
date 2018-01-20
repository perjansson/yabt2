import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Menu from '../menu'

const props = {
    name: 'Bun Meat Bun',
    rank: '4',
    web: 'http://www.bunmeatbun.se',
    showMap: true,
    onToggleBurgerMap: action('onToggleBurgerMap clicked')
}

storiesOf('Menu', module)
    .add('showing menu with map link', () => <Menu {...props} />)
    .add('showing menu with burger link', () => (
        <Menu {...props} showMap={false} />
    ))
