import React, {Component} from "react";
import {connect} from "react-redux";
import {Picker,Text,View} from "react-native";
import {employeeUpdate} from "../actions";
import {Card,CardSection,Input,Button} from  './common';

class EmployeeFormContainer extends Component
{
  render() {

    return (
       <View>
       <CardSection>
       <Input
       value={this.props.name}
       label="Name" placeholder="jonDoe"
       onChange={text=>this.props.employeeUpdate({prop:'name',value:text})}
       />
       </CardSection>
       <CardSection>
       <Input
        value={this.props.phone}
        label="Phone"
        placeholder="555-555-555"
        onChange={text=>this.props.employeeUpdate({prop:'phone',value:text})}

       />

       </CardSection>
       <CardSection style={{flexDirection:'column'}}>
         <Text style={styles.pickerlabelStyle}>Shift</Text>
          <View style={{paddingLeft:15}}>
         <Picker

         selectedValue={this.props.shift}
         onValueChange={(text) => this.props.employeeUpdate({prop:'shift',value:text})}>
         <Picker.Item label="Monday" value="Monday" />
         <Picker.Item label="Sunday" value="Sunday" />
         <Picker.Item label="Saturday" value="Saturday" />
         <Picker.Item label="Wednesday" value="Wednesday" />
         <Picker.Item label="Friday" value="Friday" />
         <Picker.Item label="Tuesday" value="Tuesday" />
         </Picker>
         </View>
        </CardSection>
       </View>

    );
  };
}
const styles={
   pickerlabelStyle: {
      fontSize:18,
      paddingLeft:20
   }
}
const mapStateToProps = (state) => {
  const {name,phone,shift}=state.employeeForm
   return {name,phone,shift};
}
export default connect(null,{employeeUpdate})(EmployeeFormContainer);
