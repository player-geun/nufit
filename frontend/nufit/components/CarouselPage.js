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

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '90%',
    marginTop: 10,
    marginBottom:30,
    paddingHorizontal:10,
    paddingVertical: 10
  },
  date: {
    
    paddingHorizontal:10,
    paddingVertical: 10,
    justifyContent:'center'
  },
  dateText: {
    fontWeight: '800',
    fontSize: 20
  },
  kcal: {
    paddingHorizontal:10,
    paddingVertical: 10,
    justifyContent:'center',
    alignItems:'flex-end',
  },
  kcalText: {
    fontSize: 15,
    marginBottom: 5
  },
  kcalNum: {
    fontSize:20,
    color: '#00D7BD',
    fontWeight: '700'
  },
  infoContainer: {
    marginTop: 80,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nutInfo: {
    flexDirection: 'row',
    marginTop:10,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 260,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nutText: {
    fontSize: 15,
  },
  nutNum: {
    fontSize: 15,
    textAlign:'right'
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
      borderWidth: 1,
      borderColor:'#00D7BD',
      width: '100%',
      padding: 15,
      borderRadius: 30,
      alignItems: 'center'
  },
  buttonText: {
      color: '#00D7BD',
      fontWeight: '500',
      fontSize: 16
  }
})

const dstyles = (item, style) => StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width : style.width,
    marginHorizontal : style.marginHorizontal,
    backgroundColor : '#FFFFFF'
  }
})