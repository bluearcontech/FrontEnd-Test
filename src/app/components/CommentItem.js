import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Wrapper = styled.div`
  padding: 10px 0;
`;
const Author = styled.div`
  width: 100px;
  font-weight: bold;
  font-weight: 16px;
  margin-bottom: 5px;
`;

const Content = styled.div`
  flex-grow: 1;
  font-weight: 12px;
  color: rgba(0, 0, 0, 0.7);
`;

const CommentTime = styled.div`
  text-align: right;
  letter-spacing: 2.5px;
  font-size: 14px;
  padding-top: 5px;
`;

const CommentItem = (props) => {

  const { user, content, date } = props.item

  return (
    <Wrapper>
      <Author>{user}</Author>
      <Content>{content}</Content>
      <CommentTime>{moment(date).format('YYYY-MM-DD')}</CommentTime>
    </Wrapper>
  )
}

export default CommentItem;