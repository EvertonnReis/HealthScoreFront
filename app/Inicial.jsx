import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, StatusBar} from 'react-native';
import { ProgressBar, colors, Avatar, Card, Title, Button} from 'react-native-paper';
import { FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons'; // Importa os ícones FontAwesome


export default function Inicial() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.carousel}>
        <Image
          source={require('../assets/Health.gif')}
          style={styles.carouselImage}
        />
      </View>

      <View style={styles.cta}>
        <Text style={styles.title}><strong>SEJA O SEU MELHOR!</strong></Text>
        <Text style={styles.description}>
          HealthScore, estamos aqui para te animar a 
        </Text>
        <Text  style={styles.description2}>
          cada passo do seu caminho!
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => { /* Lógica para cadastrar metas */ }}>
          <Text style={styles.buttonText}>Cadastrar Metas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { /* Lógica para cadastrar atividades */ }}>
          <Text style={styles.buttonText}>Cadastrar Atividades</Text>
        </TouchableOpacity>

        {/* Botões de Mídia Social */}
        <View style={styles.socialMediaButtons}>
          <TouchableOpacity>
            <FontAwesome name="whatsapp" size={24} color="Grenn" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="instagram" size={24} color="Grenn" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="facebook" size={24} color="Grenn" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Dicas de Saúde</Text>
        <View style={styles.tipsContainer}>
          <View style={styles.tipCard}>
            <MaterialCommunityIcons name="water" size={40} color="#004d00" style={styles.tipIcon} />
            <Text style={styles.tipTitle}>Hidrate-se</Text>
            <Text style={styles.tipText}>Beba pelo menos 8 copos de água por dia para manter-se hidratado e energizado.</Text>
          </View>

          <View style={styles.tipCard}>
            <MaterialCommunityIcons name="run" size={40} color="#004d00" style={styles.tipIcon} />
            <Text style={styles.tipTitle}>Exercite-se Regularmente</Text>
            <Text style={styles.tipText}>Inclua pelo menos 30 minutos de atividade física em sua rotina diária para melhorar sua saúde.</Text>
          </View>

          <View style={styles.tipCard}>
            <MaterialCommunityIcons name="food-apple" size={40} color="#004d00" style={styles.tipIcon} />
            <Text style={styles.tipTitle}>Alimente-se Bem</Text>
            <Text style={styles.tipText}>Mantenha uma dieta balanceada rica em frutas, vegetais e proteínas para obter todos os nutrientes necessários.</Text>
          </View>
        </View>
      </View>
    

      <View style={styles.testimonialsSection}>
        <Text style={styles.sectionTitle}>Depoimentos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.testimonial}>
            <FontAwesome name="star" size={24} color="green" />
            <Text style={styles.testimonialText}>“O app me ajudou muito a manter uma rotina de exercícios.” - Maria</Text>
          </View>
          <View style={styles.testimonial}>
            <FontAwesome name="star" size={24} color="green" />
            <Text style={styles.testimonialText}>“O app me ajudou muito a manter uma rotina de exercícios.” - Maria</Text>
          </View>
          <View style={styles.testimonial}>
            <FontAwesome name="star" size={24} color="green" />
            <Text style={styles.testimonialText}>“O app me ajudou muito a manter uma rotina de exercícios.” - Maria</Text>
          </View>
          <View style={styles.testimonial}>
            <FontAwesome name="star" size={24} color="green" />
            <Text style={styles.testimonialText}>“O app me ajudou muito a manter uma rotina de exercícios.” - Maria</Text>
          </View>
          <View style={styles.testimonial}>
            <FontAwesome name="star" size={24} color="green" />
            <Text style={styles.testimonialText}>“Sinto-me muito mais motivada!” - Gabriela</Text>
          </View>
        </ScrollView>
      </View>
      

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
    backgroundColor: '#e0f7fa',
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
    color: '#004d00',
    marginBottom: 5,
  },
  tipText: {
    textAlign: 'center',
    color: '#333',
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
