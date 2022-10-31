import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenCategory from '../screen/ScreenCategoy';
import ScreenHome from '../screen/ScreenHome';
import ScreenFullCategory from '../screen/ScreenFullCategory';
import ScreenAddItem from '../screen/ScreenAddItem';

export const CategotyHomeNavigation = () => {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator initialRouteName="MainHome" sceneContainerStyle={{backgroundColor: '#171A23'}}>
            <Stack.Screen name="MainHome" component={ScreenHome} options={{ headerShown: false }} />
            <Stack.Screen name="Category" component={ScreenCategory} options={{ headerShown: false }} />
            <Stack.Screen name="FullCategory" component={ScreenFullCategory} options={{ headerShown: false }} />
            <Stack.Screen name="AddCategory" component={ScreenAddItem} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}