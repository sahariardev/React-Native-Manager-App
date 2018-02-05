import _ from "lodash";
import React,{Component} from "react";
import {Text,View,ListView} from "react-native";
import {connect} from "react-redux";
import {fetchEmployee} from "../actions";
import ListItem from "./ListItem";  

class TestList extends Component
{
  componentWillMount()
 {
   this.props.fetchEmployee();
   this.createDataSource(this.props);
 }
 componentWillReceiveProps(nextProps)
 {
   this.createDataSource(nextProps)
 }

 createDataSource({employees})
 {
   const ds = new ListView.DataSource({
     rowHasChanged : (r1,r2) => r1 != r2
   });
   this.dataSource=ds.cloneWithRows(employees);
 }
 renderRow(employee)
 {
  return <ListItem employee={employee}/>
 }
  render()
  {
    return (
             <ListView
              enableEmptySection
              dataSource={this.dataSource}
              renderRow={this.renderRow}

              />


    );
  }
}

const mapStateToProps = state =>{
  const employees=_.map(state.employees,(val,uid) => {
    return {...val,uid};
  });

  return {employees};

}
export default connect(mapStateToProps,{fetchEmployee}) (TestList);
