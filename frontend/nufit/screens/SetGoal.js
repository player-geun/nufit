import React, { useState } from 'react'
import { Button, TextInput, StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';



const SetGoal = ({ navigation }) => {
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    

    function handlePress() {
    navigation.navigate('CaloriesResult', { gen:gender, a:age, he:height, we:weight });
  
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>성별:</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                >
                    <Picker.Item label="남성" value="male" />
                    <Picker.Item label="여성" value="female" />
                </Picker>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>나이:</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={(text) => setAge(text)}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>키(cm):</Text>
                <TextInput
                    style={styles.input}
                    value={height}
                    onChangeText={(text) => setHeight(text)}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>몸무게(kg):</Text>
                <TextInput
                    style={styles.input}
                    value={weight}
                    onChangeText={(text) => setWeight(text)}
                    keyboardType="numeric"
                />
            </View>
            <Button title="다음" onPress={handlePress} />
            
            
        </View>
    )
};




const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 30,
    },
    label: {
      fontWeight: 'bold',
      marginRight: 10,
    },
    picker: {
      flex: 1,
    },
    input: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
});

export default SetGoal;
  
