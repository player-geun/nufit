import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from '../components/Carousel';
import TopBar from '../components/TopBar';

const Home = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('ChooseSearch');
    }
    const screenWidth = Math.round(Dimensions.get('window').width);
    const PAGES = [
      {
        num:1,
        color:'red'
      },
      {
        num:2,
        color: 'blue'
      },
      {
        num:3,
        color: 'green'
      }
    ]
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TopBar/>
      </View>
      
      <Carousel gap={16} offset={36} pages={PAGES} pageWidth={screenWidth-(16+36)*2}/>
      <Button title="+" onPress={handlePress}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center'
    },
    topbar: {
      alignItems:'center',
      justifyContent: 'center',
      paddingBottom:70,
    }

})