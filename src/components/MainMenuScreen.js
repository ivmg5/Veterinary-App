import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

const MainMenuScreen = ({ navigation }) => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'animals'), snapshot => {
      const animalsList = [];
      snapshot.forEach(doc => {
        animalsList.push({ id: doc.id, ...doc.data() });
      });
      setAnimals(animalsList);
    });

    return unsubscribe;
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('AnimalDetail', { animal: item })}
    >
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={animals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        title="Agregar Animal"
        onPress={() => navigation.navigate('NewAnimal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 18,
  },
});

export default MainMenuScreen;
