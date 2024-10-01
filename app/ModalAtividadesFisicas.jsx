import React from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

export default function ModalAtividadesFisicas({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContent}>
        <Text>Atividades Físicas</Text>
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
});
