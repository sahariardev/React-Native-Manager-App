import React , {Component } from "react";
import {Text,View} from "react-native";
import {connect} from "react-redux";
import firebase from "firebase";
import {Actions} from "react-native-router-flux";
import {emailChange,passwordChange,loginUser} from "../actions";
import {Card,CardSection,Input,Button,Spinner} from "./common";

class LoginForm extends Component
{

  onEmailChange(text)
  {

      this.props.emailChange(text);
  }
  onPasswordChange(text)
  {

    this.props.passwordChange(text);
  }
  onPressLogin()
  {
    console.log("OnPressLogin is working");
    const {email,password}=this.props;
    this.props.loginUser({email,password});
  }
  renderButton()
  {
    if(this.props.loading)
    {
        return <Spinner />;
    }
    return (
      <Button onPress={this.onPressLogin.bind(this)}>
        Login
      </Button>

    );
  }
  
  render ()
  {


     return (
       <Card>
       <CardSection>
            <Input
            value={this.props.email}
            label="Email"
            placeholder="email@gmail.com"
            onChange={this.onEmailChange.bind(this)} />
         </CardSection>
         <CardSection>
           <Input
           value={this.props.password}
           label ="password"
           placeholder="password"
           secureTextEntry
           onChange={this.onPasswordChange.bind(this)} />

         </CardSection>
         <Text style={styles.errorStyle}>
           {this.props.error}
         </Text>
         <CardSection>
          {this.renderButton()}
         </CardSection>
       </Card>



     );
  }
}
const styles={
  errorStyle: {
    color:'red',
    fontSize:18,
    alignSelf:'center'
  }
}
const mapStateToProp = state => {

  return {

    email :state.auth.email,
    password : state.auth.password,
    error: state.auth.error,
    loading:state.auth.loading
  };
}
export default connect(mapStateToProp,{

  emailChange,
  passwordChange,
  loginUser

}) (LoginForm);
