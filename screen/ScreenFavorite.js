import { View, Text } from 'react-native';
import { MainContaier } from '../components/MainContainer';
import styled from 'styled-components/native';

const MainText = styled.Text`
color: #FFFFFF;
font-weight: 700;
font-size: 24px;
`;
export default function ScreenFavorite() {
    return (
        <MainContaier>
            <View style={{display: 'flex', flex: 1, alignItems:'center', justifyContent: 'center'}}>
                <MainText>Избранного нет</MainText>
            </View>
        </MainContaier>
    );
}