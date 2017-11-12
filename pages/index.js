import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import Layout from '../components/layout'
import Teaser from '../components/teaser'

import apiUrl from '../config/apiUrl'

const Index = ({ burgers }) => (
  <Layout key="body">
    <ul>
      {burgers.map(burger => (
        <li key={burger.id}>
          <Link prefetch as={`b/${burger.id}`} href={`/burger?id=${burger.id}`}>
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
          height: 100vh;
          grid-template-columns: 100%;
          grid-auto-rows: 40%;
        }

        a {
          text-decoration: none;
        }

        @media all and (min-width: 600px) {
          ul {
            grid-template-columns: 50% 50%;
            grid-auto-rows: 70%;
          }
        }

        @media all and (min-width: 750px) {
          ul {
            grid-template-columns: 50% 50%;
            grid-auto-rows: 40%;
          }
        }

        @media all and (min-width: 1200px) {
          ul {
            grid-template-columns: 33% 33% auto;
          }
        }
      `}
    </style>
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch(`${apiUrl}/api/b`)
  const burgers = await res.json()

  console.log(`Fetched number of burgers: ${burgers.length}`)

  return { burgers }
}

Index.propTypes = {
  burgers: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Index
