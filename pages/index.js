import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import { reduxPage } from '../store/store'
import { actionCreators } from '../store/actions'
import { selectBurgers } from '../store/selectors'

import Layout from '../components/layout'
import Teaser from '../components/teaser'

import apiUrl from '../config/apiUrl'

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

    render() {
        const { burgers } = this.props
        return (
            <Layout key="body">
                <ul>
                    {burgers.map(burger => (
                        <li key={burger.id}>
                            <Link
                                prefetch
                                as={`b/${burger.id}`}
                                href={`/burger?id=${burger.id}`}
                            >
                                <a>
                                    <Teaser burger={burger} />
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <style jsx>
                    {`
                        ul {
                            list-style: none;
                            margin: 0;
                            padding: 0;
                            display: grid;
                            grid-gap: 0.4rem;
                            height: 100vh;
                            grid-template-columns: 100%;
                            grid-auto-rows: 40%;
                        }

                        a {
                            text-decoration: none;
                        }

                        @media all and (min-width: 500px) {
                            ul {
                                grid-template-columns: 50% 50%;
                                grid-auto-rows: 70%;
                            }
                        }

                        @media all and (min-width: 750px) and (orientation: landscape) {
                            ul {
                                grid-template-columns: 50% 50%;
                                grid-auto-rows: 70%;
                            }
                        }

                        @media all and (min-width: 750px) and (orientation: portrait) {
                            ul {
                                grid-template-columns: 50% 50%;
                                grid-auto-rows: 40%;
                            }
                        }

                        @media all and (min-width: 1200px) {
                            ul {
                                grid-template-columns: 33% 33% auto;
                                grid-auto-rows: 40%;
                            }
                        }
                    `}
                </style>
            </Layout>
        )
    }
}

Index.propTypes = {
    burgers: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default reduxPage(Index)
