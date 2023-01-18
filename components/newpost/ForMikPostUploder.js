import { View, Text, StyleSheet, Image, TextInput,Button } from "react-native";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Divider} from "react-native-elements"
import validUrl from "valid-url"
// import { firebase,db } from "../../firebase";

const uploadSchema = yup.object().shape({ 
  imgurl: yup.string().url().required("A URL is Required"),
  caption: yup.string().max(2200, "Caption has reched the Character"),
});

const url =
  "https://www.landfx.com/images/docs/kb/installation-errors/4019/blank%20welcome.PNG";

const ForMikPostUploder = ({navigation}) => {
  const [Thambnail, setThambnail] = useState('');
  const [currentloggedinuser,setcurrentloggedinuser]=useState('')

  // const getusername=()=>{
  //   const user=firebase.auth().currentloggedinuser
  //   const unsubscribe=db.collection('users').where('owner_uid','==',user.uid).limit(1).onSnapshot(
  //     snapshot => snapshot.docs.map(doc=>{
  //       setcurrentloggedinuser({
  //         username:doc.data().username,
  //         profilepicture:doc.data().profilepicture
  //       })
  //     })
  //   )
  //   return unsubscribe
  // }

  // useEffect(()=>{
  //   getusername()
  // },[])

  // const uploadPostToFirebase=(imageurl,caption) => {
  //   const unsubscribe=db.collection('users').doc(firebase.auth().currentuser.email)
  //   .collection('posts')
  //   .add({
  //      imageurl: imageurl,
  //      user: currentloggedinuser.username,
  //      profilepicture:currentloggedinuser.profilepicture,
  //      owner_uid:firebase.auth().currentuser.uid,
  //      caption: caption,
  //      createAt: firebase.firestore.FieldValue.serverTimestamp(),
  //      likes:0,
  //      likes_by_users:[],
  //      comments:[]
  //   })
  //   .then(()=>navigation.goBack())

  //   return unsubscribe
  // }

  return (
    <Formik
      initialValues={{ caption: "", imgurl: "" }}
      onSubmit={(value) =>{
        // uploadPostToFirebase(value.imgurl,value.caption)
        console.log(value);
      }}
      validationSchema={uploadSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
        <>
        <View>
          <View style={{margin:20,flexDirection:"row",justifyContent:"space-around"}}>
            <View >
              <Image
                source={{ uri: validUrl.isUri(Thambnail) ? Thambnail : url }}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <View style={{flex:1,marginLeft:10}}>
            <TextInput
              style={{ color: "white", fontSize: 18 ,paddingBottom:20}}
              placeholder="write a caption...."
              placeholderTextColor={"gray"}
              multiline={true}
              onChangeText={handleChange("caption")}
              onBlur={handleBlur("caption")}
              value={values.caption}
            />
            </View>
          </View>
          <Divider width={1} orientation="vertical"/>
          <TextInput
            style={{ color: "white", fontSize: 18 ,marginLeft:10}}
            onChange={(e)=>setThambnail(e.nativeEvent.text)}
            placeholder="Enter img URL"
            placeholderTextColor={"gray"}
            onChangeText={handleChange("imgurl")}
            onBlur={handleBlur("imgurl")}
            value={values.imgurl}
          />
        {errors.imgurl && (
            <Text style={{fontSize:10,color:'red',marginLeft:20}}>
                {errors.imgurl}
            </Text>
          )}

          <View style={{marginTop:20}}>
          <Button onPress={handleSubmit} title='share' disabled={!isValid} />
          </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default ForMikPostUploder;
const style = StyleSheet.create({});
