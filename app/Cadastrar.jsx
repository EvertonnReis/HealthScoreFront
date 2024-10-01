import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import ModalAtividadesFisicas from './ModalAtividadesFisicas'; // Modal de Atividades Físicas
import ModalConsumoAgua from './ModalConsumoAgua'; // Modal de Consumo de Água
import ModalMedicamentos from './ModalMedicamentos'; // Modal de Medicamentos

export default function Cadastrar() {
  const [modalAtividadesFisicasVisible, setModalAtividadesFisicasVisible] = useState(false);
  const [modalConsumoAguaVisible, setModalConsumoAguaVisible] = useState(false);
  const [modalMedicamentosVisible, setModalMedicamentosVisible] = useState(false);

  return (
    <View style={styles.cta}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalAtividadesFisicasVisible(true)}
      >
        <Text style={styles.buttonText}>Cadastrar Atividades</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalConsumoAguaVisible(true)}
      >
        <Text style={styles.buttonText}>Cadastrar Consumo de Água</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalMedicamentosVisible(true)}
      >
        <Text style={styles.buttonText}>Cadastrar Horas de Sono</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        }}
      >
        <Text style={styles.buttonText}>Cadastrar Metas</Text>
      </TouchableOpacity>

      
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
  },
});
