import React, { Component } from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Container, Content, Header, Body, Title, Form, Item, Input, Label, Button } from 'native-base';
import MapView,{ Marker } from 'react-native-maps';
import theme from "../themes/base-theme";
import styles from "./styles";

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            markers : [
                { latlng : { latitude: 37.78825, longitude: -122.4324 }, title:'Test', description: 'Testing marker on map'}
            ],
            modalVisible: false,
            selectedLocation: {},
            name:''
        }
    }

    closeModal() {
        this.setState({modalVisible: false});
    }

    openModal(){
        this.setState({modalVisible: true,name:''});
    }

    saveLocation(){
        let location = this.state.selectedLocation;
        let title = this.state.name;
        this.setState({
            markers: [
                ...this.state.markers,
                {
                  latlng: location,
                  title: title
                }
            ],
            modalVisible: false
        })
    }

    onMapPress(e) {
        // alert(JSON.stringify(e.nativeEvent.coordinate));
        this.setState({selectedLocation: e.nativeEvent.coordinate});      
    }

  	render() {    
	    return (
	    	<Container theme={theme} style={styles.container}>

              <MapView
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onPress={(e) => {this.onMapPress(e);this.openModal()} }
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
                  <View>                    
                      <Header style={styles.header}>
                          <Body>
                            <Title>Header</Title>
                          </Body>
                      </Header>
                      <View style={{marginTop: 22}}>
                          <Form>
                              <Item floatingLabel>
                                  <Label>Name</Label>
                                  <Input onChangeText={(text) => this.setState({name:text})} value={this.state.name} placeholder="" />
                              </Item>
                          </Form>
                          <Button style={styles.btn} success onPress={()=>this.saveLocation()}>
                              <Text style={styles.textCenter}> Add </Text>
                          </Button>
                          <Button style={styles.btn} light onPress={()=>this.closeModal()}>
                              <Text style={styles.textCenter}> Cancel </Text>
                          </Button>
                      </View>                 
                  </View>
              </Modal>
          </Container>
	    );
  	}
}

export default HomeComponent;