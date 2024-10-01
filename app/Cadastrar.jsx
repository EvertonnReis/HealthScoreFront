import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Cadastrar() {
  return (
    <View style={styles.cta}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Cadastrar Atividades</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Cadastrar Alimentação</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Cadastrar Horas de Sono</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Cadastrar Metas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cta: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#004d00', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 18,
  }
})