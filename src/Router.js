import React from 'react';
import {Scene, Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TestList from "./components/TestList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeEdit from "./components/EmployeeEdit";
import WelcomeScreen from "./components/WelcomeScreen";
const RouterComponent = () => {

  return (

    <Router sceneStyle={{paddingTop:65}}>
      <Scene key="parentScene">
       <Scene key="welcome" component={WelcomeScreen} hideNavBar={true}  initial/>
     </Scene>
      <Scene key="auth">

         <Scene key="login" component={LoginForm} title="Log in" />
      </Scene>
      <Scene key="main" >
        <Scene
         onRight={()=>{Actions.createEmployee()}}
         rightTitle="Add"
         key="testList" component={TestList} title="Dummy List" />
         <Scene key="createEmployee" title="Create Employee" component={EmployeeForm}  />
         <Scene key="employeeEdit" title="Edit Employee" component={EmployeeEdit}  />
      </Scene>

    </Router>

  );

}
export default RouterComponent;
