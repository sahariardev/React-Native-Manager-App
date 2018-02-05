import {EMPLOYEE_UPDATE,RESET_FORM,FETCH_LIST} from "../actions/types";

const INITIAL_STATE={
 name : '',
 phone:'',
 shift: 'Monday',

};

export default (state=INITIAL_STATE,action) => {
switch (action.type) {
  case EMPLOYEE_UPDATE:
   console.log("here");
   return {...state,[action.payload.prop]:action.payload.value};
  case RESET_FORM :
  return INITIAL_STATE;
  
  default:
  return state;

}

};
