import { PureComponent } from 'react'
import { number, string } from 'prop-types'
import GoogleMap from 'google-map-react'
import { css } from 'emotion'
import styled from 'react-emotion'

import { bounceIn } from '../animations'

const BurgerMarkerImage = styled.img`
    width: 50px;
    animation-name: ${bounceIn};
    animation-duration: 0.5s;
    animation-fill-mode: both;
`

const Marker = ({ text }) => (
    <div
        className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `}
    >
        <BurgerMarkerImage
            src="/static/images/burger-icon.png"
            alt="burger marker"
        />
        <div
            className={css`
                width: 300px;
                text-align: center;
                margin-top: 5px;
                font-size: 20px;
                font-weight: bold;
            `}
        >
            {text}
        </div>
    </div>
)

class Map extends PureComponent {
    render() {
        const { lat, long, name } = this.props

        return (
            <GoogleMap
                center={{ lat, lng: long }}
                defaultZoom={16}
                bootstrapURLKeys={{
                    key: 'AIzaSyBnivWB1ms6q5lftNI13Ug9VwHeq7wgouc',
                    language: 'sv'
                }}
            >
                <Marker lat={lat} lng={long} text={name} />
            </GoogleMap>
        )
    }
}

Map.propTypes = {
    lat: number.isRequired,
    long: number.isRequired,
    name: string
}

export default Map
