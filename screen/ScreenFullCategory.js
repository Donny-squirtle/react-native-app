import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl, Image, TouchableOpacity } from 'react-native';
import { CategoryContainer } from '../components/CategoryContainer';
import axios from 'axios';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const FullCategoryContainer = styled.View`
`;

const FullCategoryHeader = styled.View`
background: #101218;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: flex-start;
padding: 0 17px;
`;

const FullCategoryLogo = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 50px;
    position: relative;
    top: 35px;
`;
const FullCategoryName = styled.Text`
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
`;

const FullCategoryPrice = styled.Text`
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
`;

const FullCategoryLogoWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    flex: 1;
    margin-bottom: 8px;
`;
const FullCategoryActivityText = styled.Text`
    font-weight: 400;
    font-size: 12px;
    color: #7C7E83;
    margin-left: 97px;
    margin-top: 8px;
`;
const FullCategoryTextWrapper = styled.View`
    padding: 0 17px;
    margin-top: 30px;
`;
const FullCategoryTextTitle = styled.Text`
    font-weight: 700;
    font-size: 12px;
    color: #FFFFFF;
    margin-bottom: 5px;
`;
const FullCategoryTextMain = styled.Text`
    font-weight: 100;
    font-size: 14px;
    color: #7C7E83;
`;
const FullCategoryButtonWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;
const ButtonText = styled.Text`
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
`;
const ButtonTextGradient = styled.Text`
    font-weight: 700;
    font-size: 14px;
    color: #E16FD6;
`;
const ButtonTextGradientWrapper = styled.View`
    font-weight: 700;
    font-size: 14px;
    background-color: #171A23;
    border-radius: 40;
    padding: 11px 30px;
    margin: 1px;
`;
export default function ScreenFullCategory({ route }) {
    const { id, fullCategoty, catRating } = route.params;

    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchCategory = (data) => {
        setIsLoading(true);
        axios
            .post('https://api.extension.by/index.php', {"action":"showitem","data":{"id":`${id}`}})
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
        <CategoryContainer title={'Назад'} fullCategory={fullCategoty} raiting={catRating}>
            <FlatList
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchCategory} />}
            data={items}
            renderItem={({ item }) =>
                <FullCategoryContainer>
                    <FullCategoryHeader>
                        <FullCategoryLogo source={{uri: `https://api.extension.by${item.logo}`}}/>
                        <FullCategoryLogoWrapper>
                            <FullCategoryName>{item.name}</FullCategoryName>
                            <FullCategoryPrice>{item.price} ₽ час</FullCategoryPrice>
                        </FullCategoryLogoWrapper>
                    </FullCategoryHeader>
                    <FullCategoryActivityText>{item.activity}</FullCategoryActivityText>
                    <FullCategoryTextWrapper>
                        <FullCategoryButtonWrapper>
                            <TouchableOpacity>
                                <LinearGradient
                                    style={{
                                            paddingTop: 12,
                                            paddingLeft: 31,
                                            paddingBottom: 12,
                                            paddingRight: 31,
                                            borderRadius: 40,
                                        }}
                                        colors={["#E16FD6", "#866FE1"]}
                                        start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                                >
                                    <ButtonText>Подать заявку</ButtonText>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <LinearGradient
                                    style={{
                                        borderRadius: 40,
                                    }}
                                    colors={["#E16FD6", "#866FE1"]}
                                    start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                                >
                                    <ButtonTextGradientWrapper>
                                        <ButtonTextGradient>Отрыть контакты</ButtonTextGradient>
                                    </ButtonTextGradientWrapper>
                                </LinearGradient>
                            </TouchableOpacity>
                        </FullCategoryButtonWrapper>
                        <FullCategoryTextTitle>О себе</FullCategoryTextTitle>
                        <FullCategoryTextMain style={{marginBottom: 23}}>{item.description}</FullCategoryTextMain>
                        <FullCategoryTextTitle>Специалиста</FullCategoryTextTitle>
                        <FullCategoryTextMain>2 фатографа</FullCategoryTextMain>
                        <FullCategoryTextMain>1 дизайнер</FullCategoryTextMain>
                    </FullCategoryTextWrapper>
                    
                </FullCategoryContainer>}
            />    
        </CategoryContainer>
    );
}