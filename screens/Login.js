import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginFrom from "../components/loginscreen/LoginFrom";

const logourl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
        <View style={style.logocontainer}>
            <Image source={{uri: logourl,width:100,height:100}}/>
        </View>
      <View style={{marginTop:10}}>
        <LoginFrom navigation={navigation}/>
        </View>
    </SafeAreaView>
  );
};

export default Login;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logocontainer: {
    alignItems: "center",
    marginTop: "40%",
    borderRadius:20
  },
});
