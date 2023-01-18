import React from 'react'
import {View,Text,StyleSheet,StatusBar} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import AddNewPost from '../components/newpost/AddNewPost'

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:"black",flex:1}}>
        <AddNewPost navigation={navigation}/>
    </SafeAreaView>
  )
}

export default NewPostScreen
const style=StyleSheet.create({

})