
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container:{
      position:'absolute',
      top:0,
      bottom:0,
      left:0,
      right:0,
      justifyContent:'flex-end',
      alignItems:'center'
  },
  map:{
      position:'absolute',
      top:0,
      bottom:0,
      left:0,
      right:0,
  },
  header:{
      backgroundColor: "rgba(133,120,255,1)",
      opacity: 1,
      shadowColor: "green",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 0
  },
  btn: {
      marginTop: 10,
      alignSelf: 'center',
      width: 101.11,
      backgroundColor: "rgba(133,120,255,1)",
      shadowColor: "rgba(73,73,73,1)",
      shadowOffset: { width: 2, height: 3 },
      shadowRadius: 10,
      shadowOpacity: 0.98,
      opacity: 1
  },
  textCenter:{
      fontWeight: 'bold',
      color: "rgba(255,255,255,1)"
  },
  modalView:{
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: 22
  }
};
