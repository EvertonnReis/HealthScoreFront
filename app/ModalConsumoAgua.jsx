import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputConsumoAgua from './InputConsumoAgua'; 

export default function ModalConsumoAgua({ visible, onClose }) {
  const [dataConsumo, setDataConsumo] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [quantidadeAgua, setQuantidadeAgua] = useState(''); 
  const [metaAgua, setMetaAgua] = useState(2000); 
  const [progresso, setProgresso] = useState(0);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dataConsumo;
    setShowDatePicker(Platform.OS === 'ios');
    setDataConsumo(currentDate);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Registrar Consumo de Água</Text>

          <Text style={styles.label}>Data de Consumo:</Text>
          <TextInput
            style={styles.input}
            value={dataConsumo.toLocaleDateString()}
            editable={false} 
          />
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.dateButtonText}>Selecionar Data</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={dataConsumo}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}

          <InputConsumoAgua
            quantidadeAgua={quantidadeAgua}
            setQuantidadeAgua={setQuantidadeAgua}
            metaAgua={metaAgua}
            progresso={progresso}
            setProgresso={setProgresso}
            onSave={onClose} 
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10, 
  },
  modalTitle: {
    fontFamily: 'Horta',

    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#004d00', 
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
  dateButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: 250,
    marginTop: 16,
  },
  closeButton: {
    backgroundColor: '#ff3b30', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    width:250,
    flex: 1,
    marginLeft: 10, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
