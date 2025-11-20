import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '../globals/style';

const Categories = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.head}>Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Burgers</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Burgers</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Burgers</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Burgers</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger" size={24} color="black" style={styles.icon} />
          <Text style={styles.text}>Burgers</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.col1,
    borderRadius: 12,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    padding: 10,
    marginBottom: 20,
    borderWidth: 0,
  },
  head: {
    fontSize: 25,
    fontWeight: '300',
    color: colors.text1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth: 1,
  },
  box: {
    backgroundColor: colors.col1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    padding: 10,
    margin: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  icon: {
    marginRight: 5,
    color: colors.text3,
  },
})