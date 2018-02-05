import React, {Component} from "react";
import {connect} from "react-redux";
import _ from "lodash";
import Communications from 'react-native-communications';
import {Picker,Text,View} from "react-native";
import {employeeUpdate,updateEmployeeinfo,deleteEmployee} from "../actions";
import {Card,CardSection,Input,Button,Confirm} from  './common';
import EmployeeFormContainer from "./EmployeeFormContainer";

class EmployeeEdit extends Component
{
  state = {showModal:false};
   componentWillMount()
   {
    _.each(this.props.employee,(value,prop) => {
       this.props.employeeUpdate({prop,value})
    });
   }
   onDeclined()
   {
     this.setState({showModal:!this.state.showModal});
   }
   onAccept()
   {
     const {uid}=this.props.employee;
     this.props.deleteEmployee({uid});
   }
   onTextPress()
   {
     const {phone,shift}=this.props;
     Communications.text(phone,`your shift is on ${shift}`);
   }
   onSaveChangesPress()
   {
     const {name,phone,shift}=this.props;
     const {uid}=this.props.employee;
     this.props.updateEmployeeinfo({name,phone,shift,uid});
   }
   render()
   {
     return (

        <Card>
         <EmployeeFormContainer {...this.props}/>
         <CardSection>
           <Button onPress={this.onSaveChangesPress.bind(this)}>
            Save changes
           </Button>
         </CardSection>
         <CardSection>
           <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
           </Button>
         </CardSection>
         <CardSection>
           <Button onPress={()=>{this.setState({showModal:!this.state.showModal})}}>
            Fire
           </Button>
         </CardSection>
         <Confirm visible={this.state.showModal}
                  onAccept={this.onAccept.bind(this)}
                  onDeclined={this.onDeclined.bind(this)}
         >
          Are you sure you want to delete this ?
         </Confirm>
        </Card>
     );
   }

}
const mapStatetoProps=(state)=>{

  const {name,phone,shift} =state.employeeForm;
  return {name,phone,shift};
}
export default connect(mapStatetoProps,{employeeUpdate,updateEmployeeinfo,deleteEmployee}) (EmployeeEdit);
