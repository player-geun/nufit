import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CarouselPage from './CarouselPage';

const Carousel = ({ pages, pageWidth, gap, offset}) => {
  const [page, setPage] = useState(0);

  const renderItem = ({ item }) =>{
    return (
      <CarouselPage item={item} style={{ width: pageWidth, marginHorizontal: gap / 2 }} />
    );
  }

  const onScroll = (e) => {
    const newPage = Math.round(e.nativeEvent.contentOffset.x / (pageWidth + gap));
    setPage(newPage);
  }

  return (
    <View style={styles.container}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item) => `page__${item.num}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.indicatorWrapper}>
        {Array.from({ length: pages.length }, (_, i) => i).map((i) => (
          <View style={dstyles(i===page).indicator} key={`indicator_${i}`} />
        ))}
      </View>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems: 'center',
    height: '60%',
// backgroundColor: 'red'
  },
  indicatorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16
  }

})
const dstyles = (focused) => StyleSheet.create({
  indicator: {
    margin: 5,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: focused ? '#00D7BD' :'white',
  },
})