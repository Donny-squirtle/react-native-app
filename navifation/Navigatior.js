import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInView from "../components/LogInView";
import { MainView } from "../components/MainView";

export const Navigator = () => {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LogInView} options={{ headerShown: false }}/>
            <Stack.Screen name="Main" component={MainView} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}