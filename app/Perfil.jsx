import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TelaPerfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});