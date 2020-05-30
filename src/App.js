import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      photos: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(data => data.json())
      .then(albums => {
        this.setState({albums});
      });
  }

  showPhotos(event) {
    let albumId = event.target.value;
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(data => data.json())
      .then(photos => {
        this.setState({photos});
      })
  }

  render() {
    return (
        <div className="App">
          <h1>Select an album:</h1>
          <select onChange={this.showPhotos.bind(this)}>
            {this.state.albums.map(album => {
              return (
                <option key={album.id} value={album.id}>{album.title}</option>
              )
            })}
          </select>
          <br />
          <br />
          <hr />
          <div>
            {this.state.photos.map(photo => {
              return (
                <div className='imgShower'>
                  <div>
                    <img src={photo.thumbnailUrl} alt='album' />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    );
  }

}

export default App;
