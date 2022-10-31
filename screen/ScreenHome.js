import { Platform, View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { MainContaier } from '../components/MainContainer';
import styled from 'styled-components/native';
import { CategoyItem } from '../components/CategoryItem';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect, useState } from 'react';
import Icon from "@expo/vector-icons/FontAwesome";
import { AddCategoryItem } from '../components/AddCategoryItem';

const HomeItemList = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const HomeListContainer = styled.View`
    background-color: #171A23;
    flex: 1;
    padding: 0 15px;
`;

const ILookingFor = () => {
    const navigation = useNavigation();

    const NavigateToAddItem = (catTitle, catId) => {
        navigation.navigate("AddCategory", { title: catTitle, id: catId });
    }

    return (
        <HomeListContainer>
            <AddCategoryItem
                title="Фотографы"
                firstColor='#6BB3F7'
                secondColor='#1348CF'
                imageLink={require('../assets/camera_perspective_matte.png')}
                onPress={()=> NavigateToAddItem('Добавить в фотографы', 1)}
            />
            <AddCategoryItem
                title="Фотомодели"
                firstColor='#364AFF'
                secondColor='#1524A9'
                imageLink={require('../assets/models-icon.png')}
                onPress={()=> NavigateToAddItem('Добавить в фотомодели', 2)}
            />
            <AddCategoryItem
                title="Фотостудии"
                firstColor='#3DF4B2'
                secondColor='#0A9060'
                imageLink={require('../assets/light-icon.png')}
                onPress={()=> NavigateToAddItem('Добавить в фотостудии', 3)}
            />
            <AddCategoryItem
                title="Видеографы"
                firstColor='#E16FD6'
                secondColor='#9F1B93'
                imageLink={require('../assets/video_camera_perspective_matte.png')}
                onPress={()=> NavigateToAddItem('Добавить в видеографы', 4)}
            />
        </HomeListContainer>
        )
}

const ISuggest = () => {
    const navigation = useNavigation();

    const NavigateToCategory = (catTitle, catId) => {
        navigation.navigate("Category", { title: catTitle, id: catId });
    }

    return (
        <HomeListContainer>
                <CategoyItem
                    title="Фотографы"
                    subTitle="1200"
                    firstColor='#6BB3F7'
                    secondColor='#1348CF'
                    imageLink={require('../assets/camera_perspective_matte.png')}
                    imageStyle={{ position: 'relative', top: 10, left: 40 }}
                    onPress={()=> NavigateToCategory('Фотографы', 1)}
                />
            <HomeItemList>
                <CategoyItem
                    title="Фотомодели"
                    subTitle="3400"
                    firstColor='#364AFF'
                    secondColor='#1524A9'
                    imageLink={require('../assets/models-icon.png')}
                    smallIcon={true}
                    imageStyle={{ position: 'relative', top: 15, left: 0 }}
                    onPress={()=> NavigateToCategory('Фотомодели', 2)}
                />
                <View style={{padding: 5}} />
                <CategoyItem
                    title="Фотостудии"
                    subTitle="200"
                    firstColor='#3DF4B2'
                    secondColor='#0A9060'
                    imageLink={require('../assets/light-icon.png')}
                    smallIcon={true}
                    imageStyle={{ position: 'relative', top: 15, left: 0 }}
                    onPress={() => NavigateToCategory('Фотостудии', 3)}
                    />
            </HomeItemList>
                <CategoyItem
                    title="Видеографы"
                    subTitle="500"
                    firstColor='#E16FD6'
                    secondColor='#9F1B93'
                    imageLink={require('../assets/video_camera_perspective_matte.png')} 
                    onPress={() => NavigateToCategory('Видеографы', 4)}
                    />
        </HomeListContainer>
    )
}

export default function ScreenHome() {
    const Tab = createMaterialTopTabNavigator();

    return (
        <MainContaier>
            <Tab.Navigator
                initialRouteName='Suggest'
                tabBarOptions={{
                    indicatorStyle: {
                        width: 0,
                        height: 0,
                        elevation: 0,
                    },
                    style: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderWidth: 0,
                        backgroundColor: '#000000',
                        borderRadius: 50,
                        marginTop: 5,
                        marginBottom: 15,
                        marginLeft: 12,
                        marginRight: 12,
                        elevation: 0,
                    },
                    activeTintColor: '#FFFFFF',
                    inactiveTintColor: '#866FE1',
                }}
            >
                <Tab.Screen
                    name="Suggest"
                    component={ISuggest}
                    options={{
                        tabBarLabel: 'Я ищу',
                        tabBarLabelStyle: { fontSize: 16, textTransform: 'none' },
                    }}
                />
                <Tab.Screen
                    name="LookingFor"
                    component={ILookingFor}
                    options={{
                        tabBarLabel: 'Предлагаю',
                        tabBarLabelStyle: { fontSize: 16, textTransform: 'none'},
                    }}
                />
            </Tab.Navigator>
        </MainContaier>
    );
}