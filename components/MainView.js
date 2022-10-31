import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenOrder from "../screen/ScreenOrder";
import ScreenFavorite from "../screen/ScreenFavorite";
import ScreenNotifications from "../screen/ScreenNotifications";
import Icon from "@expo/vector-icons/Feather";
import Icons from "@expo/vector-icons/Ionicons";
import { CategotyHomeNavigation } from '../navifation/CategotyHomeNavigation';



export const MainView = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName='Home' sceneContainerStyle={{backgroundColor: '#171A23'}}>
            <Tab.Screen
                name="Home"
                component={CategotyHomeNavigation}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Главная',
                    tabBarLabelStyle: { fontSize: 9 },
                    tabBarStyle: {backgroundColor: '#101218'},
                    tabBarIcon: ({color, size, focused}) => <Icon size={20} color={focused ? '#866FE1' : '#ffffff'} name="home" />
                }} />
            <Tab.Screen
                name="Order"
                component={ScreenOrder}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Заявки',
                    tabBarLabelStyle: { fontSize: 9 },
                    tabBarStyle: {backgroundColor: '#101218'},
                    tabBarIcon: ({color, size, focused}) => <Icons size={20} color={focused ? '#866FE1' : '#ffffff'} name="download-outline" />
                }} />
            <Tab.Screen
                name="Favorite"
                component={ScreenFavorite}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Избранное',
                    tabBarLabelStyle: { fontSize: 9 },
                    tabBarStyle: {backgroundColor: '#101218'},
                    tabBarIcon: ({color, size, focused}) => <Icon size={20} color={focused ? '#866FE1' : '#ffffff'} name="heart" />
                }} />
            <Tab.Screen
                name="Notifications"
                component={ScreenNotifications}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Уведомление',
                    tabBarLabelStyle: { fontSize: 9 },
                    tabBarStyle: {backgroundColor: '#101218'},
                    tabBarIcon: ({color, size, focused}) => <Icon size={20} color={focused ? '#866FE1' : '#ffffff'} name="bell" />
                }} />
        </Tab.Navigator>
    )
}