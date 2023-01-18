import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Octicons from "react-native-vector-icons/Octicons"
import Feather from "react-native-vector-icons/Feather"
import {Divider} from "react-native-elements"
const BottomContainer = () => {
  return (
   <View style={{position:"absolute",width:"100%",bottom:0,backgroundColor:"#000"}}>
    <Divider width={1} orientation="vertical" color='yellow'/>
     <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",height:50,paddingTop:10}}>
        <TouchableOpacity>
        <Entypo name='home' color={"white"} size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome name='search' color={"white"} size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Octicons name='video' color={"white"} size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Feather name='shopping-bag' color={"white"} size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require("../../assets/sudip.png")} style={{width:30,height:30,borderRadius:50,borderWidth:2,borderColor:'#ff8501'}}/>
        </TouchableOpacity>
    </View>
   </View>
  )
}

export default BottomContainer

const style=StyleSheet.create({

})