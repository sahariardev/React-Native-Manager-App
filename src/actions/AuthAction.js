import firebase from "firebase";
import {Actions} from "react-native-router-flux";
import {
       EMAIL_CHANGED,
       PASSWROD_CHANGED,
       LOGIN_USER_SUCCESS,
       LOGIN_USER_FAILED,
       LOGIN_USER
       } from "./types";
export const emailChange = (email) => {

    console.log(email);
    return {
         type:EMAIL_CHANGED,
         payload: email
    };

};
export const passwordChange = (password) => {

  console.log(password);
   return {
      type : PASSWROD_CHANGED,
      payload : password

   };
};
export const loginUser=({email,password}) => {

    return (dispatch) =>
    {
        dispatch({type:LOGIN_USER})
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => LoginSucceed(user,dispatch))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(user => LoginSucceed(user,dispatch))
          .catch(()=>{dispatch({type:LOGIN_USER_FAILED})})
        })
    }

};

const LoginSucceed =(user,dispatch) =>
{
  console.log("Here on the su");
  dispatch({type:LOGIN_USER_SUCCESS,payload:user});
  Actions.main();
};
