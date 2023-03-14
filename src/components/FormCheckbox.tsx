import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {Field} from 'react-final-form';
import {StyleSheet, Text, View} from 'react-native';
import {TextButton} from '../elements/TextButton';

const FormCheckboxComponent = () => {
  return (
    <CheckBox
      // value={toggleCheckBox}
      // onValueChange={newValue => setToggleCheckBox(newValue)}
      lineWidth={1.5}
      boxType={'square'}
      tintColor={'#BCC3D080'}
      onCheckColor={'#FFFFFF'}
      onFillColor={'#00C56D'}
      onTintColor={'#00C56D'}
      animationDuration={0.3}
      style={styles.checkbox}
    />
  );
};

export const FormCheckbox = ({
  name,
  textButtonLabel = '',
  text,
}: {
  name: string;
  textButtonLabel?: string;
  text?: string;
}) => {
  return (
    <View style={styles.checkboxContainer}>
      <Field name={name} component={FormCheckboxComponent} />
      <View style={styles.checkboxLabelContaner}>
        <TextButton
          label={textButtonLabel}
          style={styles.textButtonStyle}
          textStyle={styles.textButtonLabelStyle}
        />
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 11,
  },
  checkboxLabelContaner: {
    paddingHorizontal: 16,
  },
  textButtonStyle: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  textButtonLabelStyle: {
    color: '#1E63EE',
    fontSize: 13,
    lineHeight: 17,
    textDecorationLine: 'underline',
  },
});
