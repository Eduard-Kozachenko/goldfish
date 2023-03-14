import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Svg} from '../elements/Svg';
import logo from '../assets/svg/logoMedium';
import {TextButton} from '../elements/TextButton';
import {CustomButton} from '../elements/CustomButton';
import {DOCTOR, REGISTRATION, WELCOME} from '../constants/texts';
import {Props} from '../navigation/AuthStackNavigator';

export const WelcomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Svg xml={logo} />
        <Text style={styles.welcomeTextStyle}>{WELCOME}</Text>
        <TextButton
          label={REGISTRATION}
          onPress={() => console.log('reg')}
          style={styles.textButtonStyle}
        />
        <CustomButton
          label={DOCTOR}
          onPress={() => navigation.navigate('Registration')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1E63EE',
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeTextStyle: {
    fontFamily: 'Manrope',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 16,
  },
  textButtonStyle: {
    marginTop: 136,
    marginBottom: 16,
  },
});
