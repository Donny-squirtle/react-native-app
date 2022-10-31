import React from "react";
import { AppBar, IconButton, Switch } from "@react-native-material/core";
import { View, SafeAreaView, ScrollView, Image } from "react-native";
import styled from 'styled-components/native';
import Icon from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const CategoryRaitngImage = styled.Image`
width: 18px;
height: 18px;
`;
const CategoryRaitngText = styled.Text`
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #F9B023;
margin-right: 10px;
`;
const TitleCategory = styled.View`
display:flex;
flex-direction: row;
align-items: center;
margin-right: 25px;
`;

export const CategoryContainer = (props) => {
    const { children, title, fullCategory, raiting} = props;
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#171A23"}}>
            <AppBar
                color={fullCategory ? "#101218" : "#171A23"}
                style={{ elevation: 0 }}
                leading={props => (
                    <IconButton
                        onPress={()=> navigation.goBack()}
                        icon={<Icon name="arrow-back-ios" {...props} color="#FFFFFF" />}
                        {...props}
                    />
                )}
                title={title}
                trailing={
                    props => 
                        fullCategory && (
                            <TitleCategory>
                            <CategoryRaitngText>{raiting}</CategoryRaitngText>
                            <CategoryRaitngImage source={require('../assets/star-icon.png')} />
                        </TitleCategory>
                    )
                }
            />
                {children}
        </SafeAreaView>
    )
}