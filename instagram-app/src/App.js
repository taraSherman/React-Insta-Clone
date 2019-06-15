import React, { Component } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor () {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }


  render() {
    return (
      <div className="App">
        <div className="searchbar">
          <SearchBar />
        </div>

        <div className="postcontainer-data">
        {this.state.posts.map(data => (
          <PostContainer key={data.timestamp} data={data} />
        ))}
        </div>
      </div>
    );
  }
};

export default App;