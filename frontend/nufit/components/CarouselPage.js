import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CarouselPage = ({ item, style }) => {
  return (
    <View style={dstyles( item, style ).container}>
      <Text>{item.num}</Text>
    </View>
  )
}

export default CarouselPage

const dstyles = (item, style) => StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width : style.width,
    marginHorizontal : style.marginHorizontal,
    backgroundColor : 'skyblue'
  }
})