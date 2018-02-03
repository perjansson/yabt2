import { Fragment } from 'react'
import styled from 'react-emotion'

const Nav = styled.nav`
    > *:not(:last-child):after {
        content: ' | ';
    }
`

const BurgerMenu = ({
    name,
    rank,
    web,
    position,
    showMap,
    onToggleBurgerMap
}) => (
    <Fragment>
        <h1>{name}</h1>
        <Nav>
            <span>rank {rank}</span>
            <a href={web} target="_blank">
                homepage
            </a>
            {position && (
                <a
                    href="#"
                    data-test-name="toggleBurgerMapLink"
                    onClick={onToggleBurgerMap}
                    tabIndex="-1"
                >
                    {showMap ? 'map' : 'burger'}
                </a>
            )}
        </Nav>
    </Fragment>
)

export default BurgerMenu
