import { oneOfType, arrayOf, node } from 'prop-types'

const Marquee = ({ children }) => (
  <div className="marquee">
    <span>{children}</span>
    <style jsx>
      {`
        .marquee {
          width: 100vw;
          margin: 0 auto;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }

        .marquee span {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 5s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-100%, 0);
          }
        }
      `}
    </style>
  </div>
)

Marquee.propTypes = { children: oneOfType([arrayOf(node), node]).isRequired }

export default Marquee
