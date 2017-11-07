import { shape, string } from 'prop-types'

const Teaser = ({ burger }) => (
  <div className="teaser">
    <p>{burger.name}</p>
    <style jsx>
      {`
        .teaser {
            height: 100%;
            background-blend-mode: multiply;
            filter: contrast(120%) saturate(125%);
            background-image: linear-gradient(rgba(195, 198, 0, 0), rgba(195, 198, 0, 0.3)),
                url('/static/images/burgers/teaser/${burger.id}.jpg');
            background-size: cover;
            box-shadow: inset 4px 4px 4px 4px rgba(0, 0, 0, 0.4);
        }

        p {
            margin: 0;
            padding: 20px;
            font-size: 32px;
            color: #fff;
            text-shadow: 3px 3px 6px #000;
            opacity: 0.8;
            text-transform: uppercase;
        }
      `}
    </style>
  </div>
)

Teaser.propTypes = {
  burger: shape({ id: string, name: string, web: string }).isRequired,
}

export default Teaser
