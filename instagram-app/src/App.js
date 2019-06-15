import React, { Component } from "react";

import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <PostContainer data={this.state.data} />
        </div> 
      </div>
    );
  }
}

export default App;