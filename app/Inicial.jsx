import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { ProgressBar, Card, Title, Avatar } from 'react-native-paper'; 

export default function Inicial() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.carousel}>
        <Image
          source={require('../assets/gif.gif')}
          style={styles.carouselImage}
        />
      </View>

      <View style={styles.cta}>
        <Text style={styles.title}>SEJA O SEU MELHOR!</Text>
        <Text style={styles.description}>
          HealthScore, estamos aqui para te animar a 
        </Text>
        <Text style={styles.description2}>
          cada passo do seu caminho!
        </Text>

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

      <View style={styles.cardsContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.tipText}>Meta de Corrida</Title>
            <Text style={styles.tipText1}>Completar 5km</Text>
            <ProgressBar style={styles.tipText1} progress={0.5} color={'#8ee669'} />
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.tipText}>Consumo de Proteínas</Title>
            <Text style={styles.tipText1}>80g / 100g</Text>
            <ProgressBar style={styles.tipText1} progress={0.8} color={'#8ee669'} />
          </Card.Content>
        </Card>
      </View>

      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Últimas Atividades</Text>
        <View style={styles.activity}>
          <Avatar.Icon size={48} icon="run" style={styles.activityIcon} />
          <Text style={styles.tipText}>Corrida - 30 min - 300 cal</Text>
        </View>
        <View style={styles.activity}>
          <Avatar.Icon size={48} icon="bicycle" style={styles.activityIcon} />
          <Text style={styles.tipText}>Ciclismo - 45 min - 500 cal</Text>
        </View>
      </View>

      <View style={styles.tipsSection}>
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
      </View>

      {/* <View style={styles.testimonialsSection}>
        <Text style={styles.sectionTitle}>Depoimentos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.testimonial}>
            <FontAwesome name="star" size={24} color="green" />
            <Text style={styles.testimonialText}>“O app me ajudou muito a manter uma rotina de exercícios.” - Maria</Text>
          </View>
          <View style={styles.testimonial}>
            <FontAwesome name="star" size={24} color="green" />
            <Text style={styles.testimonialText}>“Sinto-me muito mais motivada!” - Gabriela</Text>
          </View>
        </ScrollView>
      </View> */}

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Health Score</Text>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({

  carousel: {
    height: 250,   
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  cta: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    color: '#004d00',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    fontFamily: 'Horta',
    color: '#004d00',
    textAlign: 'center',
    marginVertical: 20,
  },
  
  description2: {
    fontSize: 20,
    fontFamily: 'Horta',
    color: '#004d00',
    marginTop:-1,
    textAlign: 'center',
    marginVertical: 20,
  },

  ctaButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  ctaButtonText: {
    color: '#004d00',
    fontSize: 20,
  },
  socialMediaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginTop: 20,
  },

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  
  card: {
    backgroundColor: '#004d00',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004d00',
    marginBottom: 5,
  },

  tipText1:{
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',
  },
  
  cardText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  
  cardProgressBar: {
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
    backgroundColor: '#004d00',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#fffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  
  activityIcon: {
    marginRight: 10,
    backgroundColor: '#8ee669',
  },
  
  activityText: {
    fontSize: 16,
    color: '#004d00',
  },
  
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
  },
  header: {
    backgroundColor: '#004d00', 
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff', 
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 40,
    color: '#b0b0b0', 
  },
  button: {
    backgroundColor: '#004d00', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 18,
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
    backgroundColor: '#004d00',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tipIcon: {
    marginBottom: 10,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
    textAlign: 'center'
  },
  tipText: {
    textAlign: 'center',
    color: '#ffffff',
  },


  testimonialsSection: {
    marginTop: 80,
    paddingHorizontal: 10, 
  },
  sectionTitle: {
    fontFamily: 'Horta',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004d00',
    marginBottom: 10,
  },

  testimonial: {
    backgroundColor: '#e0f7fa',
    padding: 20,
    borderRadius: 10,
    marginRight: 15,
    alignItems: 'center',
    width: 250,
  },
  testimonialText: {

    fontSize: 16,
    color: '#004d00',
    textAlign: 'center',
  },

  // profileButton: {
  //   backgroundColor: '#4caf50', 
  //   paddingVertical: 15,
  //   paddingHorizontal: 30,
  //   borderRadius: 5,
  //   marginVertical: 20,
  // },
  footer: {
    backgroundColor: '#ffffff', 
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#004d00', 
    fontSize: 16,
  },
});
