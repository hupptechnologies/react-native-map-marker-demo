import React, { Component } from 'react';
import { StyleProvider, Container, Content, Header, Body, Title } from 'native-base';
import HomeComponent from './components/Home';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
const stack = StackNavigator({
    Home: { screen: HomeComponent },    
  },
  { 
    initialRouteName : 'Home'
  }
);
function setup():React.Component {
  class Root extends Component {

    constructor() {
      super();
      this.state = {
        isLoading: false
      };
    }

    render() {
      return (
        <StyleProvider style={getTheme()}>              
              <HomeComponent/>          
        </StyleProvider>
      );
    }
  }

  return Root;
}

export default setup;
