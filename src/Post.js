import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDeletePost } from "./reducers/postReducer";
class Post extends Component {
  constructor() {
    super();
    this.handleSetEdit = this.handleSetEdit.bind(this);
  }
  handleSetEdit(event) {
    this.props.editPost(true, this.props.post.id);
  }
  render() {
    return (
      <div className="post">
        <h2 className="post_title">{this.props.post.titulo}</h2>
        <p className="post_message">{this.props.post.contenido}</p>
        <div className="control-buttons">
          <button className="edit" onClick={() => this.handleSetEdit()}>
            Edit
          </button>
          <button
            className="delete"
            onClick={() => this.props.fetchDeletePost(this.props.post.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

//export default connect(state => ({
//  posts: state.root
//}))(Post);

export default connect(
  state => ({
    posts: state.root
  }),
  {
    fetchDeletePost
  }
)(Post);
