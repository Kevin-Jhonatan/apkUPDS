import {StyleSheet} from 'react-native';
import theme from '../theme.style';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.primary_color,
    fontSize: theme.font_size_small,
    height: '100%',
  },
  containerIconos: {
    backgroundColor: '#235FAD',
    height: '10%',
  },
  containerAnuncio: {
    backgroundColor: '#FA7364',
    height: '20%',
  },
  containerEvento: {
    backgroundColor: '#4E4846',
    height: '60%',
  },
  containerEventoView: {
    backgroundColor: 'yellow',
    height: 100,
    marginBottom: 10,
  },
  text: {
    color: '#FF5733',
    textAlign: 'center',
    height: '100%',
  },
  test: {
    color: '#4C98FA',
    textAlign: 'center',
    height: '100%',
  },
});
