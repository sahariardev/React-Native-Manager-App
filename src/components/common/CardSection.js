import React from "react";
import {View,Text} from "react-native";

const CardSection= (props) => {


   return (
           <View style={[styles.container,props.style]}>
              {props.children}

            </View>

   );

}

const styles={

    container: {
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent: 'flex-start',
        borderColor:'#ddd',
        flexDirection:'row',
        position:'relative'

    }
}

export  {CardSection};
