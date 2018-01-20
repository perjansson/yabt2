import { Fragment } from 'react'

const BurgerMenu = ({ name, rank, web, showMap, onToggleBurgerMap }) => (
    <Fragment>
        <h1>{name}</h1>
        <nav className="links">
            <span>rank {rank}</span>
            <a href={web} target="_blank">
                homepage
            </a>
            <a
                href="#"
                data-test-name="toggleBurgerMapLink"
                onClick={onToggleBurgerMap}
                tabIndex="-1"
            >
                {showMap ? 'map' : 'burger'}
            </a>
        </nav>
        <style jsx>
            {`
                .links > *:not(:last-child):after {
                    content: ' | ';
                }
            `}
        </style>
    </Fragment>
)

export default BurgerMenu
