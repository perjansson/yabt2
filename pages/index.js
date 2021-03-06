import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import { reduxPage } from '../store/store'
import { actionCreators } from '../store/actions'
import { selectBurgers } from '../store/selectors'

import Layout from '../components/layout'
import BurgerGrid from '../components/burger/grid'
import GridItem from '../components/burger/gridItem'
import Teaser from '../components/burger/teaser'

import apiUrl from '../config/apiUrl'

const sizes = {
    high: [4, 8, 11],
    wide: [3, 12, 19],
    big: [1, 10, 14]
}

class Index extends React.PureComponent {
    static async getInitialProps({ store }) {
        const burgers =
            selectBurgers(store.getState()) || (await Index.fetchBurgers(store))
        return { burgers }
    }

    static fetchBurgers = async store => {
        const res = await fetch(`${apiUrl}/api/b`)
        const burgers = await res.json()
        store.dispatch(actionCreators.gotBurgers(burgers))
        return burgers
    }

    componentDidMount() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then(() =>
                    console.log('service worker registration successful')
                )
                .catch(err =>
                    console.warn('service worker registration failed', err)
                )
        }
    }

    renderBurgerTeasers = burgers =>
        burgers.map((burger, index) => {
            const isHigh = sizes.high.includes(index)
            const isWide = sizes.wide.includes(index)
            const isBig = sizes.big.includes(index)

            return (
                <GridItem
                    key={burger.id}
                    isBig={isBig}
                    isHigh={isHigh}
                    isWide={isWide}
                >
                    <Link
                        prefetch
                        as={`b/${burger.id}`}
                        href={`/burger?id=${burger.id}`}
                    >
                        <a>
                            <Teaser burger={burger} />
                        </a>
                    </Link>
                </GridItem>
            )
        })

    render() {
        return (
            <Layout key="body">
                <BurgerGrid>
                    {this.renderBurgerTeasers(this.props.burgers)}
                </BurgerGrid>
            </Layout>
        )
    }
}

Index.propTypes = {
    burgers: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default reduxPage(Index)
