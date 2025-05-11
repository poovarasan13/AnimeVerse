
import { createDrawerNavigator } from '@react-navigation/drawer';
import AnimeStack from '../Routes/AnimeStack';
import SearchStack from '../Routes/SearchStack';

const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, 
        drawerType: 'front', 
        drawerStyle: {
          width: '70%',
          paddingTop:30,
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={AnimeStack}
      />
      <Drawer.Screen
        name="Search" 
        component={SearchStack}
      />
    </Drawer.Navigator>
  );
}