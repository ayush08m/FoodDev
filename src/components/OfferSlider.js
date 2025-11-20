import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colors } from '../globals/style'

// const carauseldata = [
//   {
//     id: '1',
//     img: require('../../assets/OfferImage/images.jpg')
//   },
//   {
//     id: '2',
//     img: require('../../assets/OfferImage/images2.jpg')
//   },
//   {
//     id: '3',
//     img: require('../../assets/OfferImage/images3.jpg')
//   },
// ]

const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper autoplay={true} autoplayTimeout={3} showsPagination={true} dotColor={colors.text3} activeDotColor={colors.text1} >
          <View style={styles.slide}>
            <Image source={require('../../assets/OfferImage/images.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/OfferImage/images2.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/OfferImage/images3.jpg')} style={styles.image} />
          </View>
        </Swiper>
      </View>
    </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({
  offerSlider: {
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  slide: {
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  }
})