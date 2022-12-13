import React from 'react-native';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/screens/HomeScreen.component.style';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Container iconos */}
      <View style={styles.containerIconos}>
        <Text style={styles.text}>Hola, Kevin</Text>
      </View>
      {/* Container anuncios */}
      <View style={styles.containerAnuncio}>
        <Text style={styles.test}>Hola</Text>
      </View>
      {/* Container Eventos */}
      <ScrollView style={styles.containerEvento}>
        <View style={styles.containerEventoView}>
          <Text style={styles.text}>Hola, Evento</Text>
        </View>
        <View style={styles.containerEventoView}>
          <Text style={styles.text}>Hola, Evento</Text>
        </View>
        <View style={styles.containerEventoView}>
          <Text style={styles.text}>Hola, Evento</Text>
        </View>
        <View style={styles.containerEventoView}>
          <Text style={styles.text}>Hola, Evento</Text>
        </View>
        <View style={styles.containerEventoView}>
          <Text style={styles.text}>Hola, Evento</Text>
        </View>
        <View style={styles.containerEventoView}>
          <Text style={styles.text}>Hola, Evento</Text>
        </View>
        <View style={styles.containerEventoView}>
          <Text style={styles.text}>Hola, Evento</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
