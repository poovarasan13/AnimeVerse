import { Text, View, ScrollView, FlatList,Button } from 'react-native';
import data from '../Data/Anime.js';
import AnimeCard from './AnimeCard.jsx';
import { useNavigation } from '@react-navigation/native';

const AnimeList = () => {
  const navigation = useNavigation();
  
  const popularCharacters = data.filter(item => item.popular === true);


  const renderItem = ({ item }) => (
    <AnimeCard key={item.id} character={item} navigation={navigation} />
  );

  return (
    <ScrollView className="bg-white">
  
      <View className="pt-4">
        <Text className="text-black text-2xl font-bold px-6 mb-4">
          Popular Characters
        </Text>
        
        <FlatList
          horizontal
          data={popularCharacters}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>

  
      <View className="pt-7 pb-8">
        <Text className="text-black text-2xl font-bold px-6 mb-4">
          All Characters
        </Text>
        
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>
    </ScrollView>
  );
};

export default AnimeList;