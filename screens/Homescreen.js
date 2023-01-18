import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native';
import { SafeAreaView,SafeAreaProvider } from 'react-native-safe-area-context';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from "../components/home/Post"
import {POST} from "../data/postcontant"
import BottomContainer from '../components/home/BottomContainer';
// import {db} from "../firebase"

const Homescreen = ({navigation}) => {
  // const [post,setpost]=useState()
  // useEffect(()=>{
  //   db.collectionGroup('posts').onSnapshot(snapshot=>{
  //     console.log(snapshot.docs.map(doc=>doc.data()))
  //   })
  // },[])
  return (
   <SafeAreaProvider style={style.bar}>   
         <Header navigation={navigation}/>  
         <Stories/>
         <ScrollView showsVerticalScrollIndicator={false} >
          {
            POST.map((post,index)=>(
              <Post post={post} key={index}/>
            ))
          }
         </ScrollView> 
         <BottomContainer/>
   </SafeAreaProvider>
  )
} 

export default Homescreen

const style=StyleSheet.create({
    bar:{
        marginTop:StatusBar.currentHeight,
        backgroundColor:"black",
        flex:1
    }

})
