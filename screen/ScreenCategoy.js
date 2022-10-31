import React, { useEffect, useState } from 'react';
import { CategoryContainer } from '../components/CategoryContainer';
import SmallCategoryItem from '../components/SmallCategoryItem';
import axios from 'axios';
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const CategoryList = (id, type) => {
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchCategory = (data) => {
        setIsLoading(true);
        axios
            .post('https://api.extension.by/index.php', {"action":"showitems","data":{"category_id":`${id}`,"item_type":`${type}`}})
            .then(({ data }) => {
                setItems(data);
            })
            .catch((err) => {
                alert("Ошибка загрузки данных с сервера!");
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(fetchCategory, []);

    if (isLoading) {
        return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#171A23'}}>
            <ActivityIndicator size="large" />
            <Text style={{marginTop: 15, color: '#ffffff'}}>Загрузка...</Text>
        </View >
            )
    }
    return (
        <FlatList
            style={{paddingLeft: 10, paddingRight: 10, marginTop: 10}}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchCategory} />}
            data={items}
            renderItem={({ item }) =>
                <SmallCategoryItem
                catId={item.id}
                catName={item.name}
                catPrice={item.price}
                catRating={item.rating}
                catLogo={item.logo}
                />}
        />    
    );
}
export default function ScreenCategory({route}) {
    const Tab = createMaterialTopTabNavigator(); 
    const { title, id } = route.params;

    return (
        <CategoryContainer title={title}>
            <Tab.Navigator
                initialRouteName='Agency'
                sceneContainerStyle={{ backgroundColor: '#171A23' }}
                tabBarOptions={{
                    indicatorStyle: {
                        width: 0, height: 0, elevation: 0,      
                    },
                    style: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderWidth: 0,
                        backgroundColor: '#171A23',
                    },
                    activeTintColor: '#866FE1',
                    inactiveTintColor: '#ffffff',
                }}
            >
                <Tab.Screen
                    name="Agency"
                    component={()=>CategoryList(id, 0)}
                    options={{
                        tabBarLabel: 'Агенство',
                        tabBarLabelStyle: { fontSize: 14, textTransform: 'none'},
                    }}
                />
                <Tab.Screen
                    name="Personal"
                    component={()=>CategoryList(id, 1)}
                    options={{
                        tabBarLabel: 'Персонально',
                        tabBarLabelStyle: { fontSize: 14, textTransform: 'none'},

                    }}
                />
            </Tab.Navigator>
        </CategoryContainer>
    );
}