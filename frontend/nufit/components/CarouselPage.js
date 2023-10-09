import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CarouselPage = ({ item, style }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ChooseSearch');
  }
  return (
    <View style={dstyles( item, style ).container}>
      <View style={styles.topContainer}>
        <View style={styles.date}>
          <Text style={styles.dateText}>{item.time}</Text>
        </View>
        <View style={styles.kcal}>
          <Text style={styles.kcalText}>총 칼로리</Text>
          <Text style={styles.kcalNum}>{item.kcal}kcal</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.nutInfo}>
          <Text style={styles.nutText}>순탄수화물</Text>
          <Text style={styles.nutNum}>{item.carbohydrate}g</Text>
        </View>
        <View style={styles.nutInfo}>
          <Text style={styles.nutText}>단백질</Text>
          <Text style={styles.nutNum}>{item.protein}g</Text>
        </View>
        <View style={styles.nutInfo}>
          <Text style={styles.nutText}>지방</Text>
          <Text style={styles.nutNum}>{item.fat}g</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

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