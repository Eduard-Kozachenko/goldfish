import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import done from '../assets/svg/done';
import {Svg} from '../elements/Svg';

export const FormInput = ({
  label,
  input,
  meta: {touched, error},
  ...props
}: any) => {
  const isValible = touched && error;
  const isSuccessfully = touched && !error;
  const inputRef = useRef(null);
  const isFocused = inputRef?.current?.isFocused();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.labelStyle}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focusedStyle,
          isValible && !isFocused && styles.errorStyleContainer,
          isSuccessfully && !isFocused && styles.successfullyStyleContainer,
        ]}>
        <TextInput
          {...input}
          {...props}
          placeholderTextColor="#A4A4A4"
          style={styles.inputStyle}
          ref={inputRef}
        />
        {isValible && !isFocused && (
          <Text style={styles.errorStyle}>{error}</Text>
        )}
        {isSuccessfully && !isFocused && <Svg xml={done} />}
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
    flex: 3,
    paddingVertical: 14.5,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    borderColor: '#CACACC',
    backgroundColor: '#F7F7F7',
  },
  inputStyle: {
    flex: 1,
  },
  errorStyleContainer: {
    borderColor: '#FA4D23',
    backgroundColor: '#ffffff',
  },
  errorStyle: {
    color: '#FA4D23',
  },
  successfullyStyleContainer: {
    borderColor: '#00C56D',
    backgroundColor: '#ffffff',
  },
  focusedStyle: {
    borderColor: '#1E63EE',
    backgroundColor: '#ffffff',
  },
});
