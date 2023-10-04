import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import searchImg from '../assets/add_by_search_ico.png'
import SaveFood from '../components/SaveFood';

const Search = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showFlatList, setShowFlatList] = useState(false);

  const data = [
    { id: 1, title: '사과' },
    { id: 2, title: '아오리사과' },
    { id: 3, title: '풋사과' },
    { id: 4, title: '사과잼' },
    { id: 5, title: '딸기' },
    { id: 6, title: '딸기우유' },
    { id: 7, title: '초코우유' },
    { id: 8, title: '딸기주스' },
    { id: 9, title: '사과주스' },
    { id: 10, title: '사과청' },
  ];

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredData([]);
    } else {
      setFilteredData(
        data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    setShowFlatList(searchTerm !== '');
  }, [searchTerm]);

  const handleItemClick = (item) => {
    navigation.navigate('SearchDetail', { title: item.title });
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
          <Text>{item.title}</Text>
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
            keyExtractor={(item) => item.id.toString()}
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
    // borderRadius: 8,
    // marginHorizontal: 10,
    // marginTop: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    // elevation: 0,
  },
  searchInput: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    
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