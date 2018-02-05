import React, {Component} from "react";
import {View,Text} from "react-native";
import firebase from "firebase";
import {Actions} from "react-native-router-flux"

class WelcomeScreen extends Component
{
  componentWillMount()
  {
    firebase.auth().onAuthStateChanged((user => {

      if(user)
      {
          Actions.main();
      }
      else {
        Actions.auth();
      }
    }))
  }
 render()
 {
   return (
     <View style={{
       flex:1,
       alignSelf:'center',
       justifyContent:'center'
     }}>
       <Text>Welcome Manager App</Text>
     </View>);
 }

}
export default WelcomeScreen;
