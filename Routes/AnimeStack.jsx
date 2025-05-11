// AnimeStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimeList from '../screens/AnimeList';
import AnimeDetails from '../screens/AnimeDetails';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const AnimeStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="AnimeVerse" 
        component={AnimeList}
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            color: 'black',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Text style={{ fontSize: 24, color: 'black',paddingEnd:20 }}>☰</Text>
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 56,
            marginRight: 16,
          },
        }}
      />
      <Stack.Screen 
        name="AnimeDetails" 
        component={AnimeDetails}
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTitleStyle: {
            color: 'black',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AnimeStack;
