/**
 * @overview Home page.  Renders static content.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadPostsRequest } from '../../actions/posts'

import PostItem from '../../components/PostItem';

class Home extends React.Component {

  static propTypes = {
    loadPostsRequest: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.posts) {
      const { posts } = nextProps;
      const sortedPosts = this.orderByDate(posts, 'publish_date')
      this.setState({ posts: sortedPosts })
    }
  }

  componentDidMount() {
    this.props.loadPostsRequest()
  }

  orderByDate(arr, publish_date) {
    return arr.slice().sort(function (a, b) {
      return a[publish_date] > b[publish_date] ? -1 : 1;
    });
  }

  render() {
    const { posts } = this.state

    return <div>
      {posts &&
        posts.map((post, index) => (
          <PostItem key={index} item={post} />
        ))
      }
    </div>
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const mapDispatchToProps = {
  loadPostsRequest,
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
