import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, FlatList, Text,TouchableOpacity  } from 'react-native';

const Search = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

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
  }, [searchTerm]);

  const handleItemClick = (item) => {
    navigation.navigate('SearchDetail', { title: item.title });
  };

  const renderItem = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => handleItemClick(item)}>
        <View style={styles.item}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="검색어를 입력하세요"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  searchInput: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Search;
