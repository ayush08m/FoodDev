import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../globals/style';

const HomeHeadNav = () => {
  return (
      <View style={styles.container}>
          <EvilIcons name="navicon" size={40} color="black" style={styles.myicon} />
          <View style={styles.containerin}>
              <Text style={{fontSize:35}}>FoodDev</Text>
              <MaterialIcons name="fastfood" size={35} color="black" style={styles.myicon}/>
              
          </View>
          <FontAwesome name="user" size={35} color="black" style={styles.myicon} />  
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: colors.col1,
        borderRadius: 12,
        // borderColor:'#fe8282ff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        alignSelf: 'center',
        // borderWidth: 1,
        elevation: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    containerin: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})