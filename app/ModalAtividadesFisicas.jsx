import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons'; 

export default function ModalAtividadesFisicas({ visible, onClose }) {
  const [tipoAtividade, setTipoAtividade] = useState('');
  const [dataHorario, setDataHorario] = useState(new Date());
  const [passosCalorias, setPassosCalorias] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const handleSave = () => {
    console.log('Tipo de Atividade:', tipoAtividade);
    console.log('Data e Horário:', dataHorario.toISOString());
    console.log('Passos/Calorias:', passosCalorias);
    onClose(); 
  };

  const onChangeDateTime = (event, selectedDate) => {
    const currentDate = selectedDate || dataHorario;
    setShowPicker(Platform.OS === 'ios'); 
    setDataHorario(currentDate);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Registro de Atividades Físicas</Text>

          <View style={styles.inputGroup}>
            <Ionicons name="fitness-outline" size={24} color="#004d00" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Tipo de Atividade (Ex: Corrida)"
              value={tipoAtividade}
              onChangeText={setTipoAtividade}
            />
          </View>

          <View style={styles.inputGroup}>
            <Ionicons name="calendar-outline" size={24} color="#004d00" style={styles.icon} />
            <TouchableOpacity onPress={() => setShowPicker(true)}>
              <TextInput
                style={styles.input}
                placeholder="Data e Horário"
                value={dataHorario.toISOString().replace('T', ' ').substring(0, 16)}
                editable={false} 
              />
            </TouchableOpacity>
          </View>

          {showPicker && (
            <DateTimePicker
              value={dataHorario}
              mode="datetime"
              display="default"
              onChange={onChangeDateTime}
              onClose={() => setShowPicker(false)} 
            />
          )}

          <View style={styles.inputGroup}>
            <Ionicons name="flame-outline" size={24} color="#004d00" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Passos/Calorias (Ex: 5000 passos, 300 cal)"
              value={passosCalorias}
              onChangeText={setPassosCalorias}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonClose} onPress={onClose}>
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontFamily: 'Horta',
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#004d00',
    textAlign: 'center',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonSave: {
    backgroundColor: '#004d00',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  buttonClose: {
    backgroundColor: '#ff3b30',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
