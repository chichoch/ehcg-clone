import React, { Component } from 'react';
import './App.css';
import CreatePostComponent from './components/create_post/CreatePostComponent';
import PostComponent from './components/post/PostComponent';
import SizeWrapper from './components/SizeWrapper';
import { postRef } from './firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        header: '',
        content: '',
        footer: '',
      },
      posts: []
    }

    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  componentDidMount() {
    postRef.on('value', snapshot => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        const array = Object.entries(data).map(([key, value]) => {
          return({
            id: key,
            header: value.header,
            content: value.content,
            footer: value.footer,
            timestamp: value.timestamp,
            comments: value.comments,
          });
        });

        const posts = array.sort((a, b) => b.timestamp - a.timestamp);
        console.log('Posts', posts);
        this.setState({
          posts: posts
        });
      }
    });
  }

  handlePostSubmit(posted) {
    postRef.push().set(posted.post);
  }

  render() {
    return (
      <SizeWrapper>
        <div>
          <CreatePostComponent className="CreatePost"
            onSubmit={this.handlePostSubmit}
            post={this.state.post}
          />
          {this.state.posts.map((obj, i) => <PostComponent post={obj} key={i} />)}
        </div>
      </SizeWrapper>
    );
  }
}

export default App;
