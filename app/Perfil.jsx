import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ProgressBar, Avatar, Card, Title } from 'react-native-paper';

export default function Perfil() {

  const logout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  return (
    <ScrollView style={styles.container}>
      {/* Perfil */}
      <View style={styles.profileSection}>
        <Avatar.Image size={80} source={{ uri: 'https://example.com/profile.jpg' }} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Lucas Gabriel</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsButtonText}>Configurações</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Progresso */}
      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>Progresso da Semana</Text>
        <ProgressBar progress={0.7} color={'#004d00'} style={styles.progressBar} />
      </View>

      {/* Cartões */}
      <View style={styles.cardsContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Title>Meta de Corrida</Title>
            <Text>Completar 5km</Text>
            <ProgressBar progress={0.5} color={'#004d00'} />
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Consumo de Proteínas</Title>
            <Text>80g / 100g</Text>
            <ProgressBar progress={0.8} color={'#004d00'} />
          </Card.Content>
        </Card>
      </View>

      {/* Últimas Atividades */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Últimas Atividades</Text>
        <View style={styles.activity}>
          <Avatar.Icon size={48} icon="run" style={styles.activityIcon} />
          <Text>Corrida - 30 min - 300 cal</Text>
        </View>
        <View style={styles.activity}>
          <Avatar.Icon size={48} icon="bicycle" style={styles.activityIcon} />
          <Text>Ciclismo - 45 min - 500 cal</Text>
        </View>
      </View>

      {/* dados da conta */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Conta</Text>
<<<<<<< HEAD
        <View style={styles.activity}>
          <Avatar.Icon size={48} icon="logout" style={styles.activityIcon} />
          <Text>LogOut</Text>
        </View>
=======
        <TouchableOpacity onPress={logout}>
          <View style={styles.activity}>
            <Avatar.Icon size={48} icon="logout" style={styles.activityIcon} />
            <Text>Trocar de conta</Text>
          </View>
        </TouchableOpacity>
>>>>>>> 78023ef079c25803ef8fdbf62e475a9460b1eef0
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d00',
  },
  settingsButton: {
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#004d00',
    borderRadius: 5,
  },
  settingsButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  progressSection: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    padding: 10,
  },
  activitySection: {
    marginTop: 20,
  },
  activity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  activityIcon: {
    marginRight: 10,
    backgroundColor: '#004d00',
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
