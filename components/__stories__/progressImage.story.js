import React from 'react'
import { storiesOf } from '@storybook/react'

import ProgressiveImage from '../progressiveImage'

const style = {
    position: 'relative',
    zIndex: -1,
    display: 'block',
    width: '500px',
    height: '350px',
    filter: 'contrast(130%) saturate(150%)'
}

const props = {
    placeholder:
        'data:image/jpeg;base64,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',
    image: 'http://localhost:3000/static/images/burgers/teaser/barrels.jpg'
}

storiesOf('ProgressiveImage', module)
    .add('before full image loaded', () => (
        <ProgressiveImage placeholder={props.placeholder} style={style} />
    ))
    .add('after full image loaded', () => <ProgressiveImage {...props} style={style} />)