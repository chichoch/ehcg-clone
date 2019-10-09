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
        const dataArray = Object.values(data);
        const posts = dataArray.sort((a, b) => b.timestamp - a.timestamp);
        console.log(posts);
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
