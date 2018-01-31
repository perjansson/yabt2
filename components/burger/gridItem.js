import styled from 'react-emotion'

const GridItem = styled.li`
    font-size: 28px;
    float: right;

    @media all and (min-width: 500px) {
        font-size: 24px;
    }

    @media all and (min-width: 750px) {
        float: left;

        grid-column: ${({ isBig, isWide }) =>
            `span ${isBig || isWide ? '2' : '1'}`};
        grid-row: ${({ isBig, isHigh }) =>
            `span ${isBig || isHigh ? '2' : '1'}`};
        font-size: ${({ isBig, isHigh, isWide }) =>
            `${isBig || isWide ? '40px' : isHigh ? '25px' : '30px'}`};
    }

    @media all and (min-width: 1200px) {
        float: left;
    }
`

export default GridItem
