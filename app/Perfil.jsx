import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function TelaPerfil() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }} // Substitua com a URL da imagem desejada
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.name}>João Silva</Text>
        <Text style={styles.age}>Idade: 30 anos</Text>
      </View>

      <View style={styles.dashboard}>
        <Text style={styles.dashboardTitle}>Atividades Físicas</Text>
        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Passos</Text>
          <Text style={styles.activityValue}>10,235</Text>
        </View>
        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Calorias Queimadas</Text>
          <Text style={styles.activityValue}>850 kcal</Text>
        </View>
        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Distância Percorrida</Text>
          <Text style={styles.activityValue}>8.2 km</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileCard: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: '5%',
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: '#f0f0f0',
    borderRadius: 80,
    padding: 2,
    backgroundColor: '#ffffff',
    marginBottom: 15,
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  age: {
    fontSize: 20,
    color: '#666',
  },
  dashboard: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: '5%',
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  activityCard: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f7f7f7',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityTitle: {
    fontSize: 18,
    color: '#555',
  },
  activityValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
});
