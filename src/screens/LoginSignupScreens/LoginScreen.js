import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { colors, titles, btn1 , hr80} from '../../globals/style'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../Firebase/FirebaseConfig";
import HomeScreen from '../HomeScreen';
const LoginScreen = ({navigation}) => {
  const [ emailfocus, setEmailfocus ] = useState(false);
  const [ passwordfocus, setPasswordfocus ] = useState(false);
  const [ showpassword,setShowpassword] = useState(false);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ customError, setCustomError ] = useState('');

 const HandleLogin = async () => {
    if (!email || !password) {
      setCustomError('Please fill all fields');
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      console.log("✅ Logged in:", userCredential.user.email);
      setCustomError('');
      navigation.navigate('Home');
    } catch (error) {
      console.log("❌ Login error:", error.code, error.message);

      if (error.code === "auth/user-not-found") {
        setCustomError("User not found. Please sign up first.");
      } else if (error.code === "auth/wrong-password") {
        setCustomError("Incorrect password. Try again.");
      } else if (error.code === "auth/network-request-failed") {
        setCustomError("Network error. Please check your internet connection.");
      } else {
        setCustomError("Login failed: " + error.message);
      }
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.head1}>Sign In</Text>
        {customError !== '' && <Text style={styles.errormsg}>{customError}</Text>}
      
      <View style={styles.inputout}>
        <Fontisto name="email" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='E-Mail'
          onFocus={() => {
            setEmailfocus(true);
            setPasswordfocus(false);
            setShowpassword(false);
            setCustomError
         }}
         onChangeText={(text)=>{
            setEmail(text)
         }}
         
         />
      </View>
      <View style={styles.inputout}>
        <AntDesign name="lock" size={24} color={passwordfocus === true ? colors.text1 : colors.text2} />
        <TextInput style={styles.input} placeholder='Password'
          onFocus={() => {
            setPasswordfocus(true);
            setEmailfocus(false);
            setCustomError('');
          }}
          onChangeText={(text)=>{
            setPassword(text)
          }}
        secureTextEntry={showpassword === false ? true : false}
        />
        <FontAwesome5 name={showpassword == false ? "eye-slash" : "eye"} size={24} color="black"
          onPress={() => setShowpassword(!showpassword)} />
      </View>
      <TouchableOpacity style={btn1} onPress={()=>HandleLogin()}>
        <Text style={{fontSize: titles.btntxt, color: colors.col1 ,fontWeight:'bold'}}>Sign In</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 16, color: colors.text2, marginTop: 20 }}>Forgot Password?</Text>
      <Text style={{ fontSize: 16, color: colors.text2, marginTop: 20 }}>Or</Text>
      <Text style={{ fontSize: 16, color: colors.text2, marginTop: 20 }}>Sign In with</Text>
      <AntDesign name="google" size={24} color="red" style={styles.gicon} />
      <View style={hr80}></View>
      <Text style={{ fontSize: 16, color: colors.text2, marginTop: 20 }}>Don't have an account?</Text>
      <Text style={{ fontSize: 16, color: colors.text1, marginTop: 5, fontWeight: 'bold'  }} onPress={()=>navigation.navigate('SignUp')}>Sign Up</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      width:'100%', 
      alignItems:'center',
      justifyContent: 'center',
  },
  head1: {
    fontSize: titles.title1,
    color: colors.text1,
    textAlign: 'center',
    marginVertical:10,
  },
  inputout: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    borderColor:'#ff7272ff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    alignSelf: 'center',
    borderWidth: 1,
    elevation: 8,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width:'80%',
  },
  gicon:{
    marginTop: 10,
    backgroundColor: colors.col1,
    padding:10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  } 
})