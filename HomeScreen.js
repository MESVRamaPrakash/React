import React from 'react';
import { View, Text, StyleSheet, Button, Image, StatusBar } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Image source={require('./assets/Welcome.jpg')} style={styles.image} />
      <Text style={styles.text}>Welcome, Rama 💙</Text>
      <Button title="Go to Next Page" onPress={() => navigation.navigate('SecondScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  image: { width: 250, height: 250, marginBottom: 20 },
  text: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});
