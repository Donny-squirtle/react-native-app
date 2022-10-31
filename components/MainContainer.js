import React from "react";
import { AppBar, IconButton, Switch } from "@react-native-material/core";
import { View, SafeAreaView, ScrollView } from "react-native";
import styled from 'styled-components/native';
import Icon from "@expo/vector-icons/FontAwesome";
const Logo = styled.Image`
    margin: 0 auto;
`;
export const MainContaier = (props) => {
    const { children } = props;
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#171A23"}}>
            <AppBar
                color="#171A23"
                style={{ elevation: 0 }}
                title={<Logo source={require('../assets/logo.png')} />}   
                // trailing={props => (
                //     <IconButton
                //         icon={<Icon name="navicon" {...props} color="#E16FD6" />}
                //         {...props}
                //     />
                //     )}
            />
                {children}
        </SafeAreaView>
    )
}