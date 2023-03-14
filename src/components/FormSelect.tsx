import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {SELECT} from '../constants/texts';

function FormSelect<T>({
  input,
  options,
  label,
  buttonLabel = SELECT,
  styleInput,
}: {
  input: {
    value: T;
    onChange: (value: T) => void;
  };
  options: string[];
  label: string;
  buttonLabel: string;
  styleInput?: ViewStyle;
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={[styles.inputContainer, styleInput]}>
        <SelectDropdown
          data={options}
          onSelect={({value}) => input?.onChange(value)}
          defaultValue={input?.value}
          buttonTextAfterSelection={(selectedItem, _) => {
            return selectedItem.label;
          }}
          rowTextForSelection={(item, _) => {
            return item.label;
          }}
          defaultButtonText={buttonLabel}
          buttonTextStyle={styles.selecTextStyle}
          buttonStyle={[styles.selectButtonStyle, styleInput]}
        />
      </View>
    </View>
  );
}

export default FormSelect;

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
    marginLeft: 5,
  },
  selecTextStyle: {
    fontSize: 15,
    textAlign: 'left',
    marginHorizontal: 0,
    color: '#A4A4A4',
  },
  selectButtonStyle: {
    backgroundColor: 'white',
    height: 17,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 0,
  },
});
