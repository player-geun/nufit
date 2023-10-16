import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

const FoodRegInputFood = ({navigation}) => {
  const [brand, setBrand] = useState('');
  const [food, setFood] = useState('');

  const onSubmit = () => {
    navigation.navigate('RegisterFoodQuantity', {brand, food});
  };

  const isInputValid = brand && food;

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
        <View style={styles.container}>
            <Text style={styles.intro}>음식의 이름을 알려주세요</Text>
            <View style={styles.register}>
                <Text style={styles.label}>브랜드 이름</Text>
                <TextInput
                    style={styles.input}
                    value={brand}
                    onChangeText={(text) => setBrand(text)}
                    placeholder="브랜드 이름"
                />
                <Text style={styles.label}>음식 이름</Text>
                <TextInput
                    style={styles.input}
                    value={food}
                    onChangeText={(text) => setFood(text)}
                    placeholder="음식 이름"
                />
            </View>
            <TouchableOpacity
                style={[styles.button, !isInputValid && styles.buttonDisabled]}
                onPress={onSubmit}
                disabled={!isInputValid}>
                <Text style={[styles.text, !isInputValid && styles.textDisabled]}>다음</Text>
            </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FoodRegInputFood;