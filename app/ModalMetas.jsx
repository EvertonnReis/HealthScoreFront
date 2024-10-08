import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ModalMetas({ visible, onClose }) {
  const [meta, setMeta] = useState('');
  const [pontos, setPontos] = useState(0);
  const [metas, setMetas] = useState([]);
  const [alertaVisible, setAlertaVisible] = useState(false);
  const [recompensaVisible, setRecompensaVisible] = useState(false);

  useEffect(() => {
    const metasNaoConcluidas = metas.filter(item => !item.concluida);
    setAlertaVisible(metasNaoConcluidas.length >= 3);

    if (metas.length > 0 && metas.every(item => item.concluida)) {
      setRecompensaVisible(true);
      setPontos(prev => prev + 50); 
    } else {
      setRecompensaVisible(false);
    }
  }, [metas]);

  const adicionarMeta = () => {
    if (meta.trim() === '' || alertaVisible) {
      return; 
    }

    salvarMeta();
  };

  const salvarMeta = () => {
    setMetas([...metas, { descricao: meta, concluida: false }]);
    setMeta('');
  };

  const concluirMeta = (index) => {
    const novasMetas = metas.map((item, idx) => {
      if (idx === index) {
        const novaMeta = { ...item, concluida: !item.concluida };
        setPontos(prevPontos => novaMeta.concluida ? prevPontos + 10 : prevPontos - 10); 
        return novaMeta;
      }
      return item;
    });
    setMetas(novasMetas);
  };

  const calcularPorcentagem = () => {
    const totalMetas = metas.length;
    const metasConcluidas = metas.filter(item => item.concluida).length;
    return totalMetas > 0 ? (metasConcluidas / totalMetas) * 100 : 0;
  };

  const fecharRecompensa = () => {
    setRecompensaVisible(false);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Cadastrar Metas Semanais</Text>

          {alertaVisible && (
            <View style={styles.alertContainer}>
              <Text style={styles.alertText}>Você tem {metas.filter(item => !item.concluida).length} metas não concluídas!</Text>
              <Text style={styles.alertSubText}>Finalize as metas pendentes antes de iniiciar uma nova!</Text>
            </View>
          )}

          <View style={styles.inputContainer}>
            <Icon name="pencil" size={20} color="#004d00" />
            <TextInput
              style={styles.input}
              placeholder="Digite sua meta (Ex: Caminhar 30 min)"
              value={meta}
              onChangeText={setMeta}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.saveButton} onPress={adicionarMeta}>
              <Text style={styles.buttonText}>Adicionar Meta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.pontosText}>Pontos Acumulados: {pontos}</Text>

          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${calcularPorcentagem()}%` }]} />
          </View>

          <Text style={styles.progressText}>{`${calcularPorcentagem().toFixed(0)}% Concluído`}</Text>

          <View style={styles.metasContainer}>
            {metas.map((item, index) => (
              <View key={index} style={styles.metaItem}>
                <Text style={[styles.metaText, item.concluida && styles.metaConcluida]}>
                  {item.descricao}
                </Text>
                <TouchableOpacity onPress={() => concluirMeta(index)}>
                  <Icon
                    name={item.concluida ? 'check-circle' : 'circle-o'}
                    size={25}
                    color={item.concluida ? '#004d00' : '#ccc'}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {recompensaVisible && (
            <View style={styles.recompensaContainer}>
              <Text style={styles.recompensaText}>Parabéns! Você completou todas as metas!</Text>
              <Text style={styles.recompensaSubText}>Sua recompensa: +50 pontos!</Text>
              <TouchableOpacity style={styles.recompensaButton} onPress={fecharRecompensa}>
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  alertContainer: {
    backgroundColor: '#ffeeba',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  alertText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#856404',
  },
  alertSubText: {
    fontSize: 14,
    color: '#856404',
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
  pontosText: {
    marginTop: 20,
    fontSize: 18,
    color: '#004d00',
    fontWeight: 'bold',
  },
  progressBarContainer: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0df',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 15,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#004d00',
  },
  progressText: {
    marginTop: 5,
    fontSize: 16,
    color: '#004d00',
  },
  metasContainer: {
    marginTop: 20,
    width: '100%',
  },
  metaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  metaText: {
    fontSize: 18,
 
},
recompensaText: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#155724',
  textAlign: 'center',
},
recompensaSubText: {
  fontSize: 16,
  color: '#155724',
  textAlign: 'center',
  marginBottom: 15,
},
recompensaButton: {
  backgroundColor: '#28a745',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
},
});
