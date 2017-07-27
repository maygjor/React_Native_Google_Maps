import React from 'react';
import {View,Text} from 'react-native';
import {Container} from 'native-base';
import MapContainer from './MapContainer/index';
class Home extends React.Component{
  componentDidMount(){
    this.props.getCurrentLocation();
  }
  render(){
    const region ={
      latitude:24.713552,
      longitude:46.675296,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    }
    return(
       <Container>
       {this.props.region.latitude &&
       <MapContainer region={this.props.region}/>
        }
       </Container>
      );
  }
}

export default Home;
