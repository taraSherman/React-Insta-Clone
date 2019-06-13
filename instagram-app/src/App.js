import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
        posts: dummyData
      };
  }

  render() {
      return(
          <div className="App">

            <div className="post-container-data">
              {this.state.posts.map(data => (
                <PostContainer key={data.timestamp} data={data} />
              ))}
            </div>
          </div>
      )
  };
};

export default App;

// small change for initial commit