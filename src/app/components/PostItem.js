import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Link from 'react-router/lib/Link'

const Wrapper = styled.div`
  border: solid 1px;
  padding: 25px;
  margin-top: 30px;
`

const Property = styled.span`
  margin-right: 20px;
`

export default class PostItem extends React.Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { item } = this.props
    return (
      <Wrapper>
        <Link to={`/post/${item.id}`}><h3>{item.title}</h3></Link>
        <Property>{moment(item.publish_date).format('YYYY-MM-DD')}</Property>
        <Property>{item.author}</Property>
        <p style={{ fontWeight: 'bold' }}>{item.description}</p>
        <div dangerouslySetInnerHTML={{ __html: item.content }} />
      </Wrapper>
    )
  }
}