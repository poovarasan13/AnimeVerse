import { Image, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.6;
const CARD_HEIGHT = 280;

const AnimeCard = ({ character,navigation }) => {
  const handleView=(character)=>{
    navigation.push('AnimeDetails',{character})
   }
  return (
    <TouchableOpacity 
      activeOpacity={0.9}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: 15,
        shadowColor: '',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
      }}
      onPress={()=>handleView(character)}
    >
      <View
       
        className="rounded-lg h-full overflow-hidden p-1"
      >
        <View className="bg-orange-500 rounded-[16px] h-full w-full overflow-hidden">
          <View className="items-center mt-6">
            <View
             
              className="w-44 h-44 rounded-full justify-center items-center  border-4 border-white"
            >
              <Image
                source={character.image}
                className="w-full h-full rounded-full border-2"
                resizeMode="cover"
              />
            </View>
          </View>
          
          <View className="px-6 mt-5">
            <Text className="text-white text-2xl font-bold text-center tracking-wide">
              {character.name.first} {character.name.last}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AnimeCard;