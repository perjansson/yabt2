import { func, oneOfType, arrayOf, node } from 'prop-types'

const Layout = ({ renderHeader, children }) => (
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
          opacity: 0.8;
          font-size: 14px;
          white-space: nowrap;
          text-overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media all and (min-width: 600px) {
          .header {
            font-size: 20px;
            margin-top: -10px;
          }
        }

        @media all and (min-width: 750px) {
          .header {
            font-size: 32px;
            margin-top: -20px;
          }
        }

        @media all and (min-width: 1200px) {
          .header {
            font-size: 44px;
            margin-top: -50px;
          }
        }
      `}
    </style>
  </div>
)

Layout.propTypes = {
  renderHeader: func,
  children: oneOfType([arrayOf(node), node]).isRequired,
}

Layout.defaultProps = {
  renderHeader: () => {},
}

export default Layout
