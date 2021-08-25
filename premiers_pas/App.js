import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Alert, Pressable, TouchableOpacity, ActivityIndicator } from 'react-native';


export default function App() {

  const handlePress = () => {
    Alert.alert('You Sign Out successfully')
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.one}>Hi!</Text>
        <Image source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }} style={styles.two} />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
				<Text style={styles.btnText}>Sign out</Text></TouchableOpacity>
        <Text style={styles.three}>See you soon...</Text>
        <ActivityIndicator></ActivityIndicator>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  first: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 80,
  },
  one: {
    margin: 80,
    fontSize: 30,
  },
  two: {
    textAlign: 'center',
    alignItems: 'center',
    height: 30,
    width: 70,

  },
  
  three: {
  fontWeight: "bold",

  },
  button: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 4,
    margin: 15,

  },
  btnText: {
    fontWeight: 'bold',
  }

});
