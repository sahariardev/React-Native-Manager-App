import React from "react";
import {Text,View,Image,Linking} from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button"

const Album = (props) => {
 let album=props.album;
  return(
     <Card>
       <CardSection> 

          <View style={styles.thumbnailContainer}>

            <Image style={styles.thumbnailStyle} source={{uri : album.thumbnail_image}} />

          </View>


          <View style={styles.headerContentStyle}>

            <Text style={styles.headerTextStyle}>{album.title}</Text>
            <Text>{album.artist}</Text>

          </View>  
        </CardSection>
        <CardSection>

            <Image style= {styles.imageStyle} source={{uri : album.image}} />
        </CardSection>
          <Button onPress = {() => {Linking.openURL(album.url)}} />
        <CardSection>

           
        </CardSection>
      </Card>
  );


};

const styles={

      headerContentStyle : {

        flexDirection : 'column',
        justifyContent : 'space-around'
      },
      headerTextStyle : {
         fontSize : 18, 

      },
      thumbnailStyle : {
         height:50,
         width:50,

      },
      thumbnailContainer : {

          marginLeft:10,
          marginRight : 10,
          justifyContent : 'center',
          alignItems : 'center',

      },
      imageStyle : {

        height : 300,
        flex : 1,
        width : null,
      }


}

export default Album;