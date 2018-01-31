import styled from 'react-emotion'

const BurgerGrid = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-gap: 0.4rem;
    height: 100vh;
    grid-template-columns: 100%;
    grid-auto-rows: 40%;

    @media all and (min-width: 500px) {
        grid-template-columns: 50% 50%;
        grid-auto-rows: 70%;
    }

    @media all and (min-width: 750px) and (orientation: portrait) {
        grid-template-columns: 50% 50%;
        grid-auto-rows: 70%;
    }

    @media all and (min-width: 750px) and (orientation: landscape) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-auto-flow: dense;
        grid-auto-rows: 40%;
    }

    @media all and (min-width: 1200px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-flow: dense;
        grid-auto-rows: 40%;
    }

    a {
        text-decoration: none;
    }
`

export default BurgerGrid
