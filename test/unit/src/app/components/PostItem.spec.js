import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'
import Link from 'react-router/lib/Link'
import styled from 'styled-components'
import PostItem from '../../../../../src/app/components/PostItem'

describe('<PostItem />', () => {

  let props, param
  beforeEach(() => {
    props = {
      item: {
        'id': "10",
        "publish_date": '2017-1-1',
        "author": 'Thomas Mon',
        'description': 'test description'
      }
    }
  })

  it('should have one link', () => {
    const item = {
      'id': "10",
      "publish_date": '2016-03-28 08:00:00.000',
      "author": 'Thomas Mon',
      'description': 'test description'
    }
    const wrapper = shallow(<PostItem item={item}/>)

    const link = wrapper.find('Link')
    expect(link.length).toBe(1)

  })

  it('should have one div', () => {
    const item = {
      'id': "10",
      "publish_date": '2016-03-28 08:00:00.000',
      "author": 'Thomas Mon',
      'description': 'test description'
    }
    const wrapper = shallow(<PostItem item={item}/>)

    const link = wrapper.find('div')
    expect(link.length).toBe(1)

  })

})
