import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { ProgressBar, Card, Title, Avatar } from 'react-native-paper';

export default function Inicial() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      {/* Top Navigation */}
      <View style={styles.topNav}>
        <Text style={styles.titleLogo}><Text style={styles.bold}>Health</Text>Score</Text>
        <TouchableOpacity style={styles.cartButton}>
          <FontAwesome5 name="dumbbell" size={24} color="#00A36C" />  
        </TouchableOpacity>
      </View>

      {/* Image Carousel */}
      
      <Swiper style={styles.carousel} showsPagination={false}  loop autoplay={true} autoplayTimeout={4.5} >
        <View style={styles.slide}>
        <Image
              source={require('../assets/dicas.png')}
              style={{ width: 300, height: 300 }}
            />
        </View>
        <View style={styles.slide}>
        <Image
              source={require('../assets/agua.png')}
              style={{ width: 300, height: 300 }}
            />
        </View>
        <View style={styles.slide}>
        <Image
              source={require('../assets/exercicio.png')}
              style={{ width: 300, height: 300 }}
            />
        </View>
        <View style={styles.slide}>
        <Image
              source={require('../assets/alimentacao.png')}
              style={{ width: 300, height: 300 }}
            />
        </View>
        <View style={styles.slide}>
        <Image
              source={require('../assets/sono.png')}
              style={{ width: 300, height: 300 }}
            />
        </View>
      </Swiper>

      <View style={styles.cta}>
        {/* <Text style={styles.sectionTitle}>Redes Sociais</Text> */}
        <View style={styles.socialMediaButtons}>
          <TouchableOpacity>
            <FontAwesome name="whatsapp" size={24} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="instagram" size={24} color="green" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="facebook" size={24} color="green" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Cards Section */}
      <View style={styles.cardsContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Meta de Corrida</Title>
            <Text style={styles.tipText}>Completar 5km</Text>
            <ProgressBar style={styles.progressBar} progress={0.5} color={'#8ee669'} />
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Consumo de Proteínas</Title>
            <Text style={styles.tipText}>80g / 100g</Text>
            <ProgressBar style={styles.progressBar} progress={0.8} color={'#8ee669'} />
          </Card.Content>
        </Card>
      </View>

      {/* Activity Section */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Atividades Recentes</Text>
        <View style={styles.activity}>
          <Avatar.Icon size={48} icon="run" style={styles.activityIcon} />
          <Text style={styles.tipText}>Corrida - 30 min - 300 cal</Text>
        </View>
        <View style={styles.activity}>
          <Avatar.Icon size={48} icon="bicycle" style={styles.activityIcon} />
          <Text style={styles.tipText}>Ciclismo - 45 min - 500 cal</Text>
        </View>
      </View>

      {/* Tips Section */}
      {/* <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Dicas de Saúde</Text>
        <View style={styles.tipsContainer}>
          <View style={styles.tipCard}>
            <MaterialCommunityIcons name="water" size={40} color="#8ee669" style={styles.tipIcon} />
            <Text style={styles.tipTitle}>Hidrate-se</Text>
            <Text style={styles.tipText}>Beba pelo menos 8 copos de água por dia.</Text>
          </View>
          <View style={styles.tipCard}>
            <MaterialCommunityIcons name="run" size={40} color="#8ee669" style={styles.tipIcon} />
            <Text style={styles.tipTitle}>Exercite-se Regularmente</Text>
            <Text style={styles.tipText}>Faça 30 minutos de exercício diário.</Text>
          </View>
          <View style={styles.tipCard}>
            <MaterialCommunityIcons name="food-apple" size={40} color="#8ee669" style={styles.tipIcon} />
            <Text style={styles.tipTitle}>Alimente-se Bem</Text>
            <Text style={styles.tipText}>Mantenha uma dieta balanceada.</Text>
          </View>
        </View>
      </View> */}   
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
  },
  topNav: {
    width: '100%',
    height: 60,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  titleLogo: {
    fontSize: 24,
    color: '#00A36C',
  },
  bold: {
    fontWeight: 'bold',
  },
  cartButton: {
    padding: 10,
  },
  carousel: {
    height: 300,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#00A36C',
    borderRadius: 10,
    padding: 15,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  progressBar: {
    marginTop: 10,
  },
  activitySection: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  activity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#00A36C',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  activityIcon: {
    marginRight: 10,
    backgroundColor: '#8ee669',
  },
  tipsSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  tipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tipCard: {
    backgroundColor: '#00A36C',
    borderRadius: 10,
    padding: 15,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 10,
  },
  tipIcon: {
    marginBottom: 10,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 5,
  },
  tipText: {
    textAlign: 'center',
    color: '#ffffff',
  },
  cta: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004d00',
    marginBottom: 10,
  },
  socialMediaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginTop: 20,
  },
});
