import { Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import ProgressiveImage from 'react-progressive-image'

import Layout from '../components/layout'
import inline from '../components/inline'

import apiUrl from '../config/apiUrl'

const filter = loading => ({
  filter: `contrast(130%) saturate(150%) ${loading ? 'blur(25px)' : ''}`,
})

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
      <ProgressiveImage src={`/static/images/burgers/${id}.jpg`} placeholder={inline[id]}>
        {(src, loading) => (
          <img
            style={filter(loading)}
            className="burger-image"
            src={src}
            alt={`Burger from ${name}`}
          />
        )}
      </ProgressiveImage>
    </div>
    <style jsx>
      {`
        .wrapper {
          display: inline-block;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background: linear-gradient(
            to bottom,
            transparent,
            transparent,
            transparent,
            rgba(0, 0, 0, 0.75)
          );
        }

        .burger-image {
          position: relative;
          z-index: -1;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background-blend-mode: multiply;
          transition: 2s filter linear;
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
