import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import searchImg from '../assets/add_by_search_ico.png'
import SaveFood from '../components/SaveFood';
import axios from 'axios';
import { getTokenFromLocal } from '../utils/tokenUtils';

const Search = ({ route, navigation }) => {
  const {mealId} = route.params;
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showFlatList, setShowFlatList] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const token = await getTokenFromLocal()
      try {
        const response = await axios.get(`http://43.202.91.101:8080/api/foods/names?q=${searchTerm}`,
        {headers: {Authorization : `Bearer ${token.accessToken}`}}); 
        console.log(response.data)
        setFilteredData(response.data); 
        setShowFlatList(true);
        
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm === '') {
      setFilteredData([]);
    } else {
      fetchData();
    }
  }, [searchTerm]);

  const handleItemClick = (item) => {
    
    const itemToPass = {
      mealId: mealId,
      id: item.id,
      title: item.name,
    };
    navigation.navigate('SearchDetail', { item: itemToPass });
  };

  const renderSearchResult = () => {
    return ( 
        <SaveFood />
    );
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleItemClick(item)}>
        <View style={styles.item}>
          <Image style={styles.searchimg} source={searchImg}/>
          <Text style={{fontSize: 16}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="먹은 음식을 입력해주세요"
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
        />
        <Image style={styles.searchimg} source={searchImg}/>
      </View>
      <View style={styles.listContainer}>
        {showFlatList ? (
          <FlatList
            style={styles.list}
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => (item ? item.id.toString() : '')}
          />
        ) : (
          renderSearchResult()
        )}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 10,
  },
  searchInput: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 50,
    paddingLeft: 30,
    flexDirection: 'row',
    marginTop: 10
  },
  noResultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  noResultText: {
    fontSize: 16,
    color: 'black',
  },
  listContainer: {
    flex: 15,
  },
  searchimg: {
    width: 18,
    height: 18,
    marginRight: 15,
  }
});

export default Search;