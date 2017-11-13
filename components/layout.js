import { func, oneOfType, arrayOf, node } from 'prop-types'

import Meta from '../components/meta'

const Layout = ({ renderHeader, children }) => [
  <Meta key="head" />,
  <div key="body" className="layout">
    <div className="header">{renderHeader()}</div>
    {children}
    <style jsx>
      {`
        .layout {
          height: 100vh;
        }

        .header {
          z-index: 1;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, 0);
          text-transform: uppercase;
          color: #fff;
          text-shadow: 6px 6px 12px #000;
          opacity: 0.5;
          font-size: 36px;
          white-space: nowrap;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media all and (min-width: 960px) {
          .header {
            font-size: 64px;
            margin-top: -50px;
          }
        }
      `}
    </style>
  </div>,
]

Layout.propTypes = {
  renderHeader: func,
  children: oneOfType([arrayOf(node), node]).isRequired,
}

Layout.defaultProps = {
  renderHeader: () => {},
}

export default Layout
