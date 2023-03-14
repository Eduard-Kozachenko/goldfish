import React, {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface IProps {
  label: string;
  labelStyle?: TextStyle;
}

export const CustomButton = ({
  label,
  labelStyle,
  style,
  type = 'primary',
  ...props
}: PropsWithChildren<
  TouchableOpacityProps &
    IProps & {
      type?: 'primary' | 'secondary';
    }
>) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.buttonStyle,
        type === 'primary' && styles.primaryBtn,
        type === 'secondary' && styles.secondaryBtn,
        style,
      ]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
  },
  primaryBtn: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  secondaryBtn: {
    backgroundColor: '#1E63EE',
  },
  label: {
    fontFamily: 'Manrope',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
  },
});
