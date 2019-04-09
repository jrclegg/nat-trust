import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

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
