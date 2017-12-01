import { shape, string } from 'prop-types'

const Teaser = ({ burger }) => (
  <div className="teaser">
    <p className="burger-name">{burger.name}</p>
    <style jsx>
      {`
        .teaser {
          height: 100%;
          background-blend-mode: multiply;
          filter: contrast(120%) saturate(125%);
          background-size: cover;
        }

        :global(.webp) {
          .teaser {
            background-image: linear-gradient(rgba(195, 198, 0, 0), rgba(195, 198, 0, 0.3)),
              url('/static/images/burgers/teaser/${burger.id}.webp');
          }
        }

        :global(.no-webp) {
          .teaser {
            background-image: linear-gradient(rgba(195, 198, 0, 0), rgba(195, 198, 0, 0.3)),
              url('/static/images/burgers/teaser/${burger.id}.jpg');
          }
        }

        .burger-name {
          margin: 0;
          padding: 20px;
          color: #fff;
          text-shadow: 3px 3px 6px #000;
          opacity: 0.8;
          text-transform: uppercase;
          font-size: 34px;
        }

        @media all and (min-width: 600px) {
          .burger-name {
            font-size: 28px;
          }
        }

        @media all and (min-width: 750px) {
          .burger-name {
            font-size: 48px;
          }
        }

        @media all and (min-width: 1200px) {
          .burger-name {
            font-size: 42px;
          }
        }
      `}
    </style>
  </div>
)

Teaser.propTypes = {
  burger: shape({ id: string, name: string, web: string }).isRequired,
}

export default Teaser
