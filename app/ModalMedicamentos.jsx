import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ModalMedicamentos({ visible, onClose }) {
  const [nomeMedicamento, setNomeMedicamento] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [horarioRegistrado, setHorarioRegistrado] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleSave = () => {
    // Lógica para salvar os dados
    console.log('Medicamento:', nomeMedicamento);
    console.log('Dosagem:', dosagem);
    console.log('Horário Registrado:', horarioRegistrado.toISOString());
    onClose(); // Fecha o modal após salvar
  };

  const onChangeDateTime = (event, selectedDate) => {
    const currentDate = selectedDate || horarioRegistrado;
    setShowPicker(false); // Oculta o picker após a seleção
    setHorarioRegistrado(currentDate);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Registro de Medicamentos</Text>

          <View style={styles.inputContainer}>
            <Icon name="pencil" size={20} color="#004d00" />
            <TextInput
              style={styles.input}
              placeholder="Nome do Medicamento"
              value={nomeMedicamento}
              onChangeText={setNomeMedicamento}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="medkit" size={20} color="#004d00" />
            <TextInput
              style={styles.input}
              placeholder="Dosagem (ex: 500mg)"
              value={dosagem}
              onChangeText={setDosagem}
            />
          </View>

          <View style={styles.inputContainer}>
            <Icon name="clock-o" size={20} color="#004d00" />
            <TextInput
              style={styles.input}
              placeholder="Horário Registrado"
              value={horarioRegistrado.toISOString().replace('T', ' ').substring(0, 16)}
              onFocus={() => setShowPicker(true)} // Abre o DateTimePicker ao focar
            />
          </View>

          {showPicker && (
            <DateTimePicker
              value={horarioRegistrado}
              mode="datetime"
              display="default"
              onChange={onChangeDateTime}
            />
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#004d00',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  input: {
    height: 40,
    flex: 1,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#004d00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});
