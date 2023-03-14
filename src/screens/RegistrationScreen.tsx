import React from 'react';
import {Field, Form} from 'react-final-form';
import {StyleSheet, View} from 'react-native';
import {FormCheckbox} from '../components/FormCheckbox';
import {FormFilePicker} from '../components/FormFilePicker';
import {FormInput} from '../components/FormInput';
import {FormMaskInput} from '../components/FormMaskInput';
import FormSelect from '../components/FormSelect';
import {ScrollContainer} from '../components/ScrollContainer';
import {citiesMock, specializationsMock} from '../constants/mock';
import {NEXT, SPECIALIZATION} from '../constants/texts';
import {CustomButton} from '../elements/CustomButton';
import {Props} from '../navigation/AuthStackNavigator';
import {required} from '../utils/validations';

export const RegistrationScreen = ({navigation}: Props) => {
  return (
    <ScrollContainer>
      <Form
        onSubmit={(...form) => {
          console.log(form);
          navigation.navigate('Verify');
        }}
        render={({handleSubmit}) => (
          <View>
            <Field
              name={'last_name'}
              label={'Фамилия'}
              component={FormInput}
              placeholder={'Фамилия'}
              validate={required}
            />
            <Field
              name={'first_name'}
              label={'Имя'}
              component={FormInput}
              placeholder={'Имя'}
              validate={required}
            />
            <Field
              name={'middle_name'}
              label={'Отчество'}
              component={FormInput}
              placeholder={'Отчество'}
              validate={required}
            />
            <Field name={'phone'} label={'Телефон'} component={FormMaskInput} />
            <Field
              name={'email'}
              label={'Email'}
              component={FormInput}
              placeholder={'Email'}
              keyboardType={'email-address'}
              validate={required}
            />
            <Field
              name={'city'}
              label={'Город'}
              component={FormSelect}
              options={citiesMock}
            />
            <Field name={'file'} label={'Диплом'} component={FormFilePicker} />
            <Field
              name={'specialization'}
              label={SPECIALIZATION} //Специали\u2011зация
              component={FormSelect}
              options={specializationsMock}
              buttonLabel={SPECIALIZATION}
              styleInput={styles.specializationInputStyle}
            />
            <View style={styles.ckeckboxBlock}>
              <FormCheckbox
                name={'personal'}
                textButtonLabel={'Согласие на обработку персональных данных'}
              />

              <FormCheckbox
                name={'sale'}
                textButtonLabel={'Согласие на участие в акциях'}
                text={'по продвижению приложения'}
              />

              <FormCheckbox
                name={'gallery'}
                textButtonLabel={'Согласие на участие в галерее'}
                text={'рекомендованных врачей'}
              />
            </View>
            <Field
              name={'promocode'}
              label={'Введите промокод'}
              component={FormInput}
              placeholder={'Промокод'}
            />
            <View style={styles.nextContainer}>
              <CustomButton
                type={'secondary'}
                label={NEXT}
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      />
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  specializationInputStyle: {
    backgroundColor: '#F7F7F7',
  },
  ckeckboxBlock: {
    paddingVertical: 25,
  },
  nextContainer: {
    marginTop: 10,
    marginBottom: 40,
  },
});
