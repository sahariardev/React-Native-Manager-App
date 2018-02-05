import {EMPLOYEE_UPDATE,RESET_FORM,FETCH_LIST} from "./types";
import firebase from "firebase";
import {Actions} from "react-native-router-flux";
export const employeeUpdate=({prop,value}) => {
  console.log(prop+"  "+value);
 return {

   type:EMPLOYEE_UPDATE,
   payload: {prop,value}
 }
};



export const saveEmployee=({name,phone,shift})=>{

  const {currentUser}=firebase.auth();

  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push({name,phone,shift})
  .then(()=>{
    dispatch({type:RESET_FORM});
    Actions.testList({type:'reset'});

  });
 }
};

export const fetchEmployee = () =>
{

  const {currentUser}=firebase.auth();
  return (dispatch) =>{
   firebase.database().ref(`/users/${currentUser.uid}/employees`)
   .on('value',snapshot=>{
     dispatch({
      type:FETCH_LIST,
      payload:snapshot.val()

     });
   });

  }
}
export const  updateEmployeeinfo= ({name,phone,shift,uid}) => {

  const {currentUser}=firebase.auth();
  return (dispatch)=> {
   firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
   .set({name,phone,shift})
   .then(()=>{

     dispatch({type:RESET_FORM});
     Actions.testList({type:'reset'});
   });

  }
};

export const deleteEmployee = ({uid}) =>
{
  const {currentUser}=firebase.auth();
  return(dispatch) => {
   firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
   .remove()
   .then(()=>{
     Actions.testList({type:'reset'});
   })

  }
}
