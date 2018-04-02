import React, { Component } from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Container, Header, Body, Title } from 'native-base';
import MapView,{ Marker } from 'react-native-maps';

const styles = StyleSheet.create({
    container: {    
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map:{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }    
});

type Props = {};
export default class App extends Component<Props> {  
    constructor(props) {
        super(props);
        this.state =  {
            markers : [
                { latlng : { latitude: 37.78825, longitude: -122.4324 }, title:'Test', description: 'Testing marker on map'}
            ],
            modalVisible: false
        }
    }

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    onMapPress(e) {
      this.setState({
        markers: [
          ...this.state.markers,
          {
            latlng: e.nativeEvent.coordinate                      
          },
        ],
      });      
    }

    render() {
        return (
          <Container style={styles.container}>
              <Header>
                <Body>
                  <Title>Header</Title>
                </Body>                
              </Header>
              <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onPress={(e) => {this.onMapPress(e);this.setModalVisible(!this.state.modalVisible) }}
              >
                {this.state.markers.map((marker,i) => (
                  <Marker key={i}
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                  />
                ))}
              </MapView>
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  alert('Modal has been closed.');
                }}>
                  <View style={{marginTop: 22}}>
                    <View>
                      <Text>Hello World!</Text>

                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text>Hide Modal</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
              </Modal>
          </Container>
        );
    }
}
