import { View, Text, StyleSheet,Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SingUpScreen from "../components/singUp/SingUpScreen";

const logourl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";

const SingUp = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:"white",flex:1}}>
        <View style={style.logocontainer}>
            <Image source={{uri: logourl,width:100,height:100}}/>
        </View>
      <View>
        <SingUpScreen navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};

export default SingUp;

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
