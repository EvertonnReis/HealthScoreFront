import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons'; // Para os ícones de redes sociais

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      } else {
        setErrorMessage('Email ou senha incorretos');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }

    // Simulação de login sem o backend
  // const fakeToken = 'fakeAuthToken';
  // localStorage.setItem('authToken', fakeToken);
  // onLogin(fakeToken, email);
  // Alert.alert('Sucesso', 'Login simulado realizado com sucesso');
  // setErrorMessage('');
  
  };

  const handleRegister = async () => {
    if (registerPassword !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: registerUsername,
          email: registerEmail,
          password: registerPassword,
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Registro realizado com sucesso');
        setModalVisible(false);
      } else {
        Alert.alert('Erro', 'Não foi possível registrar o usuário');
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
          source={require('../assets/Logo3.png')} 
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

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.registerText}>Não tem uma conta? Registre-se</Text>
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

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Registrar</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome de Usuário"
              value={registerUsername}
              onChangeText={setRegisterUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={registerEmail}
              onChangeText={setRegisterEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={registerPassword}
              onChangeText={setRegisterPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirme a Senha"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeModalText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#00A36C',
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
    width: 400,
    height: 400,
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
    backgroundColor: '#00A36C',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    color: '#ffffff',
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 3, // Raio de difusão da sombra

  },
  button: {
    backgroundColor: '#00A36C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 3, // Raio de difusão da sombra

  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: '#00A36C',
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  registerText: {
    color: '#00A36C',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeModalText: {
    color: '#00A36C',
    fontSize: 14,
    marginTop: 20,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
