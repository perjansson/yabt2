import { Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/layout'
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
}

const Burger = ({ id, name, web }) => (
  <Layout
    key="body"
    renderHeader={() => (
      <Fragment>
        <h1 key="burger-name">{name}</h1>
        <a key="web-page" href={web} target="_blank">
          &gt; Homepage &lt;
        </a>
      </Fragment>
    )}
  >
    <div className="wrapper">
      <ProgressiveImage
        src={`/static/images/burgers/${id}.jpg`}
        placeholder={inline[id]}
        style={burgerStyle}
      />
    </div>
    <style jsx>
      {`
        .wrapper {
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

Burger.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`${apiUrl}/api/b/${id}`)
  const burger = await res.json()

  console.log(`Fetched burger: ${burger.name}`)

  return { ...burger }
}

Burger.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  web: PropTypes.string.isRequired,
}

export default Burger
