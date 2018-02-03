import { keyframes } from 'react-emotion'

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(1.2);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`

const blurIn = keyframes`
    from {
        filter: blur(50px);
    }
    to {
        filter: none;
    }
`

const bounceIn = keyframes`
    from {
        opacity: 0;
        transform: scale(1.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`

export default { fadeIn, blurIn, bounceIn }
