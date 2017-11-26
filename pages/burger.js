import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/layout'

import apiUrl from '../config/apiUrl'

const Burger = ({ id, name, web }) => (
  <Layout
    key="body"
    renderHeader={() => [
      <h1 key="burger-name">{name}</h1>,
      <a key="web-page" href={web} target="_blank">
        &gt; Homepage &lt;
      </a>,
    ]}
  >
    <div className="burger" />
    <style jsx>
      {`
        .burger {
          height: 100%;
          background-blend-mode: multiply;
          filter: contrast(120%) saturate(125%);
          background-image: 
            linear-gradient(
              to bottom,
              transparent,
              transparent,
              transparent,
              rgba(0,0,0,0.75)
            ),
            url('/static/images/burgers/${id}.jpg');
          background-size: cover;
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
