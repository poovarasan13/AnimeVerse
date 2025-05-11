import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import SearchScreen from '../screens/SearchScreen';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Stack=createNativeStackNavigator();
const SearchStack = () => {
   const navigation = useNavigation();
 return (
  <Stack.Navigator>
  <Stack.Screen 
    name="Search By Name" 
    component={SearchScreen}
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

</Stack.Navigator>
 )
}
export default SearchStack
