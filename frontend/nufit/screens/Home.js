import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel from '../components/Carousel';
import TopBarTemp from '../components/TopBarTemp';

const Home = () => {

    const screenWidth = Math.round(Dimensions.get('window').width);
    const PAGES = [
      {
        num:1,
        time:'BREAKFAST',
        kcal:'433',
        carbohydrate:'53.2',
        protein:'23.1',
        fat:'11.4'
      },
      {
        num:2,
        time:'LUNCH',
        kcal:'1422',
        carbohydrate:'233.2',
        protein:'43.1',
        fat:'7.4'
      },
      {
        num:3,
        time:'DINNER',
        kcal:'974',
        carbohydrate:'54.1',
        protein:'20.6',
        fat:'25.4'
      }
    ]
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TopBarTemp/>
      </View>
      
      <Carousel gap={16} offset={36} pages={PAGES} pageWidth={screenWidth-(16+36)*2}/>
      {/* <Button title="+" onPress={handlePress}/> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor:'#FAFAFA'
    },
    topbar: {
      alignItems:'center',
      justifyContent: 'center',
      paddingBottom:70,
    }

})