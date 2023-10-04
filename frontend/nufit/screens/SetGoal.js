import React, { useState } from 'react'
import { Button, TextInput, StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, ScrollView,Image} from 'react-native'
import inactive from './../assets/character_inactive.png'
import inactive2 from './../assets/character_inactive2.png'
import inactive3 from './../assets/character_inactive3.png'
import activeImg from './../assets/active.png'
import activeImg2 from './../assets/active2.png'
import activeImg3 from './../assets/active3.png'



const SetGoal = ({ navigation }) => {
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [active, setActive] = useState('m');
    
    function goNext() {
    navigation.navigate('CaloriesResult', { gen:gender, a:age, he:height, we:weight });
  
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>나의 목표 설정, {'\n'}1분이면 끝나요</Text>
            <ScrollView>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>성별</Text>
                <View style={styles.genderPick}>
                    <TouchableOpacity 
                        style={[styles.genderButton, gender === 'male' && styles.selectedGender]}
                        onPress={() => setGender('male')}
                    >
                        <Text style={gender === 'male' && styles.selectedGender}>남성</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.genderButton, gender === 'female' && styles.selectedGender]}
                        onPress={() => setGender('female')}
                    >
                        <Text style={gender === 'female' && styles.selectedGender}>여성</Text>
                    </TouchableOpacity>
                </View>
                
            </View>   

            <View style={styles.rowContainer}>
                <View style={styles.halfContainer}>
                    <Text style={styles.label}>나이</Text>
                    <TextInput
                        style={styles.input}
                        value={age}
                        onChangeText={(text) => setAge(text)}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.halfContainer}>
                    <Text style={styles.label}>키</Text>
                    <TextInput
                        style={styles.input}
                        value={height}
                        onChangeText={(text) => setHeight(text)}
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.halfContainer}>
                    <Text style={styles.label}>시작 체중</Text>
                    <TextInput
                        style={styles.input}
                       
                    />
                </View>

                <View style={styles.halfContainer}>
                    <Text style={styles.label}>목표 체중</Text>
                    <TextInput
                        style={styles.input}
                        value={weight}
                        onChangeText={(text) => setWeight(text)}
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>평소활동량</Text>
                <View style={styles.activityButtonsContainer}>
                    <TouchableOpacity 
                        style={[styles.activityButton, active === 's' && styles.selectedActivity]}
                        onPress={() => setActive('s')}
                    >
                        <Image source={active === 's' ? activeImg : inactive} />
                        <Text style={active === 's' && styles.selectedActivityText}>활동 적음</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.activityButton, active === 'm' && styles.selectedActivity]}
                        onPress={() => setActive('m')}
                    >
                        <Image source={active === 'm' ? activeImg2 : inactive2} />
                        <Text style={active === 'm' && styles.selectedActivityText}>보통</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.activityButton, active === 'l' && styles.selectedActivity]}
                        onPress={() => setActive('l')}
                    >
                        <Image source={active === 'l' ? activeImg3 : inactive3} />
                        <Text style={active === 'l' && styles.selectedActivityText}>활동 많음</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.nextBtn} onPress={goNext}>
                    <Text style={{color: '#fff'}}>다음</Text>
                </TouchableOpacity> 
            </View>
            
            
            
            </ScrollView>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      padding: 20,
      paddingVertical: 30,
      paddingTop: 100,
   
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 10,
      
    },

    label: {
      fontWeight: 'bold',
      marginRight: 10,
      marginTop: 10,
      marginBottom: 2,

    },
    input: {
      marginTop: 10,
      backgroundColor: '#fafafa',
      height: 50,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#ecebeb',
      paddingHorizontal: 20,
    },
    title:{
        fontSize:20,
        fontWeight: 'bold',
        marginBottom: 50,
        marginLeft: 10,
    },
    genderButton: {
        color: '#9C9C9C',
        borderWidth: 1,
        borderColor:  '#ecebeb',
        backgroundColor: '#fafafa',
        borderRadius: 5,
        padding: 14,
        marginVertical: 5,
        width: '45%',
        alignItems: 'center',
    },
    selectedGender: {
        backgroundColor: '#000',
        color: '#FFF',
    },
    genderPick: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nextBtn: {
        borderWidth: 1,
        backgroundColor: '#000',
        borderRadius: 30,
        padding: 14,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
        marginTop: 40
        
    },
      rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    halfContainer: {
        width: '45%',
    },
    activityButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    activityButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 5,
    },
    
    
});

export default SetGoal;
