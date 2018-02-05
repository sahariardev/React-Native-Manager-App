
import React, { Component } from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from "./src/reducers";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import Router from "./src/Router";


class App extends Component {

   componentWillMount(){
    const config = {
    apiKey: "AIzaSyAi1Hji37CBPbGyx_NROuebIVXPznvNuNw",
    authDomain: "manager-9d718.firebaseapp.com",
    databaseURL: "https://manager-9d718.firebaseio.com",
    projectId: "manager-9d718",
    storageBucket: "manager-9d718.appspot.com",
    messagingSenderId: "601941045699"
  };
  firebase.initializeApp(config);



   }
  render() {
    const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
       <Provider store={store}>

          <Router/>

       </Provider>
    );
  }
}
export default  App;
