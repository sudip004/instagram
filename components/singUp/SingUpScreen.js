import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import validator from "email-validator";
// import { firebase, db } from "../../firebase";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email will required"),
  username: yup.string().required("Unick username will be required"),
  password: yup.string().required().min(6, "password required"),
});

// const getRandomProfilePicture = async () => {
//   const response = await fetch("https://randomuser.me/api");
//   const data = response.json();
//   return data.results[0].picture.large;
// };

// const onSingup = async (email, password) => {
//   try {
//     const authUser = await firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password, username);
//     console.log("Register will be successfully");

//     db.collection("users")
//       .doc(authUser.user.email)
//       .set({
//         user_uid: authUser.user.uid,
//         username: username,
//         email: authUser.user.email,
//         profilepicture: await getRandomProfilePicture(),
//       });
//   } catch (error) {
//     Alert.alert(error.message);
//   }
// };

const SingUpScreen = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ email: "", username: "", password: "" }}
      validationSchema={loginSchema}
      validateOnMount={true}
      onSubmit={(value) => {
        // onSingup(value.email, value.password, value.username);
        console.log(value);
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
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
          </View>
          <View>
            <TextInput
              placeholderTextColor={"#444"}
              placeholder="enter username"
              textContentType="Username"
              autoFocus={false}
              autoCapitalize="none"
              style={style.inputbox}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
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
              style={[
                style.inputbox,
                {
                  borderBottomColor:
                    values.password.length < 6 ? "red" : "gray",
                },
              ]}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
          </View>

          <Button
            title="singup"
            onPress={handleSubmit}
            color={!isValid ? "red" : "#6BB0F5"}
            disabled={!isValid}
          />

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
            <Text>already have an account please</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: "#6BB0F5" }}>{" LOGIN"}</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Formik>
  );
};

export default SingUpScreen;

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
