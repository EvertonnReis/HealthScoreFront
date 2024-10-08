import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InputConsumoAgua = ({ quantidadeAgua, setQuantidadeAgua, metaAgua, progresso, setProgresso, onSave }) => {
  const handleSalvarConsumoAgua = () => {
    const quantidadeMl = parseInt(quantidadeAgua, 10);
    if (!isNaN(quantidadeMl) && quantidadeMl > 0) {
      setProgresso((prevProgresso) => prevProgresso + quantidadeMl);
      console.log('Quantidade de água ingerida (ml):', quantidadeMl);
      console.log('Progresso atual (ml):', progresso + quantidadeMl);
      onSave(); 
    } else {
      alert('Por favor, insira uma quantidade válida de água.');
    }
  };

  return (
    <View>
      <Text style={styles.label}>Quantidade de Água Ingerida (ml):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 500"
        keyboardType="numeric"
        value={quantidadeAgua}
        onChangeText={setQuantidadeAgua}
      />
      <Text style={styles.label}>Meta de Consumo Diário: {metaAgua} ml</Text>
      <Text style={styles.progressoText}>
        Progresso Atual: {progresso} ml / {metaAgua} ml
      </Text>
      <TouchableOpacity style={styles.saveButton} onPress={handleSalvarConsumoAgua}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  progressoText: {
    fontSize: 16,
    color: (progresso) => (progresso >= metaAgua ? '#00cc00' : '#ff6600'), 
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#004d00', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: 250,
    left:8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InputConsumoAgua;
