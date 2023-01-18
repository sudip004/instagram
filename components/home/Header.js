import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
// import { firebase } from "../../firebase";

// const handalsingout=async ()=>{
//  try {
//   await firebase.auth().singOut()
//   console.log('Singed out')
//  } catch (error) {
//     console.log(error.message);
//  }
// }

//onPress={handalsingout}

const Header = ({navigation}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity >
        <Image style={style.logo} source={require("../../assets/logo.png")} />
      </TouchableOpacity>
      <View style={style.iconcontainer}>
        <TouchableOpacity
        onPress={()=>navigation.push('newPostScreen')}
        >
          <Image source={require("../../assets/post.png")} style={style.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/li.png")} style={style.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={style.unred}>
                <Text style={style.unredtext}>11</Text>
            </View>
          <Image source={require("../../assets/me.png")} style={style.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: "contain",
  },
  iconcontainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
    backgroundColor: "white",
    borderRadius: 10,
  },
  unred:{
     backgroundColor:"#FF3250",
     position:"absolute",
     left:20,
     bottom:40,
     width:25,
     height:18,
     alignItems:"center",
     justifyContent:"center",
     borderRadius:25,
     zIndex:100,
  },
  unredtext:{
    color:"white",
    fontWeight:"600"
  }
});
