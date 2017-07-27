import React from 'react';
import {View} from 'native-base';
import MapView from 'react-native-maps';
import styles from './MapContainerStyles';
export const MapContainer= ({region})=>{
return(
  <View style={styles.container}>
  <MapView
       style={styles.map}
       zoomEnabled = {true}
       provider={MapView.PROVIDER_GOOGLE}
       region={region}
       >
       <MapView.Marker
            coordinate={region}
            pinColor="green"
        />
  </MapView>
  </View>
)
}
export default MapContainer;
