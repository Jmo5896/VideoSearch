import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import _ from 'lodash';
const apiKey = 'AIzaSyDtq3P6uITnkaNirfATp1XVqCOXU2Qwpzc';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  //when the page loads
  componentDidMount() {
    this.runSearch('fish sticks');
  }

  //runs the youtube search, has to be this format from the youtube-api-search
  runSearch = term => {
    YouTubeSearch({ key: apiKey, term: term }, videos => {
      console.log(videos);
      // the only way to get react to rerender dependent child components
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() { 

   const throttleSearch =  _.debounce(this.runSearch, 700);
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar runSearch={throttleSearch} />
          </Col>
        </Row>
        <Row>
          <Col md='8'>
            <VideoDetail selectedVideo={this.state.selectedVideo} />
          </Col>
          <Col md='4'>
            <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
