import React, { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

const RegisterFoodName = ({navigation}) => {
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  intro:{
    flex:0.1,
    width: '100%',
    marginTop: 130,
    paddingHorizontal: 20,
    marginBottom: 30,
    textAlign: 'left',
    fontSize: 25,
    fontWeight: 'bold'
  },
  register: {
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#000',
    borderRadius: 30,
    padding: 14,
    width: '90%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    backgroundColor: '#ECEBEB',
    fontSize: 20
  },
  buttonDisabled: {
    borderWidth: 1,
    backgroundColor: '#ECEBEB',
    borderRadius: 30,
    padding: 14,
    width: '90%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    borderColor: '#ECEBEB'
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  textDisabled: {
    color: '#9C9C9C',
    fontSize: 16,
  },
});

export default RegisterFoodName;
