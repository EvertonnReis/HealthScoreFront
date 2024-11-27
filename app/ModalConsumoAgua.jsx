import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputConsumoAgua from './InputConsumoAgua'; 
import { Ionicons } from '@expo/vector-icons'; 
import getEnvVars from '../config';

const { apiUrl } = getEnvVars();

export default function ModalConsumoAgua({ visible, onClose }) {
  const [dataConsumo, setDataConsumo] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [quantidadeAgua, setQuantidadeAgua] = useState(''); 
  const [metaAgua, setMetaAgua] = useState(2000); 
  const [progresso, setProgresso] = useState(0);

  // const handleSave = async () => {
  //   try {
  //     const response = await axios.post(`${apiUrl}/atividades`, {
  //       tipoAtividade,
  //       dataHorario: dataHorario.toISOString(),
  //       passosCalorias,
  //     });

  //     if (response.status === 200) {
  //       console.log('Atividade salva com sucesso:', response.data);
  //       alert('Atividade registrada com sucesso!');
  //       onClose();
  //     } else {
  //       console.error('Erro ao salvar atividade:', response.status);
  //       alert('Ocorreu um erro ao registrar a atividade.');
  //     }
  //   } catch (error) {
  //     console.error('Erro na requisição:', error);
  //     alert('Não foi possível conectar ao servidor.');
  //   }
  // };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dataConsumo;
    setShowDatePicker(Platform.OS === 'ios');
    setDataConsumo(currentDate);
  };

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setDataConsumo(selectedDate);
    }
    setShowDatePicker(false);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Registrar Consumo de Água</Text>

          <Text style={styles.label}>Data de Consumo:</Text>
          <View style={styles.inputGroup}>
            <Ionicons name="calendar-outline" size={24} color="#004d00" style={styles.icon} />
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={styles.input}
                placeholder="Data de Consumo"
                value={dataConsumo.toLocaleString('pt-BR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                editable={false}
              />
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={dataConsumo}
                mode="datetime"
                display="default"
                onChange={onChange}
                locale="pt-BR"
              />
            )}
          </View>

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
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    flex: 1,
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
    width: 250,
    flex: 1,
    marginLeft: 10, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
