import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import logoSmall from '../assets/svg/logoSmall';
import {Svg} from '../elements/Svg';
import {Header} from './Header';

export const ScrollContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.wrapper}>
      <SafeAreaView>
        <Header onPress={goBack} />
      </SafeAreaView>
      <View style={styles.headerFormWrapper}>
        <View style={styles.headerUnderLogo} />
        <Svg xml={logoSmall} />
      </View>
      <KeyboardAwareScrollView style={styles.formContainer}>
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#1E63EE',
  },
  headerFormWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 16,
  },
  headerUnderLogo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 17,
  },
});
