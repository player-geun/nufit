import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import kakaotalkLogo from '../assets/kakaotalk_logo.png';

const LoginButton = ({ onSubmit }) => {
  const fade = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
        fade,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      }
    ).start();
  }, [fade])

  return (
    <Animated.View 
      style={{
        opacity: fade,
      }}
    >
      <TouchableOpacity style={styles.button}onPress={onSubmit}>
        <Image source={kakaotalkLogo}/>
        <Text style={styles.buttonText}>카카오로 계속하기</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({});

export default LoginButton;
