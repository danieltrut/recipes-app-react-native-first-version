import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  photo: {
    height: 120,
    width: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    color: '#000',
    marginTop: 7,
  },
  category: {
    fontSize: 15,
    color: '#f8f8f8'
  }
});

export default styles;
