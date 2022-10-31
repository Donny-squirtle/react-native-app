import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Navigator } from './navifation/Navigatior';


export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
      <StatusBar hidden = {false} backgroundColor = "#242834" translucent = {false}/>
    </NavigationContainer>
  );
}
