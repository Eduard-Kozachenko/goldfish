import React, {PropsWithChildren} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
  TextStyle,
} from 'react-native';

interface IButton {
  label: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const TextButton = ({
  label,
  style,
  textStyle,
  ...props
}: PropsWithChildren<TouchableOpacityProps & IButton>) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Manrope',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 21,
    lineHeight: 28,
  },
});
