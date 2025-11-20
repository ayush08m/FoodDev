import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors, titles, btn1, hr80 } from "../../globals/style";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Fontisto from "@expo/vector-icons/Fontisto";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../Firebase/FirebaseConfig";

// import { firebase } from '../../Firebase/FirebaseConfig';

const SignupScreen = ({ navigation }) => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [showcpassword, setShowcpassword] = useState(false);
  const [cpasswordfocus, setcPasswordfocus] = useState(false);
  const [fullnamefocus, setFullnamefocus] = useState(false);

  //taking fom data from user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpassword, setcpassword] = useState("");
  // console.log(email);

  const [customError, setCustomError] = useState("");
  const [succesmsg, setSuccessmsg] = useState("");

  const handleSignup = async () => {
    const FormData = {
      name: name,
      email: email,
      password: password,
      // cpassword: cpassword
    };
    if (password !== cpassword) {
      // alert("Password and Confirm Password do not match");
      setCustomError("Password and Confirm Password do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created:", userCredential.user);
      // setSuccessmsg("User account created successfully!");

      await addDoc(collection(db, "UserData"), {
        name,
        email,
        password,
      });
      setSuccessmsg("User account created successfully!");
    } catch (error) {
      console.log("Signup error:", error.message);
      setCustomError(error.message);
      if (error.code === "auth/email-already-in-use") {
        setCustomError(
          "The email address already exits."
        );
      } else if (error.code === "auth/invalid-email") {
        setCustomError("The email address is not valid.");
      } else {
        setCustomError(error.message);
      }
    }
  };
  return (
    <View style={styles.container}>
      {succesmsg == null ?
        <View style={styles.container}>
      <Text style={styles.head1}>Sign Up</Text>
      {customError !== '' && <Text style={styles.errormsg}>{customError}</Text>}
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={fullnamefocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          onFocus={() => {
            setEmailfocus(false);
            setPasswordfocus(false);
            setShowpassword(false);
            setFullnamefocus(true);
            setCustomError(''); 
          }}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputout}>
        <Fontisto
          name="email"
          size={24}
          color={emailfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="E-Mail"
          onFocus={() => {
            setEmailfocus(true);
            setPasswordfocus(false);
            setShowpassword(false);
            setFullnamefocus(false);
            setCustomError('');
          }}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputout}>
        <AntDesign
          name="lock"
          size={24}
          color={passwordfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onFocus={() => {
            setPasswordfocus(true);
            setEmailfocus(false);
            setFullnamefocus(false);
            setCustomError('');
          }}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={showpassword === false ? true : false}
        />
        <FontAwesome5
          name={showpassword == false ? "eye-slash" : "eye"}
          size={24}
          color="black"
          onPress={() => setShowpassword(!showpassword)}
        />
      </View>
      {/* email password end */}

      <View style={styles.inputout}>
        <AntDesign
          name="lock"
          size={24}
          color={cpasswordfocus === true ? colors.text1 : colors.text2}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onFocus={() => {
            setcPasswordfocus(true);
            setEmailfocus(false);
            setPasswordfocus(false);
            setFullnamefocus(false);
            setCustomError('');
          }}
          onChangeText={(text) => setcpassword(text)}
          secureTextEntry={showcpassword === false ? true : false}
        />
        <FontAwesome5
          name={showcpassword == false ? "eye-slash" : "eye"}
          size={24}
          color="black"
          onPress={() => setShowcpassword(!showcpassword)}
        />
      </View>

      <TouchableOpacity style={btn1} onPress={() => handleSignup()}>
        <Text
          style={{
            fontSize: titles.btntxt,
            color: colors.col1,
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 16, color: colors.text2, marginTop: 20 }}>
        Or
      </Text>
      <Text style={{ fontSize: 16, color: colors.text2, marginTop: 20 }}>
        Sign Up with
      </Text>
      <AntDesign name="google" size={24} color="red" style={styles.gicon} />
      <View style={hr80}></View>
      <Text style={{ fontSize: 16, color: colors.text2, marginTop: 20 }}>
        Already have an account?
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: colors.text1,
          marginTop: 5,
          fontWeight: "bold",
        }}
        onPress={() => navigation.navigate("Login")}
      >
        Sign In
      </Text>
    </View>
      
    :
      <View style={styles.container1}>
        <Text style={styles.succcesmessage}>{succesmsg}</Text>
          <TouchableOpacity style={btn1} onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            fontSize: titles.btntxt,
            color: colors.col1,
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>

        <TouchableOpacity style={btn1} onPress={() => setSuccessmsg(null)}>
        <Text
          style={{
            fontSize: titles.btntxt,
            color: colors.col1,
            fontWeight: "bold",
          }}
        >
          Go Back
        </Text>
      </TouchableOpacity>
      </View>
      
    }
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 10,
  },
  inputout: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    borderColor: "#ff7272ff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    alignSelf: "center",
    borderWidth: 1,
    elevation: 8,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  gicon: {
    marginTop: 10,
    backgroundColor: colors.col1,
    padding: 10,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  errormsg:{
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  succcesmessage:{
    color: 'green',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
});
