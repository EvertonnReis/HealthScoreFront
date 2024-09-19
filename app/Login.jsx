import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons'; // Para os ícones de redes sociais

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
      if(response.body.locked == false){
        setErrorMessage('Email ou senha incorretos');
      }

      if (response.ok) {
        const data = await response.json();
        const token = data.id_token;

        localStorage.setItem('authToken', token);
        
        onLogin(token, email);

        Alert.alert('Sucesso', 'Login realizado com sucesso');
        setErrorMessage('');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }
  };

  const handleForgotPassword = () => {
    console.log('Redirecionar para página de esqueci a senha');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/HealthScore-Logo.png')} 
          style={styles.logo}
        />
      </View>

      <View style={styles.content}>
        
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

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <View style={styles.socialLoginContainer}>
          <Text style={styles.socialLoginText}>Ou faça login com:</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="google" size={24} color="#EA4335" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook" size={24} color="#3B5998" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="apple" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
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
    backgroundColor: '#ffffff',
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
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#004d00',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#004d00',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: '#004d00',
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  socialLoginContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  socialLoginText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  iconContainer: {
    right: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    alignItems: 'center',
  },
  socialButton: {
    paddingHorizontal: 15,
  },
});
