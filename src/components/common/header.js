import React from "react";
import {Text, View} from "react-native";

const Header =(props) => {

const {textStyle,bgColor } =styles;
    return (
          <View style={bgColor}>
                     <Text style={textStyle}>{props.headerText}</Text>
          </View>
    )

}

const styles= {
   textStyle : {
     fontSize : 18,

   },
   bgColor : {
       height:50,

       alignItems:'center',
        justifyContent:'center',
       backgroundColor:'white',
       shadowColor:'black',
       shadowOffset:{width:0,height:2},
       shadowOpacity:.9,
       elevation:2,
       position:'relative',
   }

};
export  {Header};
