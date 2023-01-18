import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import {Divider} from "react-native-elements"
import {footerIcon} from "../../data/postfooterIcon"
const Post = ({post}) => {
  return (
    <View style={style.container}>
      <Divider width={1} orientation="vertical" color='red'/>
      <PostHeader post={post}/>
      <PostImage post={post}/>
      <View style={{marginHorizontal:15,marginTop:10}}>
        <PostFooter/>
        <Like post={post}/>
        <Caption post={post}/>
        <CommentSection post={post}/>
        <Comment post={post}/>
      </View>
    </View>
  )
}


const PostHeader=({post})=>(
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:5,
        alignItems:"center",
      }}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image source={{uri: post.profilepicture}} style={style.img}/>
            <Text style={{color:"white",marginLeft:5,fontWeight:"600"}}>{post.user}</Text>
        </View>
        {/* Three DOT view ... */}
        <Text style={{color:"white",fontWeight:"900"}}>...</Text>
      </View>
)

//POST IMAGE
const PostImage=({post})=>(
     <View style={{
      width:'100%',
      height:300
      }}>
      <Image source={{uri: post.imageurl}}
     style={{height:"100%",resizeMode:"cover"}}
     />
     </View>
)

// Footer
const PostFooter=()=>(
        <View style={{flexDirection:"row",}}>
           <View style={style.leftfootericons}>
              <Icon imgstyle={style.footericon} imgurl={footerIcon[0].imageurl}/>
              <Icon imgstyle={style.footericon} imgurl={footerIcon[1].imageurl}/>
              <Icon imgstyle={style.footericon} imgurl={footerIcon[2].imageurl}/>
           </View>
           <View style={{alignItems:"flex-end",flex:1}}>
           <Icon imgstyle={style.footericon} imgurl={footerIcon[3].imageurl}/>
           </View>
        </View>
)

const Icon=({imgstyle,imgurl})=>(
     <TouchableOpacity>
      <Image style={imgstyle} source={{uri:imgurl}}/>
     </TouchableOpacity>
)

// Work on like component
const Like=({post})=>(
  <Text style={{color:"white", marginTop:4}}>{post.likes+" likes"}</Text>
)

// Caption start
const Caption=({post})=>(
  <View style={{marginTop:8}}>
    <Text style={{color:"white"}}>
       <Text style={{fontWeight:"600"}}>{post.user}</Text>
       <Text> {post.caption}</Text>
    </Text>
  </View>
)

//Comment Section
const CommentSection=({post})=>(
     <View>
      {!!post.comments.length &&(   // This havk !! because only true or false
        <Text style={{color:"gray"}}>
        View {post.comments.length>1 ? "all":""} {post.comments.length}{" "}
        {post.comments.length>1 ? "comments":"comment"}
       </Text>
      )}
     </View>
)

const Comment=({post})=>(
  <>
  {post.comments.map((item,index)=>(
    <View key={index} style={{flexDirection:"row",marginTop:5}}>
      <Text style={{color:"white"}}>
        <Text style={{fontWeight:"800"}}>{item.user}{": "}</Text>
        {item.comment}
      </Text>
    </View>
  ))}
  </>
)

export default Post
const style=StyleSheet.create({
    container:{
      marginBottom:30 
    },
    img:{
      width:35,
      height:35,
      resizeMode:"contain",
      marginLeft:6,
      borderRadius:50,
      borderWidth:3,
      borderColor:"#ff8501"
    },
    footericon:{
      width:25,
      height:25,
      
    },
    leftfootericons:{
      flexDirection:"row",
      width:'32%',
      justifyContent:"space-between"
    }
})