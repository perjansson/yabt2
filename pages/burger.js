import { Component } from 'react'
import { string, number, shape } from 'prop-types'
import fetch from 'isomorphic-unfetch'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled from 'react-emotion'

import { reduxPage } from '../store/store'

import Layout from '../components/layout'
import ProgressiveImage from '../components/progressiveImage'

import Menu from '../components/burger/menu'
import Map from '../components/burger/map'
import placeHolderImages from '../components/burger/placeHolderImages'

import apiUrl from '../config/apiUrl'

const burgerStyle = {
    position: 'relative',
    zIndex: -1,
    display: 'block',
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    filter: 'contrast(130%) saturate(150%)'
}

const ImageWrapper = styled.div`
    display: inline-block;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background: linear-gradient(
        to bottom,
        transparent,
        transparent,
        transparent,
        rgba(0, 0, 0, 0.75)
    );
`

const MapWrapper = styled.div`
    display: inline-block;
    width: 100vw;
    height: 100vh;
    background-color: blue;
`

class Burger extends Component {
    state = { showMap: false }

    handleToggleBurgerMap = e => {
        this.setState(state => ({ showMap: !state.showMap }))
        e.preventDefault()
    }

    render() {
        const { id, position } = this.props
        return (
            <Layout
                renderHeader={() => (
                    <Menu
                        {...this.props}
                        showMap={!this.state.showMap}
                        onToggleBurgerMap={this.handleToggleBurgerMap}
                    />
                )}
            >
                <TransitionGroup />
                {!this.state.showMap ? (
                    <CSSTransition timeout="500">
                        <ImageWrapper>
                            <ProgressiveImage
                                placeholder={placeHolderImages[id]}
                                image={`/static/images/burgers/${id}.jpg`}
                                style={burgerStyle}
                            />
                        </ImageWrapper>
                    </CSSTransition>
                ) : (
                    <MapWrapper>
                        <Map {...position} />
                    </MapWrapper>
                )}
            </Layout>
        )
    }
}

Burger.getInitialProps = async ({ query }) => {
    const { id } = query
    const res = await fetch(`${apiUrl}/api/b/${id}`)
    const burger = await res.json()

    console.log(`Fetched burger: ${burger.name}`)

    return { ...burger }
}

Burger.propTypes = {
    id: string.isRequired,
    name: string.isRequired,
    rank: string.isRequired,
    web: string.isRequired,
    position: shape({ long: number.isRequired, lat: number.isRequired })
}

export default reduxPage(Burger)
