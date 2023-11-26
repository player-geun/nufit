import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import axios from 'axios';
import { getTokenFromLocal } from '../utils/tokenUtils';

const RegisterFoodNutrition = ({ route }) => {
  const { brand, food, unit, quantity } = route.params;
  const [calories, setCalories] = useState('');
  const [carbohydrates, setCarbohydrates] = useState('');
  const [sweet, setSweet] = useState('');

  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [fat2, setFat2] = useState('');
  const [fat3, setFat3] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [sodium, setSodium] = useState('');

  const navigation = useNavigation();
  

  const onSubmit = async () => {
    const url = 'http://43.202.91.101:8080/api/foods';
    const payload = {
      // memberId: 1, 
      name: food,
      brand: brand,
      amount: quantity,
      unit: unit,
      type: 'BRAND', 
      calorie: calories,
      nutrients: [
        { name: '탄수화물', amount: carbohydrates },
        { name: '당', amount: sweet },
        { name: '단백질', amount: protein },
        { name: '지방', amount: fat },
        { name: '트랜스지방', amount: fat2 },
        { name: '포화지방', amount: fat3 },
        { name: '콜레스테롤', amount: cholesterol },
        { name: '나트륨', amount: sodium },
       
      ],
    };
  
    try {
      const token = await getTokenFromLocal();
      console.log(token.accessToken)
      const response = await axios.post(url, payload, {headers: {Authorization : `Bearer ${token.accessToken}`}});
      console.log('success')
      console.log(response.data);
      navigation.popToTop();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const isInputValid = calories && carbohydrates && protein && fat && fat2 && fat3 && cholesterol && sodium;

  return (
    // <KeyboardAvoidingView 
    //   behavior={Platform.OS ==='ios' ? 'padding' : 'height'}
    //   style={styles.container}
    // >
    <KeyboardAvoidingView  style={styles.container}>
    <Text style={styles.intro}>영양 정보를 입력해주세요</Text>
      <ScrollView style={styles.inner}>
        <View>
            <Text style={styles.label}>칼로리</Text>
            <TextInput
            style={styles.input}
            value={calories}
            onChangeText={setCalories}
            placeholder="0 kcal"
            keyboardType="numeric"
            />
        </View>
        <View>
            <Text style={styles.label}>탄수화물</Text>
            <TextInput
            style={styles.input}
            value={carbohydrates}
            onChangeText={setCarbohydrates}
            placeholder="0 g"
            keyboardType="numeric"
            />
        </View>
        <View>
            <Text style={styles.label}>당</Text>
            <TextInput
            style={styles.input}
            value={sweet}
            onChangeText={setSweet}
            placeholder="0 g"
            keyboardType="numeric"
            />
        </View>
        <View>
            <Text style={styles.label}>단백질</Text>
            <TextInput
            style={styles.input}
            value={protein}
            onChangeText={setProtein}
            placeholder="0 g"
            keyboardType="numeric"
            />
        </View>
        <View>
            <Text style={styles.label}>지방</Text>
            <TextInput
            style={styles.input}
            value={fat}
            onChangeText={setFat}
            placeholder="0 g"
            keyboardType="numeric"
            />
        </View>
        <View>
            <Text style={styles.label}>트랜스지방</Text>
            <TextInput
            style={styles.input}
            value={fat2}
            onChangeText={setFat2}
            placeholder="0 g"
            keyboardType="numeric"
            />
        </View>
        <View>
            <Text style={styles.label}>포화지방</Text>
            <TextInput
            style={styles.input}
            value={fat3}
            onChangeText={setFat3}
            placeholder="0 g"
            keyboardType="numeric"
            />
        </View>
        <View>
            <Text style={styles.label}>콜레스테롤</Text>
            <TextInput
            style={styles.input}
            value={cholesterol}
            onChangeText={setCholesterol}
            placeholder="0 mg"
            keyboardType="numeric"
            />
        </View>
        <View>
            <Text style={styles.label}>나트륨</Text>
            <TextInput
            style={styles.input}
            value={sodium}
            onChangeText={setSodium}
            placeholder="0 mg"
            keyboardType="numeric"
            />
        </View>
       
        </ScrollView>

        <TouchableOpacity
          style={[styles.button, !isInputValid && styles.buttonDisabled]}
          onPress={onSubmit}
          disabled={!isInputValid}>
          <Text style={[styles.text, !isInputValid && styles.textDisabled]}>다음</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView >
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
    width: '100%',
    marginTop: 130,
    paddingHorizontal: 20,
    marginBottom: 30,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold'
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
  inner: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 100
  }
});

export default RegisterFoodNutrition;