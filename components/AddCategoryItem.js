import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const ItemContainer = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
background: #242834;
border-radius: 10px;
padding: 3px 4px;
margin-bottom: 10px;
`;
const Title = styled.Text`
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
`;
const ItemContent = styled.View`
`;

export const AddCategoryItem = ({ title, firstColor, secondColor, imageLink, onPress }) => {
    return (
            <ItemContainer onPress={onPress}>
                <ItemContent>
                    <LinearGradient
                        style={styles.linearGradient}
                        colors={[firstColor, secondColor]}
                    >
                    <Image style={{width: 33, height: 33}} source={imageLink}/>
                    </LinearGradient>
                </ItemContent>
                <ItemContent>
                    <Title>{ title }</Title>
                </ItemContent>
            </ItemContainer>
    )
}

var styles = StyleSheet.create({
    linearGradient: {
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: 15,
        marginRight: 15
    },
  });