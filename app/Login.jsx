import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
          rememberMe: true,
        }),
      });
      console.log(response)
      if(response.body.locked == false){
        setErrorMessage('Email ou senha incorretos');
      }

      if (response.ok) {
        const data = await response.json();
        const token = data.id_token;
        
        onLogin(token, email);

        Alert.alert('Sucesso', 'Login realizado com sucesso');
        setErrorMessage('');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={require('../assets/logo_HS.png')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {errorMessage && (
          <Text style={styles.errorText}>
            {errorMessage}
          </Text>
        )}
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
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#004d00',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
