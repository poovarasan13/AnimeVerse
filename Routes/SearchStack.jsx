import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import SearchScreen from '../screens/SearchScreen';

const Stack=createNativeStackNavigator();
const SearchStack = () => {
 return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false,
    }}>
         <Stack.Screen name="SearchScreen" component={SearchScreen} ></Stack.Screen>
    </Stack.Navigator>
 )
}
export default SearchStack
