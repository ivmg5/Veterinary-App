import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const AnimalDetailScreen = ({route}) => {
  const {animal} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{animal.name}</Text>
      <Text style={styles.age}>Edad: {animal.age}</Text>
      {animal.pictureUrl ? (
        <Image
          style={styles.image}
          source={{uri: animal.pictureUrl}}
          resizeMode="cover"
        />
      ) : (
        <Text>No hay imagen disponible</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  age: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
});

export default AnimalDetailScreen;
