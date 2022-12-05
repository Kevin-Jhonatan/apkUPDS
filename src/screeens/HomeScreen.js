import React from 'react-native';
import {View, Text} from 'react-native';
import styles from '../styles/screens/HomeScreen.component.style';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo soy el Home de la APK</Text>
    </View>
  );
};
export default HomeScreen;
