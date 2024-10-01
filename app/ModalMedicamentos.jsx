import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

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
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Registro de Medicamentos</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome do Medicamento"
          value={nomeMedicamento}
          onChangeText={setNomeMedicamento}
        />

        <TextInput
          style={styles.input}
          placeholder="Dosagem (ex: 500mg)"
          value={dosagem}
          onChangeText={setDosagem}
        />

        <TextInput
          style={styles.input}
          placeholder="Horário Registrado"
          value={horarioRegistrado.toISOString().replace('T', ' ').substring(0, 16)}
          onFocus={() => setShowPicker(true)} // Abre o DateTimePicker ao focar
        />

        {showPicker && (
          <DateTimePicker
            value={horarioRegistrado}
            mode="datetime"
            display="default"
            onChange={onChangeDateTime}
          />
        )}

        <View style={styles.buttonContainer}>
          <Button title="Salvar" onPress={handleSave} />
          <Button title="Fechar" onPress={onClose} color="red" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
