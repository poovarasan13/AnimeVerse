import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';


const AnimeDetails = ({ route }) => {
    const { character } = route.params;
    console.log(character)
    return (
        <ScrollView className="flex-1 bg-orange-50">

            <View className="items-center pt-3 bg-orange-500 ">
                <View className="w-48 h-48 rounded-full border-4 border-white shadow-xl">
                    <Image
                        source={character.image}
                        className="w-full h-full rounded-full"
                        resizeMode="cover"
                    />
                </View>
                <Text className="text-white text-3xl font-bold mt-4">
                    {character.name.first} {character.name.last}
                </Text>
                <Text className="text-white text-lg italic">
                    {character.name.romaji}
                </Text>
                <Text className="text-white text-lg">
                    {character.biographical.rank}
                </Text>
            </View>


            <View className="px-6 mt-6">

                <View className="mb-8">
                    <Text className="text-2xl font-bold text-orange-600 mb-3">Basic Information</Text>
                    <View className="bg-white rounded-xl p-4 shadow-md">
                        <View className="flex-row justify-between mb-2">
                            <Text className="text-gray-600">Birth Date:</Text>
                            <Text className="font-semibold">{character.biographical.birth_date}</Text>
                        </View>
                        <View className="flex-row justify-between mb-2">
                            <Text className="text-gray-600">Gender:</Text>
                            <Text className="font-semibold">{character.biographical.gender}</Text>
                        </View>
                        <View className="flex-row justify-between mb-2">
                            <Text className="text-gray-600">Species:</Text>
                            <Text className="font-semibold">{character.biographical.species}</Text>
                        </View>
                        <View className="flex-row justify-between mb-2">
                            <Text className="text-gray-600">Affiliation:</Text>
                            <Text className="font-semibold">{character.biographical.affiliation}</Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="text-gray-600">Team:</Text>
                            <Text className="font-semibold">{character.biographical.team}</Text>
                        </View>
                    </View>
                </View>

                <View className="mb-8">
                    <Text className="text-2xl font-bold text-orange-600 mb-3">Abilities</Text>
                    <View className="bg-white rounded-xl p-4 shadow-md">

                        <View>
                            <Text className="text-gray-00 mb-2">Signature Jutsu:</Text>
                            {character.abilities.signature_jutsu.map((jutsu, index) => (
                                <View key={index} className="bg-orange-100 rounded-full px-4 py-2 mb-2">
                                    <Text className="text-orange-800 font-medium">{jutsu}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>


                <View className="mb-8">
                    <Text className="text-2xl font-bold text-orange-600 mb-3">Voice Actors</Text>
                    <View className="bg-white rounded-xl p-4 shadow-md">
                        <View className="flex-row mb-2">
                            <Text className="text-gray-600 w-1/3">Japanese:</Text>
                            <Text className="font-semibold flex-1 flex-wrap text-right">
                                {character.voice_actors.japanese}
                            </Text>
                        </View>
                        <View className="flex-row ">
                            <Text className="text-gray-600 w-1/3">English:</Text>
                            <Text className="font-semibold flex-1  flex-wrap text-right">
                                {character.voice_actors.english}
                            </Text>
                        </View>
                    </View>
                </View>


                {character.name.aliases && character.name.aliases.length > 0 && (
                    <View className="mb-8">
                        <Text className="text-2xl font-bold text-orange-600 mb-3">Aliases</Text>
                        <View className="bg-white rounded-xl p-4 shadow-md">
                            {character.name.aliases.map((alias, index) => (
                                <Text key={index} className="text-gray-800 mb-1">• {alias}</Text>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default AnimeDetails;