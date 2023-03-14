import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {SELECT_FILE} from '../constants/texts';

export const FormFilePicker = ({
  label,
  input,
  meta: {touched, error},
  ...props
}: any) => {
  // const isValible = touched && error;
  const [singleFile, setSingleFile] = React.useState('');

  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        // alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        // alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={[styles.inputContainer]}>
        <TouchableOpacity
          style={{
            flex: 1,
          }}
          onPress={selectOneFile}>
          <Text
            style={{
              color: '#1E63EE',
            }}>
            {SELECT_FILE}
          </Text>
        </TouchableOpacity>
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
    borderWidth: 1.2,
    borderStyle: 'dotted',
    borderRadius: 8,
    borderColor: '#1E63EE',
    flex: 3,
    paddingVertical: 14.5,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
});
