import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { verifyTokens } from '../utils/tokenUtils';

const SplashScreen = ({navigation}) => {

  useEffect(()=>{
    verifyTokens(navigation);
  },[])

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})