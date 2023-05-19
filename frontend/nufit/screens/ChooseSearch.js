import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const ChooseSearch = ({ navigation }) => {

    
    function handlePress2() {
        navigation.navigate('Search');
    }
  

  return (
    <View style={styles.container}>
        <Text style={styles.text}>어떻게 기록할까?</Text>
        <View style={styles.chooseContainer}>
            <View style={styles.choose1}>
                <Button title="사진으로 기록하기" />
            </View>
            <View style={styles.choose2}>
                <Button title="검색으로 기록하기" onPress={handlePress2} />
            </View>
        </View>
        
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent : 'center',
        alignItems : 'center',
        
    },
    text: {
        marginTop: 200,
        fontSize: 18,
        fontWeight: 'bold',
    },
    chooseContainer: {
        flex:1,
        justifyContent: 'space-around',
        alignItems : 'center',
        flexDirection : 'row',
        marginHorizontal : 20,
        
    },
    choose1: {
        flex:1,
    },
    choose2: {
        flex:1,
    },
   
})


export default ChooseSearch;
