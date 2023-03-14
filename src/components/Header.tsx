import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import close from '../assets/svg/close';
import {REGISTRATION_HEADER} from '../constants/texts';
import {Svg} from '../elements/Svg';

interface IHeader {
  onPress?: () => void;
}

export const Header = ({onPress}: IHeader) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Svg xml={close} />
      </TouchableOpacity>
      <Text style={styles.headerTextStyle}>{REGISTRATION_HEADER}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextStyle: {
    fontFamily: 'Manrope',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginHorizontal: 17,
  },
});
