import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Modal, Dimensions  } from 'react-native';
import ModalAtividadesFisicas from './ModalAtividadesFisicas'; // Modal de Atividades Físicas
import ModalConsumoAgua from './ModalConsumoAgua'; // Modal de Consumo de Água
import ModalMedicamentos from './ModalMedicamentos'; // Modal de Medicamentos
import ModalMetas from './ModalMetas'; // Modal de Metas

import Icon from 'react-native-vector-icons/FontAwesome'; 

const { width, height } = Dimensions.get('window');

export default function Cadastrar() {
  const [modalAtividadesFisicasVisible, setModalAtividadesFisicasVisible] = useState(false);
  const [modalConsumoAguaVisible, setModalConsumoAguaVisible] = useState(false);
  const [modalMedicamentosVisible, setModalMedicamentosVisible] = useState(false);
  const [modalMetasVisible, setModalMetasVisible] = useState(false);


  return (
    <ImageBackground
    source={require('../assets/fitness.gif')} 
    style={styles.image}
    >
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalAtividadesFisicasVisible(true)}
          >
            <Icon name="heartbeat" size={24} color="#ffffff" />
            <Text style={styles.buttonDescription}>Registre suas atividades diárias.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalConsumoAguaVisible(true)}
          >
            <Icon name="tint" size={24} color="#ffffff" />
            <Text style={styles.buttonDescription}>Monitore sua hidratação diária.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalMedicamentosVisible(true)}
          >
            <Icon name="medkit" size={24} color="#ffffff" />
            <Text style={styles.buttonDescription}>Acompanhe sua medicação.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalMetasVisible(true)}
              // Adicione a ação para cadastrar metas}}
          >
            <Icon name="star" size={24} color="#ffffff" />
            <Text style={styles.buttonDescription}>Defina suas metas de saúde.</Text>
          </TouchableOpacity>
        </View>

        <ModalAtividadesFisicas
          visible={modalAtividadesFisicasVisible}
          onClose={() => setModalAtividadesFisicasVisible(false)}
        />

        <ModalConsumoAgua
          visible={modalConsumoAguaVisible}
          onClose={() => setModalConsumoAguaVisible(false)}
        />

        <ModalMedicamentos
          visible={modalMedicamentosVisible}
          onClose={() => setModalMedicamentosVisible(false)}
        />

        <ModalMetas
          visible={modalMetasVisible}
          onClose={() => setModalMetasVisible(false)}
        />
      </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    width: '90%', // Define uma largura responsiva
    paddingVertical: height * 0.05,
  },
  button: {
    backgroundColor: '#00A36C',
    paddingVertical: height * 0.02, // Ajuste vertical responsivo
    paddingHorizontal: width * 0.05, // Ajuste horizontal responsivo
    borderRadius: 5,
    marginVertical: height * 0.01,
    alignItems: 'center',
    elevation: 5, // Elevação para Android
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.35, // Opacidade da sombra
    shadowRadius: 4.5, // Raio de difusão da sombra

  },
  buttonText: {
    color: '#ffffff',
    fontSize: width * 0.01, 
    marginTop: height * 0.01,
  },
  buttonDescription: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: width * 0.04, 
    marginTop: height * 0.005,
    textAlign: 'center',
  },
});
