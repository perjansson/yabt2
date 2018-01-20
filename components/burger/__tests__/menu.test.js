import React from 'react'
import { shallow } from 'enzyme'

import Menu from '../menu'

const props = {
    name: 'Bun Meat Bun',
    rank: '4',
    web: 'http://www.bunmeatbun.se',
    showMap: true,
    onToggleBurgerMap: () => {
        console.log('Toggle clicked')
    }
}

describe('Menu', () => {
    it('should render menu', () => {
        const wrapper = shallow(<Menu {...props} />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should call onToggleBurgerMap prop on click', () => {
        const onToggleBurgerMap = jest.fn()
        const wrapper = shallow(
            <Menu {...props} onToggleBurgerMap={onToggleBurgerMap} />
        )

        const toggleLink = wrapper.find(
            'a[data-test-name="toggleBurgerMapLink"]'
        )
        toggleLink.simulate('click')

        expect(onToggleBurgerMap).toHaveBeenCalled()
    })
})
