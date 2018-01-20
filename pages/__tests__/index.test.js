import { shallow } from 'enzyme'
import React from 'react'

import Index from '../index'

describe('Index', () => {
    it('should render with burger images', () => {
        const wrapper = shallow(<Index />)
        expect(wrapper).toMatchSnapshot()
    })
})
