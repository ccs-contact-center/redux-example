import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditComponent from "./EditComponent";
import { fetchGetPosts } from "./reducers/postReducer";
class AllPost extends Component {
  state = {
    editing: false
  };

  constructor() {
    super();
    this.editPost = this.editPost.bind(this);
  }
  componentDidMount() {
    this.props.fetchGetPosts();
  }

  editPost(editing, index) {
    this.setState({
      editing: editing,
      index: index
    });
  }

  render() {
    return (
      <div>
        <h1 className="post_heading">All Posts</h1>

        {this.props.posts.posts.map(post => (
          <div key={post.id}>
            {this.state.editing && post.id === this.state.index ? (
              <EditComponent
                post={post}
                key={post.id}
                editPost={this.editPost}
              />
            ) : (
              <Post post={post} key={post.id} editPost={this.editPost} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    posts: state.root
  }),

  {
    fetchGetPosts
  }
)(AllPost);
