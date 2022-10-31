import { TextInput, IconButton, Button, Stack } from '@react-native-material/core';
import { StyleSheet, View, ImageBackground, Text, Dimensions, Image, SafeAreaView } from 'react-native';
import Icon from "@expo/vector-icons/Ionicons";
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
const win = Dimensions.get('window');

const CustomViewContaier = styled.View`
height: 38%;
width: 100%;
background-color: #ffffff;
padding: 20px;
`;
const LogInText = styled.Text`
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #171A23;
margin-bottom: 15px;
`;
const Logo = styled.Image`
    margin: 0 auto;
    margin-bottom: 35px;
`;
const ButtonContainer = styled.View`
margin: 0 auto;
`
export default function LogInView() {
    const navigation = useNavigation();

    const handleLogIn = () => {
        navigation.navigate("Main");
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/login-page.png')} resizeMode="contain" style={styles.image}>
            {/* <ImageBackground source={require('../assets/ellipse.png')} resizeMode="contain" style={styles.imageWhie}>
            </ImageBackground> */}
                <CustomViewContaier>
                    <Logo source={require('../assets/logo.png')}/>
                    <LogInText>Вход</LogInText>
                    <TextInput
                        label="Телефон"
                        inputContainerStyle={{
                            background: "#F9F9F9",
                            borderTopEndRadius: 50,
                            borderBottomEndRadius: 50,
                            borderBottomStartRadius: 50,
                            borderTopStartRadius: 50,
                            borderBottomWidth: 0
                        }}
                        style={{
                            marginBottom: 30,
                        }}
                        trailing={props => (
                            <IconButton icon={props => <Icon name="keypad" {...props} />} {...props} />
                        )}
                    />
                    <ButtonContainer>
                        <Button
                            onPress={()=> handleLogIn()}
                            title="Войти"
                            uppercase={false}
                            leadingContainerStyle={{
                                borderTopEndRadius: 50,
                                borderBottomEndRadius: 50,
                                borderBottomStartRadius: 50,
                                borderTopStartRadius: 50,
                                width: 240
                            }}
                            style={{
                                borderTopEndRadius: 50,
                                borderBottomEndRadius: 50,
                                borderBottomStartRadius: 50,
                                borderTopStartRadius: 50,
                                width: 240,
                            }}
                        />
                    </ButtonContainer>
                </CustomViewContaier>
            </ImageBackground>
        </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#171A23',
        flex: 1,
    },
    image: {
        display: 'flex',
        justifyContent: 'flex-end',
        flex: 1,
    },
    imageWhie: {
        flex: 1,
        width: win.width,
        position: 'relative',
        bottom: 10,
    },
  });