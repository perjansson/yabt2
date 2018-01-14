import { Component, Fragment } from 'react'
import { string, number, shape } from 'prop-types'
import fetch from 'isomorphic-unfetch'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { reduxPage } from '../store/store'

import Layout from '../components/layout'
import Map from '../components/map'
import inline from '../components/inline'
import ProgressiveImage from '../components/progressiveImage'

import apiUrl from '../config/apiUrl'

const burgerStyle = {
  position: 'relative',
  zIndex: -1,
  display: 'block',
  width: '100vw',
  height: '100vh',
  objectFit: 'cover',
  filter: 'contrast(130%) saturate(150%)',
}

class Burger extends Component {
	state = {
	  showMap: false,
	}

	toggleShowMap = (e) => {
	  this.setState(state => ({
	    showMap: !state.showMap,
	  }))
	  e.preventDefault()
	}

	render() {
	  const {
	    id, name, rank, web, position,
	  } = this.props
	  return (
  <Layout
    renderHeader={() => (
      <Fragment>
        <h1>{name}</h1>
        <div className="links">
          <span>rank {rank}</span>
          <a href={web} target="_blank">
								homepage
          </a>
          <a href="" onClick={this.toggleShowMap} tabIndex="-1">
								map
          </a>
        </div>
      </Fragment>
				)}
  >
    <TransitionGroup />
    {!this.state.showMap ? (
      <CSSTransition timeout="500">
        <div className="imagewrapper">
          <ProgressiveImage
            placeholder={inline[id]}
            image={`/static/images/burgers/${id}.jpg`}
            style={burgerStyle}
          />
        </div>
      </CSSTransition>
				) : (
  <div className="mapwrapper">
    <Map {...position} />
  </div>
				)}
    <style jsx>
      {`
						.links > *:not(:last-child):after {
							content: ' | ';
						}

						.mapwrapper {
							display: inline-block;
							width: 100vw;
							height: 100vh;
							background-color: blue;
						}

						.imagewrapper {
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
						}
					`}
    </style>
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
  position: shape({ long: number.isRequired, lat: number.isRequired }).isRequired,
}

export default reduxPage(Burger)
