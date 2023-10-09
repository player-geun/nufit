import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel from '../components/Carousel';
import TopBarTemp from '../components/TopBarTemp';

const Home = () => {

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