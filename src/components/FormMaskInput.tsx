import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaskInput from 'react-native-mask-input';
import {maskPhone} from '../constants/mask';

export const FormMaskInput = ({label, input, meta: {}, ...props}: any) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={[styles.inputContainer]}>
        <MaskInput
          {...input}
          {...props}
          mask={maskPhone}
          keyboardType="phone-pad"
          placeholderTextColor="#A4A4A4"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  labelStyle: {
    flex: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CACACC',
    flex: 3,
    paddingVertical: 14.5,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    marginLeft: 5,
  },
  inputStyle: {
    flex: 1,
  },
});
