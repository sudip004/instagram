import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import validator from "email-validator";
// import {firebase} from "../../firebase";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email will required"),
  password: yup.string().required().min(6,"password required")
});

// const onlogin=async(email,password) => {
//   try {
//     await firebase.auth().signInWithEmailAndPassword(email,password)
//     console.log("firebase login successfull")
//   } catch (error) {
//     Alert.alert(error)
//   }
// }

const LoginFrom = ({navigation}) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      validateOnMount={true}
      onSubmit={(values) => {
        // onlogin(values.email,values.password)
        console.log(values);
      }}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        values,
        isValid,
      }) => (
        <>
          <View>
            <TextInput
              placeholderTextColor={"#444"}
              placeholder="Phone Number, Username or email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={false}
              autoCapitalize="none"
              style={style.inputbox}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor={"#444"}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={true}
              autoCorrect={false}
              textContentType="Password"
              autoFocus={false}
              style={[style.inputbox,{
                borderBottomColor:values.password.length<6   ? "red" : "gray"
              }]}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
          </View>

          <Button title="log in" onPress={handleSubmit} color={!isValid ? "red":"#6BB0F5"} disabled={!isValid}/>

          <View style={{ alignItems: "flex-end", marginBottom: 20 }}>
            <TouchableOpacity>
              <Text style={{ color: "#6BB0F5", marginRight: 10 }}>
                Forget Password?
              </Text>
            </TouchableOpacity>

          </View>
          

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10%",
            }}
          >
            <Text>You Don't have any account please!</Text>
            <TouchableOpacity onPress={()=>navigation.push('SingUp')}>
              <Text style={{ color: "#6BB0F5" }}>{" SING UP"}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Formik>
  );
};

export default LoginFrom;
const style = StyleSheet.create({
  containerL: {},
  inputbox: {
    padding: 12,
    borderColor: "gray",
    marginBottom: 10,
    borderBottomWidth: 1,
    fontSize: 15,
  },
});
