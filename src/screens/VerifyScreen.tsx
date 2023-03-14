import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollContainer} from '../components/ScrollContainer';
import {NEXT} from '../constants/texts';
import {CustomButton} from '../elements/CustomButton';
import {TextButton} from '../elements/TextButton';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

export const VerifyScreen = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const handleSubmit = useCallback(() => {}, []);
  return (
    <ScrollContainer>
      <Text style={styles.header}>Введите код авторизации</Text>
      <View style={styles.codeConteiner}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <TextButton
        label={'Запросить код авторизации'}
        textStyle={styles.textButtonStyle}
      />
      <CustomButton
        type={'secondary'}
        label={NEXT}
        onPress={handleSubmit}
        style={styles.nextButton}
      />
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#000000',
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 21,
    lineHeight: 28,
    textAlign: 'center',
  },
  codeConteiner: {
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  textButtonStyle: {
    color: '#1E63EE',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
  codeFieldRoot: {},
  cell: {
    borderWidth: 1,
    borderColor: '#00000030',
    borderRadius: 8,
    width: 40,
    height: 48,
    fontSize: 24,
    lineHeight: 44,
    textAlign: 'center',
    backgroundColor: '#F7F7F7',
  },
  focusCell: {
    borderColor: '#1E63EE',
    backgroundColor: '#FFFFFF',
  },
  nextButton: {
    marginVertical: 16,
  },
});
