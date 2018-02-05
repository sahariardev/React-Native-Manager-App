import React, {Component} from "react";
import {connect} from "react-redux";
import {Picker,Text,View} from "react-native";
import {employeeUpdate,saveEmployee} from "../actions";
import {Card,CardSection,Input,Button} from  './common';
import EmployeeFormContainer from "./EmployeeFormContainer";
class EmployeeForm extends Component
{
  onButtonPress()
  {
    const {name,phone,shift}=this.props;
    this.props.saveEmployee({name,phone,shift});
  }
  render()
  {
    return (
          <Card>
          <EmployeeFormContainer  />
            <CardSection>
             <Button onPress={this.onButtonPress.bind(this)}>
              Create
             </Button>
            </CardSection>
          </Card>

    );
  }
}
const mapStateToProps = (state) => {
  const {name,phone,shift}=state.employeeForm;
   return {name,phone,shift};
}
export default connect(mapStateToProps,{
  employeeUpdate,
  saveEmployee})(EmployeeForm);
