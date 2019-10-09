import React, { Component } from 'react';
import './App.css';
import CreatePostComponent from './components/create_post/CreatePostComponent';
import PostComponent from './components/post/PostComponent';
import SizeWrapper from './components/SizeWrapper';
import { postRef } from './firebase';
import { CreateAuthorComponent } from './components/CreateAuthorComponent';

export const AUTHOR_KEY = 'ehcg_session_user';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        header: '',
        content: '',
        footer: '',
      },
      posts: [],
      author: null,
    }

    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }

  componentDidMount() {
    const authorName = sessionStorage.getItem(AUTHOR_KEY);
    if (authorName) {
      this.setState({author: {
        name: authorName
      }});
    }

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
            author: value.author,
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

  setAuthor = (name) => {
    const newAuthor = {
      name: name, // TODO Add image
    };
    sessionStorage.setItem(AUTHOR_KEY, name);
    this.setState({
      author: newAuthor,
    });
    console.log('New Author', newAuthor);
  }

  render() {
    const {author} = this.state;
    if (!author) {
      return (
        <SizeWrapper>
          <div>
            <CreateAuthorComponent
              setAuthor={this.setAuthor}
            />
          </div>
        </SizeWrapper>
      )
    }

    console.log('Author', author);
    return (
      <SizeWrapper>
        <div>
          <CreatePostComponent className="CreatePost"
            onSubmit={this.handlePostSubmit}
            post={this.state.post}
            author={author}
          />
          {this.state.posts.map((obj, i) => <PostComponent post={obj} key={i} author={author} />)}
        </div>
      </SizeWrapper>
    );
  }
}

export default App;
