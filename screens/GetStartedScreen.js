import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

export default function GetStartedScreen({ navigation }) {
  const [step, setStep] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Swiper showsButtons={false} style={styles.slider} onIndexChanged={(index) => setStep(index)} index={step}>
          <View style={styles.slide1}>
            <Image source={require('../assets/images/step-1.png')} style={styles.slideImage} />
            <Text style={styles.text}>Ճանաչիր Բույսեր</Text>
            <Text style={styles.descriptionText}>Դու կարող ես իմանալ բույսեր, որոնք դու չգիտես, քո տեսախցիկի միջոցով</Text>
          </View>
          <View style={styles.slide2}>
            <Image source={require('../assets/images/step-2.png')} style={styles.slideImage} />
            <Text style={styles.text}>Իմացիր Բույսերի Բազում Տեսակներ</Text>
            <Text style={styles.descriptionText}>Դու կարող ես իմանալ բույսեր, որոնք դու չգիտես, քո տեսախցիկի միջոցով</Text>
          </View>
          <View style={styles.slide3}>
            <Image source={require('../assets/images/step-3.png')} style={styles.slideImage} />
            <Text style={styles.text}>Կարդա Հոդվածներ Բույսերի Մասին</Text>
            <Text style={styles.descriptionText}>Դու կարող ես իմանալ բույսեր, որոնք դու չգիտես, քո տեսախցիկի միջոցով</Text>
          </View>
        </Swiper>
        <TouchableOpacity style={styles.button} onPress={() => {step === 2 ? navigation.navigate('Home') : setStep(step + 1)}}>
          <Text style={styles.buttonText}>
            {step < 2 ? 'Հաջորդը' : 'Սկսել'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

GetStartedScreen.navigationOptions = {
  header: null,
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: '30%',
    alignItems: 'center',
  },
  slider: {
    height: 400
  },
  slide1: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
  },
  text: {
    height: 30,
    color: '#35415a',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptionText: {
    height: 50,
    color: '#9ea1aa',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#8ef5d5',
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  }
});
