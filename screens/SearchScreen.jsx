import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import data from '../Data/Anime.js';
import AnimeCard from './AnimeCard'
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
  const [name, setName] = useState('');
  const [filterData, setFilterData] = useState(data);
  const navigation=useNavigation();
  useEffect(() => {
    if (name === '') {
      setFilterData(data);
    } else {
      const result = data.filter((item) =>
        item.name.first.toLowerCase().includes(name.toLowerCase())
      );
      setFilterData(result);
    }
  }, [name]);
   const renderItem=({item})=>(
    <AnimeCard key={item.id} character={item} navigation={navigation}/>
   )
  return (
    <View className='items-center'>
      <View className="pt-6 items-center">
        <TextInput
          className="border border-1 border-gray-500 px-4 w-[300px] text-xl h-12 rounded-md"
          placeholder="Search by Anime Name"
          value={name}
          onChangeText={(newText) => setName(newText)}
        />
      </View>

      {filterData.length > 0 ? (
        <FlatList
          data={filterData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 20}}
        />
      ) : (
        <Text className="text-center mt-4">No Data Found</Text>
      )}
    </View>
  );
};

export default SearchScreen;
