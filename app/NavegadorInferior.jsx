import React, { useState, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicial from './Inicial'; 
import TelaPerfil from './Perfil';
import Cadastrar from './Cadastrar';
import { Ionicons } from '@expo/vector-icons';
import Popover from 'react-native-popover-view';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import ModalConsumoAgua from './ModalConsumoAgua';
import ModalMedicamentos from './ModalMedicamentos';
import ModalAtividadesFisicas from './ModalAtividadesFisicas';

const Tab = createBottomTabNavigator();

export default function NavegadorInferior() {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [modalConsumoAguaVisible, setModalConsumoAguaVisible] = useState(false);
  const [modalMedicamentosVisible, setModalMedicamentosVisible] = useState(false);
  const [modalAtividadesFisicasVisible, setModalAtividadesFisicasVisible] = useState(false);

  const popoverRef = useRef(null);

  const handleTabPress = (routeName) => {
    if (routeName === 'Cadastro') {
      setPopoverVisible(true);
    } else {
      setPopoverVisible(false);
    }
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Cadastro') {
              iconName = 'add';
            } else if (route.name === 'Perfil') {
              iconName = 'person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarButton: (props) => {
            const { onPress } = props;
            return (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  handleTabPress(route.name);
                  onPress();
                }}
                ref={popoverRef}
              />
            );
          }
        })}
      >
        <Tab.Screen name="Home" component={Inicial} />
        <Tab.Screen name="Cadastro" component={Cadastrar} />
        <Tab.Screen name="Perfil" component={TelaPerfil} />
      </Tab.Navigator>

      <Popover
        isVisible={popoverVisible}
        from={popoverRef.current}
        onRequestClose={() => setPopoverVisible(false)}
        placement="top"
      >
        <View style={styles.popoverContent}>
          <TouchableOpacity onPress={() => { setPopoverVisible(false); setModalConsumoAguaVisible(true); }}>
            <Text style={styles.option}>Consumo de Água</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setPopoverVisible(false); setModalMedicamentosVisible(true); }}>
            <Text style={styles.option}>Medicamentos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setPopoverVisible(false); setModalAtividadesFisicasVisible(true); }}>
            <Text style={styles.option}>Atividades Físicas</Text>
          </TouchableOpacity>
        </View>
      </Popover>

      {/* Integrando os Modais Externos */}
      <ModalConsumoAgua visible={modalConsumoAguaVisible} onClose={() => setModalConsumoAguaVisible(false)} />
      <ModalMedicamentos visible={modalMedicamentosVisible} onClose={() => setModalMedicamentosVisible(false)} />
      <ModalAtividadesFisicas visible={modalAtividadesFisicasVisible} onClose={() => setModalAtividadesFisicasVisible(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  popoverContent: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  option: {
    paddingVertical: 10,
  },
});
