import { func, oneOfType, arrayOf, node } from 'prop-types'

import Meta from '../components/meta'

const Layout = ({ renderHeader, children }) => [
  <Meta key="head" />,
  <div key="body">
    <div className="header">{renderHeader()}</div>
    {children}
    <style jsx>
      {`
        .header {
          z-index: 1;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, 0);
          text-transform: uppercase;
          text-shadow: 2px 2px 4px #fff;
          opacity: 0.2;
          font-size: 36px;
          margin-top: -60px;
        }

        @media all and (min-width: 960px) {
          .header {
            font-size: 64px;
            margin-top: -100px;
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
