import React, { useState } from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';


const RegisterFoodQuantity = ({navigation, route}) => {
  const {brand, food} = route.params;
  const [unit, setUnit] = useState('g');
  const [quantity, setQuantity] = useState('');

  const onSubmit = () => {
    navigation.navigate('RegisterFoodNutrition', {brand, food, unit, quantity});
  };

  const isInputValid = quantity;

  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
        <View style={styles.container}>
            <Text style={styles.intro}>기본 단위를 입력해주세요</Text>
        <View style={styles.register}>
            <Text style={styles.label}>단위</Text>
            <View style={styles.unitContainer}>
                <TouchableOpacity
                style={unit === 'g' ? styles.unitButtonSelected : styles.unitButton}
                onPress={() => setUnit('g')}
                >
                <Text style={unit === 'g' ? styles.unitTextSelected : styles.unitText}>그램(g)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={unit === 'ml' ? styles.unitButtonSelected : styles.unitButton}
                onPress={() =>setUnit('ml')}
                >
                <Text style={unit === 'g' ? styles.unitText : styles.unitTextSelected}>밀리미터(ml)</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>내용량</Text>
            <TextInput
                style={styles.input}
                value={quantity}
                onChangeText={(text) => setQuantity(text)}
                keyboardType="numeric"
                placeholder={`0 ${unit === 'g' ? 'g' : 'ml'} `}
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
export default RegisterFoodQuantity;