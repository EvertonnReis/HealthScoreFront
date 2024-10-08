import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import ModalAtividadesFisicas from './ModalAtividadesFisicas'; // Modal de Atividades Físicas
import ModalConsumoAgua from './ModalConsumoAgua'; // Modal de Consumo de Água
import ModalMedicamentos from './ModalMedicamentos'; // Modal de Medicamentos
import ModalMetas from './ModalMetas'; // Modal de Metas

import Icon from 'react-native-vector-icons/FontAwesome'; 

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
            <Text style={styles.buttonText}>Atividades Físicas</Text>
            <Text style={styles.buttonDescription}>Registre suas atividades diárias.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalConsumoAguaVisible(true)}
          >
            <Icon name="tint" size={24} color="#ffffff" />
            <Text style={styles.buttonText}>Consumo de Água</Text>
            <Text style={styles.buttonDescription}>Monitore sua hidratação diária.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalMedicamentosVisible(true)}
          >
            <Icon name="medkit" size={24} color="#ffffff" />
            <Text style={styles.buttonText}>Medicamentos </Text>
            <Text style={styles.buttonDescription}>Acompanhe sua medicação.</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalMetasVisible(true)}
              // Adicione a ação para cadastrar metas}}
          >
            <Icon name="star" size={24} color="#ffffff" />
            <Text style={styles.buttonText}>Cadastrar Metas</Text>
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
    paddingVertical: 20,
  },
  image:{
    width:412,
    height:914,
  }, 

  buttonContainer: {
    
    padding:130,
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#004d00',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    fontFamily: 'Horta',

    color: '#ffffff',
    fontSize: 28,
    marginTop: 5,
  },
  buttonDescription: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 2,
    textAlign: 'center',
  },
});
