import { View, Text, StatusBar, TextInput, StyleSheet, ScrollView, FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import HomeHeadNav from '../components/HomeHeadNav'
import Categories from '../components/Categories'
import OfferSlider from '../components/OfferSlider'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../globals/style'
// import firestore from '@react-native-firebase/firestore';
import {firebase} from '../Firebase/FirebaseConfig';
import { db } from '../Firebase/FirebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import Cardslider from '../components/Cardslider'
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context'


const HomeScreen = () => {
    const [foodData, setFoodData] = useState([]);
    // const foodRef = firebase.firestore().collection('FoodData');
    const [VegData, setVegData] = useState([]);
    const [NonVegData, setNonVegData] = useState([]);

    const [search, setSearch] = useState('');
    // console.log(search);


   useEffect(() => {
  const foodRef = collection(db, 'FoodData');
  const unsubscribe = onSnapshot(foodRef, (snapshot) => {
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setFoodData(data);
  });
  return unsubscribe;
}, []);

    useEffect(() => {
        setVegData(foodData.filter(item => item.foodCategory === 'Veg'));
        setNonVegData(foodData.filter(item => item.foodCategory === 'Non-Veg'));
    }, [foodData]);
    // console.log(VegData);
    // console.log(foodData);
  return (
      <ScrollView style={styles.container}>
          <StatusBar/>
          <HomeHeadNav />
          <View style={styles.searchbox}>
              <FontAwesome name="search" size={24} color="black"
              style={styles.searchicon} />
                <TextInput style={styles.input} placeholder='Search for food, restaurants...'
                onChangeText={(text) =>{setSearch(text)}} />   
          </View>
          {search != '' && <View style={styles.seacrhresultsouter}>
                    <FlatList style={styles.searchresultsinner} data={foodData} renderItem={
                        ({ item }) => {
                            if (item.foodName.toLowerCase().includes(search.toLowerCase())) {
                                return (
                                    <View style={styles.searchresult}>
                                        <AntDesign name="arrow-right" size={24} color="black" />
                                        <Text style={styles.searchresulttext}>{item.foodName}</Text>
                                    </View>
                                )
                            }
                        }
                    } />
                </View>}
          <Categories />
          <OfferSlider />
          {/* <Text>HomeScreen</Text> */}
          <Cardslider title={"Today's Special"} data={foodData} />
          <Cardslider title={"Non-Veg Lover"} data={NonVegData} />
          <Cardslider title={"Veg Lover"} data={VegData} />
      </ScrollView>
      
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.col1,
        // alignItems: 'center',
        width: '100%',
    },
    searchbox: {
         flexDirection: 'row',
        width: '90%',
        backgroundColor: colors.col1,
        borderRadius: 30,
        alignItems: 'center',
        padding: 10,
        margin: 20,
        elevation: 10,
    },
    input: {
        marginLeft: 10,
        fontSize: 18,
        width: '90%',
        color: 'black',
    },
    searchicon: {
        color: colors.text1,
    },
    searchresultouter:{
        width:'100%',
        marginHorizontal:30,
        // height: '100%',
        backgroundColor:colors.col1,
    },
    searchresultsinner:{
        width:'100%',
    },
    searchresult:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        padding:5,
    },
    searchresulttext:{
        fontSize:18,
        marginLeft:10,
        color:colors.text1,
    }
})