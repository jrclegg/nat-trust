import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import axios from 'axios';

const accessToken = "pk.eyJ1IjoiamNsZWdnIiwiYSI6ImNqdThyYmNjaDBjMTYzeW4wamZkNG8za28ifQ.P-f7Ail31NnEkbwxDdYGuA";
const style = "mapbox://styles/mapbox/streets-v10";

const Map = ReactMapboxGl({
  accessToken
});

const mapStyle = {
  height: '100vh',
  width: '100vw'
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      openData: []
    }
  }

  componentDidMount() {
    axios.get(`https://opendata.arcgis.com/datasets/202ec400dfe9471aaf257e4b6c956394_0.geojson`)
      .then(res => {
        const openData = res.data;
        this.setState({ openData });
      })
  }
  render() {
    return (
      <Map
        style={style}
        containerStyle={mapStyle}
      />
    );
  }
}

export default App;