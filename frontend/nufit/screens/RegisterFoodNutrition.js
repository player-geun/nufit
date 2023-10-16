import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';

const RegisterFoodNutrition = ({ route }) => {
  const { brand, food, unit, quantity } = route.params;
  const [calories, setCalories] = useState('');
  const [carbohydrates, setCarbohydrates] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [sodium, setSodium] = useState('');
  const [potassium, setPotassium] = useState('');

  const navigation = useNavigation();
  const onSubmit = () => {
    navigation.replace('Search', {
      brand,
      food,
      unit,
      quantity,
      calories,
      carbohydrates,
      protein,
      fat,
      cholesterol,
      sodium,
      potassium,
    });
  };

  const isInputValid = calories && carbohydrates && protein && fat;

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS ==='ios' ? 'padding' : 'height'}
      style={styles.container}
    >
    <Text style={styles.intro}>영양 정보를 입력해주세요</Text>
      <ScrollView style={styles.inner}>
        <View>
            <Text style={styles.label}>칼로리*</Text>
            <TextInput
            style={styles.input}
            value={calories}
            onChangeText={setCalories}
            placeholder="0 kcal"
            keyboardType="numeric"
            />
        </View>
        <View>
            <Text style={styles.label}>탄수화물*</Text>
            <TextInput
            style={styles.input}
            value={carbohydrates}
            onChangeText={setCarbohydrates}
            placeholder="0 g"
            keyboardType="numeric"
            />
        </View>
        <View>
            <Text style={styles.label}>단백질*</Text>
            <TextInput
            style={styles.input}
            value={protein}
            onChangeText={setProtein}
            placeholder="0 g"
            keyboardType="numeric"
            />
        </View>
        <View>
            <Text style={styles.label}>지방*</Text>
            <TextInput
            style={styles.input}
            value={fat}
            onChangeText={setFat}
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
        <View>
            <Text style={styles.label}>칼륨</Text>
            <TextInput
            style={styles.input}
            value={potassium}
            onChangeText={setPotassium}
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
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default RegisterFoodNutrition;