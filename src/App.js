import React from 'react'
import { geolocated } from "react-geolocated";
import ForecastComponent from './WeatherComponent';
import WeatherComponent from './ForecastComponent';

class App extends React.Component {
render(){
return(
<div className="App">
 {this.props.isGeolocationAvailable && this.props.isGeolocationEnabled && this.props.coords
 ?(
  <div>
<WeatherComponent latitude={this.props.coords.latitude} longitude= {this.props.coords.longitude}/>
<ForecastComponent latitude={this.props.coords.latitude} longitude= {this.props.coords.longitude}/>
  </div>
 )
:<div>Getting the location data&hellip:</div>}
</div>

);
}
}
export default geolocated({
positionOptions:{
  enableHighAccuracy: false,
},
userDecisionTimeout: 5000,
})(App);