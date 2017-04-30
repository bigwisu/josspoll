import React, { Component } from 'react';
import Editor from 'react-medium-editor';
import classnames from 'classnames';

import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

class Post extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: "Start typing new post here..."
    };
  }

  render() {
    return (
        <div>
            <h1>New Post</h1>
            <Editor
                tag="pre"
                text={this.state.text}
                onChange={this.handleChange}
                options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}
            />
        </div>
    )
  }
}

export default Post;
