import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ModalAtividadesFisicas({ visible, onClose }) {
  const [tipoAtividade, setTipoAtividade] = useState('');
  const [dataHorario, setDataHorario] = useState(new Date());
  const [passosCalorias, setPassosCalorias] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const handleSave = () => {
    // Lógica para salvar os dados
    console.log('Tipo de Atividade:', tipoAtividade);
    console.log('Data e Horário:', dataHorario.toISOString());
    console.log('Passos/Calorias:', passosCalorias);
    onClose(); // Fecha o modal após salvar
  };

  const onChangeDateTime = (event, selectedDate) => {
    const currentDate = selectedDate || dataHorario;
    setShowPicker(false); // Oculta o picker após a seleção
    setDataHorario(currentDate);
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>Registro de Atividades Físicas</Text>

        <TextInput
          style={styles.input}
          placeholder="Tipo de Atividade (Ex: Corrida)"
          value={tipoAtividade}
          onChangeText={setTipoAtividade}
        />

        <TextInput
          style={styles.input}
          placeholder="Data e Horário"
          value={dataHorario.toISOString().replace('T', ' ').substring(0, 16)}
          onFocus={() => setShowPicker(true)} // Abre o DateTimePicker ao focar
        />

        {/* Exibe o DateTimePicker para selecionar data e hora */}
        {showPicker && (
          <DateTimePicker
            value={dataHorario}
            mode="datetime"
            display="default"
            onChange={onChangeDateTime}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Passos/Calorias (Ex: 5000 passos, 300 cal)"
          value={passosCalorias}
          onChangeText={setPassosCalorias}
        />

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
