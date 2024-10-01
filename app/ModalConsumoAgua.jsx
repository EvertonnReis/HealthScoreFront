import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ModalConsumoAgua({ visible, onClose }) {
  const [dataConsumo, setDataConsumo] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSalvarConsumoAgua = () => {
    // Lógica para salvar o consumo de água
    onClose();
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dataConsumo;
    setShowDatePicker(Platform.OS === 'ios');
    setDataConsumo(currentDate);
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Registrar Consumo de Água</Text>

        <Text>Data de Consumo:</Text>
        <Button
          onPress={() => setShowDatePicker(true)}
          title="Selecionar Data"
        />

        {showDatePicker && (
          <DateTimePicker
            value={dataConsumo}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        <Text>Data selecionada: {dataConsumo.toLocaleDateString()}</Text>

        <Button title="Salvar" onPress={handleSalvarConsumoAgua} />
        <Button title="Fechar" onPress={onClose} />
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
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
  },
});
