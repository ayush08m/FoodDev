import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react';
import logo from '../../../assets/logo.png';
import { colors,hr80 } from '../../globals/style';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../Firebase/FirebaseConfig";

const WelcomeScreen = ({navigation}) => {

  const [userlogged, setUserlogged] = React.useState(null);

  useEffect(() => {
    const checklogin = ()=>{
      FirebaseError.auth().onAuthStateChanged((user)=>{
        if(user){
          setUserlogged(user);
        }else{
          setUserlogged(null);
        }
      })
    }
  })


  return (
    <View style={Styles.container}>
      <View style={{width:'100%', height:'100%', alignItems:'center', justifyContent:'center', marginBottom:100}}>
      <Text style={Styles.title}>Welcome to FoodDev</Text>
      <View style={Styles.logoout}>
        <Image source={logo} style={Styles.logo}/>
        <View style={hr80}/>
        <Text style={Styles.text}>Craving solved in just a tap - welcome to FoodDev!</Text>
        <View style={hr80}/>
        <View style={Styles.btnout}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                <Text style={Styles.btn}>SignUp</Text>
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={Styles.btn}>Login</Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
    </View>
  )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ff4242',
        width:'100%',
        alignItems:'center',
    justifyContent: 'center',
        
  },
    title:{
      fontSize:50,
      color:colors.col1,
      textAlign:'center',
      marginVertical:10,
      fontWeight:'200%',
    },
    logoout:{
      width:'80%',
      height:'30%',
      // backgroundColor:'#fff',
      alignItems:'center',
    },
    logo:{
      width:'100%',
      height:'100%',
    },
    text:{
      fontSize:18,
      width:'80%',
      color:colors.col1,
      textAlign:'center',
    },
    btnout:{
      flexDirection:'row'
    },
    btn:{
      fontSize:20,
      color:colors.text1,
      textAlign:'center',
      marginVertical:30,
      marginHorizontal:10,
      fontWeight:'700',
      backgroundColor:'#fff',
      borderRadius:10,
      padding:10,
      paddingHorizontal:20,
    }
})

export default WelcomeScreen

