import { shallow } from 'enzyme'
import React from 'react'

import Burger from '../burger'
import Menu from '../../components/burger/menu'

describe('Burger', () => {
    it.skip('should render show map on map menu click', () => {
        const wrapper = shallow(<Burger />)
        const menu = wrapper.find(Menu)
        menu.prop('onToggleBurgerMap')({ preventDefault: jest.fn() })
        expect(wrapper.state().showMap).toEqual(true)
    })
})
