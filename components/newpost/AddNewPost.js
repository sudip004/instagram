import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import ForMikPostUploder from './ForMikPostUploder'

const AddNewPost = ({navigation}) =>(
    <View>
        <Header navigation={navigation}/>
        {/* FormikPostUploder Start */}
        <ForMikPostUploder navigation={navigation}/>
    </View>
)

const Header=({navigation})=>(
    <View style={style.headercontainer}>
          <TouchableOpacity
          onPress={()=>navigation.goBack()}
          >
              <Ionicons name='md-arrow-back' size={30} color={"white"} style={{marginLeft:20}}/>
          </TouchableOpacity>
          <Text style={style.headertxt}>NEW POST</Text>
          <Text></Text>
    </View>
)

export default AddNewPost
const style=StyleSheet.create({
    container:{
        marginHorizontal:10
    },
    headercontainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    headertxt:{
       color:"#fff",
       fontWeight:"700",
       fontSize:20,
       marginRight:45
    }
})