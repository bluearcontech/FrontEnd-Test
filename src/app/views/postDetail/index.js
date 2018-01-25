import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'
import moment from 'moment'
import { RingLoader } from 'react-spinners'
import CommentItem from '../../components/CommentItem'
import AddComment from '../../components/AddComment'
import { loadPostsRequest } from '../../actions/posts'
import { writeCommentAction, loadCommentsAction } from '../../actions/comments'

const Wrapper = styled.div`
  border: solid 1px;
  padding: 25px;
  margin-top: 30px;
`

const Property = styled.span`
  margin-right: 20px;
`

const Comment = styled.div`
  margin-bottom: 15px;
`

const SpinnerDiv = styled.div`
  margin: 60px auto 0 auto;
  width: 70px;
  height: 70px;
`

class PostDetail extends React.Component {

  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      comment: ''
    }

    this.writeComment = this.writeComment.bind(this)
    this.handleComment = this.handleComment.bind(this)
  }

  componentDidMount() {
    this.props.loadCommentsAction(this.props.params.id)
    if (this.props.posts) {
      this.props.loadPostsRequest()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.submit === true && this.props.submit === false) {
      this.setState({
        comment: ''
      })
    }
  }

  handleComment(e) {
    this.setState({
      comment: e.target.value
    })
  }

  writeComment(evt) {
    const comment = {
      user: 'admin',
      content: this.state.comment,
      postId: parseInt(this.props.params.id, 10),
      date: new Date().toISOString().slice(0, 10)
    }
    evt.preventDefault()
    this.props.writeCommentAction(comment)
  }

  render() {
    const { posts, comments, submit } = this.props
    const { comment } = this.state;
    const detailPost = posts.find(item => item.id == this.props.params.id)
    return (
      <div>
        {
          detailPost && (
            <Wrapper>
              <h3>{detailPost.title}</h3>
              <Property>{moment(detailPost.publish_date).format('YYYY-MM-DD')}</Property>
              <Property>{detailPost.author}</Property>
              <p style={{ fontWeight: 'bold' }}>{detailPost.description}</p>
              <div dangerouslySetInnerHTML={{ __html: detailPost.content }} />
              {comments && <h1>Comments</h1>}
              {comments &&
                comments.map((comment, index) => (
                  <CommentItem item={comment} key={comment.id} />
                ))
              }
              {submit && (
                <SpinnerDiv>
                  <RingLoader
                    color={'#123abc'}
                    loading={submit}
                  />
                </SpinnerDiv>
              )}
              <AddComment
                handleChange={this.handleComment}
                handleSubmit={this.writeComment}
                submitDisabled={!this.state.comment.length}
                loading={submit}
                input={comment}
              />
            </Wrapper>
          )
        }
      </div>
    )
  }
}

PostDetail.defaultProps = {
  posts: [],
  comments: []
}

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments.comments,
  submit: state.comments.submit
})

const mapDispatchToProps = {
  loadPostsRequest,
  writeCommentAction,
  loadCommentsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)