import { View, Text, Image, ImageBackground, Dimensions, StyleSheet,TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import bg from '../assets/bg.png'
import logo from '../assets/logo.png'

const Shop = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  
    const imageSize = {
      width: windowWidth,
      height: windowHeight / 2.5,
    };
  
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ImageBackground
          source={bg} 
          style={imageSize}
          resizeMode="cover" 
        >
          <Text style={styles.title}>NUFIT STORE</Text>
          <Text style={styles.sub}>뉴핏 스토어에서는 {'\n'}새롭고 맛있는 경험을 제공합니다</Text>
        </ImageBackground>
        <Text style={styles.brand}>BRAND</Text>
        <View style={styles.box}>
            <TouchableOpacity style={styles.Btn}  onPress={() => Linking.openURL('https://www.11st.co.kr/')} >
                <Text style={{color: '#000'}}>브랜드1</Text>
                <Image source={logo}/>
            </TouchableOpacity> 
        </View>

      </View>
    );
  };
  
  export default Shop;

  const styles = StyleSheet.create({
    title: {
        position: 'absolute',
        top: 120,
        left: 25,
        color: '#fff',
        fontFamily: 'Pretendard',
        fontSize: 24,
        fontWeight: 700
    },
    sub: {
        position: 'absolute',
        top: 160,
        left: 25,
        color: '#fff',
        fontFamily: 'Pretendard',
        fontSize: 14,
        fontWeight: 400
    },
    brand: {
        color: '#000',
        fontFamily: 'Pretendard',
        fontSize: 24,
        fontWeight: 700,
        padding: 30
    },
    box: {
        paddingHorizontal: 30
    },
    Btn: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F6F6F6',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        width: '100%',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 22,
        flexDirection: 'row'
    }
  })