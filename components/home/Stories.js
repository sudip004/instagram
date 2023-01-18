import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import {user} from "../../data/userstories"
const Stories = () => {
  return (
    <View style={style.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                user.map((item,index)=>(
                    <View style={style.mapcontainer} key={index}>
                        <Image source={{uri: item.photo}} style={style.img}/>
                        <Text style={style.text}>{
                            item.name.length>10 ? item.name.slice(0,10).toLowerCase()+"..." : item.name.toLowerCase()
                        }</Text>
                    </View>
                ))
            }
        </ScrollView>
    </View>
  )
}

export default Stories

const style = StyleSheet.create({
    container:{
        marginBottom:18
    },
    mapcontainer:{
      alignItems:'center'
    },
    img:{
      width:70,
      height:70,
      resizeMode:"contain",
      marginLeft:6,
      borderRadius:50,
      borderWidth:3,
      borderColor:"#ff8501"
    },
    text:{
        color:"white"
    },
})