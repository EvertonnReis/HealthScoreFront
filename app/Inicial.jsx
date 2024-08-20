import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from "react";
import { NativeBaseProvider, Box } from "native-base";

export default function Inicial() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Health Score</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Seja Bem-vindo ao Health Score!</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => { /* Lógica para cadastrar metas */ }}>
          <Text style={styles.buttonText}>Cadastrar Metas</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => { /* Lógica para cadastrar atividades */ }}>
          <Text style={styles.buttonText}>Cadastrar Atividades</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Health Score</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
  },
  header: {
    backgroundColor: '#004d00', 
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff', 
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 40,
    color: '#b0b0b0', 
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
  },
  profileButton: {
    backgroundColor: '#4caf50', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 20,
  },
  footer: {
    backgroundColor: '#004d00', 
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff', 
    fontSize: 16,
  },
});
