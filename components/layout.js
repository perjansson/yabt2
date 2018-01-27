import { func, oneOfType, arrayOf, node } from 'prop-types'
import styled from 'react-emotion'

const Body = styled.div`
    height: 100vh;
`

const Header = styled.div`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
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

    @media all and (min-width: 500px) {
        font-size: 20px;
        margin-top: -10px;
    }

    @media all and (min-width: 820px) {
        font-size: 32px;
        margin-top: -20px;
    }

    @media all and (min-width: 1200px) {
        font-size: 44px;
        margin-top: -50px;
    }
`

const Layout = ({ renderHeader, children }) => (
    <Body key="body">
        <Header>{renderHeader()}</Header>
        {children}
    </Body>
)

Layout.propTypes = {
    renderHeader: func,
    children: oneOfType([arrayOf(node), node]).isRequired
}

Layout.defaultProps = {
    renderHeader: () => {}
}

export default Layout
