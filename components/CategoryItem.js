import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const ItemContainer = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
background: #242834;
border-radius: 20px;
padding: 7px 10px;
margin-bottom: 10px;
`;
const Title = styled.Text`
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
margin-bottom: 10px;
`;
const SubTitle = styled.Text`
font-weight: 300;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
`;
const ItemContent = styled.View`
margin: 0 5px;
`;

export const CategoyItem = ({ title, subTitle, firstColor, secondColor, imageLink, smallIcon, imageStyle, onPress }) => {
    return (
            <ItemContainer style={smallIcon && styles.smallContainer} onPress={onPress}>
                <ItemContent>
                    <LinearGradient
                        style={smallIcon ? styles.linearGradientSmall : styles.linearGradient}
                        colors={[firstColor, secondColor]}
                    >
                        <Image style={imageStyle} source={imageLink}/>
                    </LinearGradient>
                </ItemContent>
                <ItemContent>
                    <Title>{ title }</Title>
                    <SubTitle>{ subTitle }</SubTitle>
                </ItemContent>
            </ItemContainer>
    )
}

var styles = StyleSheet.create({
    linearGradient: {
        alignItems: "center",
        justifyContent: "center",
        width: 136,
        height: 136,
        borderRadius: 15,
        marginRight: 20
    },
    linearGradientSmall: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 15,
        marginBottom: 30,
    },
    smallContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'flex-start',
        maxHeight: 170,
        flex: 1,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 15,
        paddingRight: 15
    }
  });