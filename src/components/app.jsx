import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list'
import giphy from 'giphy-api'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: "Y1MmEE3W3Q6Cslc8X3"
    }
  }

  search = (query) => {
    giphy('TKqkr6Y6jzkqcWGHVL7lyR2pUmwMTyRK').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifs: res.data });
    });
  }

  selectGif = (id) => {
    this.setState({ selectedGifId: id });
  }

  render(){
    return(
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
