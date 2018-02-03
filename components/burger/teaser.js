import { shape, string } from 'prop-types'
import styled from 'react-emotion'

import animations from '../animations'

const Container = styled.div`
    height: 100%;
    background-blend-mode: multiply;
    filter: contrast(130%) saturate(150%);
    background-size: cover;
    opacity: 0;
    animation-name: ${animations.fadeIn};
    animation-duration: 0.5s;
    animation-delay: ${({ burger }) => `${burger.rank / 15}s`};
    animation-fill-mode: both;

    :global(.webp) & {
        background-image: linear-gradient(
                rgba(195, 198, 0, 0),
                rgba(195, 198, 0, 0.5)
            ),
            url(${({ localImage, burger }) =>
                !localImage
                    ? `/static/images/burgers/teaser/${burger.id}.webp`
                    : localImage});
    }

    :global(.no-webp) & {
        background-image: linear-gradient(
                rgba(195, 198, 0, 0),
                rgba(195, 198, 0, 0.5)
            ),
            url(${({ localImage, burger }) =>
                !localImage
                    ? `/static/images/burgers/teaser/${burger.id}.jpg`
                    : localImage});
    }
`

const Inner = styled.p`
    margin: 0;
    padding: 20px;
    color: #fff;
    text-shadow: 3px 3px 6px #000;
    opacity: 0.8;
    text-transform: uppercase;
    float: left;
`

const Teaser = props => (
    <Container {...props}>
        <Inner>
            {props.burger.rank}.
            {props.burger.name}
        </Inner>
    </Container>
)

Teaser.propTypes = {
    burger: shape({ id: string, name: string, web: string }).isRequired,
    localImage: string
}

Teaser.defaultProps = {
    localImage: null
}

export default Teaser
