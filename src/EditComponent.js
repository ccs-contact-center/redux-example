import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUpdatePost } from "./reducers/postReducer";

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const titulo = this.getTitle.value;
    const contenido = this.getMessage.value;
    const data = {
      titulo,
      contenido
    };

    this.props.fetchUpdatePost(this.props.post.id, data);
    this.props.editPost(false);
  };
  render() {
    return (
      <div key={this.props.post.id} className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            defaultValue={this.props.post.titulo}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getMessage = input)}
            defaultValue={this.props.post.contenido}
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
//export default connect()(EditComponent);

export default connect(
  state => ({
    posts: state.root
  }),

  {
    fetchUpdatePost
  }
)(EditComponent);
