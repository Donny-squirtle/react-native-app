import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const CategoryItemWrapper = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
background-color: #1E212C;
border-radius: 10px;
margin-bottom: 10px;
`;

const CategoryText = styled.Text`
font-size: 14px;
line-height: 16px;
text-transform: uppercase;
color: #FFFFFF;
margin-bottom: 5px;
`;
const CategorySmallText = styled.Text`
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
`;
const CategoryRaitng = styled.View`
display: flex;
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: 15px;
`;
const CategoryRaitngImage = styled.Image`
width: 18px;
height: 18px;
margin-bottom: 8px;
`;
const CategoryRaitngText = styled.Text`
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #F9B023;
`;
const PostImage = styled.Image`
width: 70px;
height: 90px;
margin-right: 15px;
`

export default function SmallCategoryItem({ catId, catName, catPrice, catRating, catLogo }) {
    const navigation = useNavigation();

    const NavigateToCategory = (categoryId) => {
        navigation.navigate("FullCategory", {id : categoryId, fullCategoty: true, catRating: catRating});
    }
    return (
            <CategoryItemWrapper onPress={()=>NavigateToCategory(catId)}>
                <PostImage source={{uri: `https://api.extension.by${catLogo}`}}/>
                <View>
                    <CategoryText>{catName}</CategoryText>
                    <CategorySmallText>{catPrice} ₽ час</CategorySmallText>
                </View>
                <CategoryRaitng>
                    <CategoryRaitngImage source={require('../assets/star-icon.png')}/>
                    <CategoryRaitngText>{catRating}</CategoryRaitngText>
                </CategoryRaitng>
            </CategoryItemWrapper>
    );
}