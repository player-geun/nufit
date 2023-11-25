import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, View } from 'react-native';


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
      <KeyboardAvoidingView style={styles.container}>
            
        <ScrollView style={styles.register}>
        <Text style={styles.intro}>기본 단위를 입력해주세요</Text>
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
            <TouchableOpacity
            style={[styles.button, !isInputValid && styles.buttonDisabled]}
            onPress={onSubmit}
            disabled={!isInputValid}>
            <Text style={[styles.text, !isInputValid && styles.textDisabled]}>다음</Text>
        </TouchableOpacity>
        </ScrollView >
        
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  intro:{
    flex:0.1,
    width: '100%',
    marginTop: 130,
    marginBottom: 70,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold'
  },
  register: {
    width: '100%',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'Pretendard-Bold',
  },
  input: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 15,
    backgroundColor: '#fafafa',
    height: 50,
    borderWidth: 1,
    borderColor: '#ecebeb',
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#000',
    borderRadius: 30,
    padding: 14,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
    marginTop: 300
  },
  buttonDisabled: {
    borderWidth: 1,
    backgroundColor: '#ECEBEB',
    borderRadius: 30,
    padding: 14,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: "#ECEBEB",
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
  unitContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  unitButtonSelected: {
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    marginRight: 25,
    backgroundColor: 'black',
    fontSize: 20,
    width: '45%'
  },
  unitButton: {
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
    fontSize: 20,
    marginRight: 25,
    width: '45%',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ecebeb',
  },
  unitTextSelected: {
    color: 'white',
    fontSize: 16,
  },
  unitText: {
    color: '#9C9C9C',
    fontSize: 16,
  }
});

export default RegisterFoodQuantity;