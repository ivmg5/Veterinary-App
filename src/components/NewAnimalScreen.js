import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {db} from '../../firebaseConfig';
import {collection, addDoc} from 'firebase/firestore';

const NewAnimalScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');

  const handleAddAnimal = async () => {
    try {
      await addDoc(collection(db, 'animals'), {
        name,
        age,
        pictureUrl,
      });
      Alert.alert('Éxito', 'Animal agregado correctamente');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'No se pudo agregar el animal');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="URL de la Imagen"
        value={pictureUrl}
        onChangeText={text => setPictureUrl(text)}
      />
      <Button title="Agregar Animal" onPress={handleAddAnimal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default NewAnimalScreen;
