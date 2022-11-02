import { Platform, View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { CategoryContainer } from '../components/CategoryContainer';
import styled from 'styled-components/native';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import Icon from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const ImageContaier = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;
const DafaultImage = styled.View`
    width: 84px;
    height: 84px;
    background: #000000;
    border-radius: 20px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const InputField = styled.TextInput`
    background: #101218;
    border-radius: 60px;
    margin-bottom: 10px;
    color: #ffffff;
    padding: 15px;
    padding-left: 25px;
`;
const TextButton = styled.Text`
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`;

export default function ScreenAddItem({ route }) {
    const [photo, setPhoto] = useState();
    const [compName, setCompName] = useState("");
    const [price, setPrice] = useState("");
    const [activity, setActivity] = useState("");
    const [desc, setDesc] = useState("");
    const option = {
        mediaType: 'photo',
        maxWidth: 84,
        maxHeight: 84,
        includeBase64: Platform.OS === 'android',
    };
    const { title, id } = route.params;
    const handleUploadPhoto = async  () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
      
          if (!result.cancelled) {
            setPhoto(result.base64);
          }
    }
    const handleFetchData = () => {
        axios
            .post('https://api.extension.by/enter.php', {
                "action": "additem",
                "data": {
                    "category_id": `${id}`,
                    "photo": `${photo}`,
                    "compName": `${compName}`,
                    "price": `${price}`,
                    "activity": `${activity}`,
                    "desc": `${desc}`
                }
            })
    }
    return (
        <CategoryContainer title={title}>
            <ImageContaier onPress={handleUploadPhoto}>
                {photo ? (
                <Image
                    source={{ uri: `data:image/png;base64,${photo}` }}
                    style={{ width: 84, height: 84, borderRadius: 20, marginBottom: 10}}
                />
                ) : (
                    <>
                        <DafaultImage>
                            <Icon size={24} color={'#546EDB'} name="picture-o"/>
                        </DafaultImage>
                        <Text style={{fontSize: 12, color: '#ffffff', marginBottom: 10}}>Добавить лого</Text>
                    </>
                    
                )}
            </ImageContaier>
            <InputField
                placeholder="Название aгентства"
                placeholderTextColor="#ffffff"
                onChangeText={setCompName}
            />
            <InputField
                placeholder="Деятельность"
                placeholderTextColor="#ffffff"
                onChangeText={setActivity}
            />
            <InputField
                placeholder="Стоимость"
                keyboardType="numeric"
                placeholderTextColor="#ffffff"
                onChangeText={setPrice}
            />
            <InputField
                placeholder="Описание"
                placeholderTextColor="#ffffff"
                onChangeText={setDesc}
            />
            <TouchableOpacity onPress={()=>handleFetchData}>
                <LinearGradient
                    style={{
                        paddingTop: 17,
                        paddingLeft: 34,
                        paddingBottom: 17,
                        paddingRight: 34,
                    }}
                    colors={["#E16FD6", "#866FE1"]}
                    start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                >
                    <TextButton>Сохранить</TextButton>
                </LinearGradient>
            </TouchableOpacity>
        </CategoryContainer>
        )
}