import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const gifs = [
      { id: "9Jghav7pkL5gxPOPnA" },
      { id: "5zw4jVb0ghKhoKhcNN"}
    ];
    return(
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
          <Gif id="Y1MmEE3W3Q6Cslc8X3"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
