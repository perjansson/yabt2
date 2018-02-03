import React from 'react'
import { storiesOf } from '@storybook/react'
import { css } from 'emotion'

import Map from '../map'

const Wrapper = storyFn => (
    <div
        className={css`
            height: 100vh;
            width: 100vw;
        `}
    >
        {storyFn()}
    </div>
)

storiesOf('Map', module)
    .addDecorator(Wrapper)
    .add('showing coordinates', () => <Map lat={59.340409} long={18.00802} />)
