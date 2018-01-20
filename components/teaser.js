import { shape, string, bool } from 'prop-types'

const Teaser = ({ burger, localImage }) => (
    <div className="teaser">
        <p className="burger-name">
            {burger.rank}.
            {burger.name}
        </p>
        <style jsx>
            {`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .teaser {
                    height: 100%;
                    background-blend-mode: multiply;
                    filter: contrast(130%) saturate(150%);
                    background-size: cover;
                    opacity: 0;
                    animation-name: fadeIn;
                    animation-duration: 1s;
                    animation-delay: ${burger.rank / 15}s;
                    animation-fill-mode: both;
                }

                :global(.webp) {
                    .teaser {
                        background-image: linear-gradient(
                                rgba(195, 198, 0, 0),
                                rgba(195, 198, 0, 0.5)
                            ),
                            url(${!localImage
                                ? `/static/images/burgers/teaser/${burger.id}.webp`
                                : localImage});
                    }
                }

                :global(.no-webp) {
                    .teaser {
                        background-image: linear-gradient(
                                rgba(195, 198, 0, 0),
                                rgba(195, 198, 0, 0.5)
                            ),
                            url(${!localImage
                                ? `/static/images/burgers/teaser/${burger.id}.jpg`
                                : localImage});
                    }
                }

                .burger-name {
                    margin: 0;
                    padding: 20px;
                    color: #fff;
                    text-shadow: 3px 3px 6px #000;
                    opacity: 0.8;
                    text-transform: uppercase;
                    font-size: 30px;
                    float: left;
                }

                @media all and (min-width: 500px) {
                    .burger-name {
                        font-size: 24px;
                        float: right;
                    }
                }

                @media all and (min-width: 820px) {
                    .burger-name {
                        font-size: 42px;
                        float: left;
                    }
                }

                @media all and (min-width: 1200px) {
                    .burger-name {
                        font-size: 38px;
                        float: left;
                    }
                }
            `}
        </style>
    </div>
)

Teaser.propTypes = {
    burger: shape({ id: string, name: string, web: string }).isRequired,
    localImage: bool
}

Teaser.defaultProps = {
    localImage: false
}

export default Teaser
