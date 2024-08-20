import React, { useState, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicial from './Inicial'; 
import TelaPerfil from './Perfil';
import Cadastrar from './Cadastrar';
import { Ionicons } from '@expo/vector-icons';
import Popover from 'react-native-popover-view';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function NavegadorInferior() {
  const [popoverVisible, setPopoverVisible] = useState(false);
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
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.option}>Opção 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.option}>Opção 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {  }}>
            <Text style={styles.option}>Opção 3</Text>
          </TouchableOpacity>
        </View>
      </Popover>
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
