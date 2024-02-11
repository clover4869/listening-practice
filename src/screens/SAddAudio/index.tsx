/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import COLORS from '../../assets/color';
import CSelect from '../../components/atom/Select/Select';
import { AUDIO_FILE_TYPE } from '../../constant/audio';
import { Formik } from 'formik';
import CInput from '../../components/atom/Input';
DropDownPicker.setTheme('DARK');

import * as Yup from 'yup';
import InputDocumentPicker from '../../components/atom/DocumentPicker/InputDocumentPicker';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

interface IFormValue {
  name: string;
  path: string;
  pathUrl: string;
  pathDrive: string;
  pathFile: string;
  duration?: number;
  transcript: string;
  type: AUDIO_FILE_TYPE;
  topic: string;
  level: number;
}

function SAddAudio(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const [value, setValue] = useState<string>(AUDIO_FILE_TYPE.URL);
  const initialValues: IFormValue = {
    name: '',
    path: '',
    pathDrive: '',
    pathFile: '',
    pathUrl: '',
    duration: 0,
    transcript: '',
    type: AUDIO_FILE_TYPE.URL,
    topic: '',
    level: 0,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View className="shadow-[5px_5px_0px_0px_rgba(109,40,217)] border-white border-spacing-1">
        <Text className=" text-white text-xl font-bold text-center py-2 mb-3 ">
          Add Audio
        </Text>
      </View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validateOnChange={true}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
          console.log({ errors });
          const renderInputURL = (type: AUDIO_FILE_TYPE) => {
            switch (type) {
              case AUDIO_FILE_TYPE.URL: {
                return (
                  <CInput
                    onChange={handleChange('pathUrl')}
                    onBlur={handleBlur('pathUrl')}
                    value={values.pathUrl}
                    error={errors.pathUrl}
                    placeholder="Path URL"
                  />
                );
              }

              case AUDIO_FILE_TYPE.DRIVE: {
                return (
                  <CInput
                    onChange={handleChange('pathDrive')}
                    onBlur={handleBlur('pathDrive')}
                    value={values.pathDrive}
                    error={errors.pathDrive}
                    placeholder="Path Drive"
                  />
                );
              }

              case AUDIO_FILE_TYPE.LOCAL_FILE: {
                return (
                  <InputDocumentPicker
                    onChange={handleChange('pathFile')}
                    value={values.pathFile}
                    error={errors.pathFile}
                  />
                );
              }

              default:
                break;
            }
          };
          return (
            <View>
              <CInput
                onChange={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder="Name"
                value={values.name}
                error={errors.name}
              />
              <CInput
                onChange={handleChange('transcript')}
                onBlur={handleBlur('transcript')}
                value={values.transcript}
                error={errors.transcript}
                placeholder="Transcript"
              />
              <CInput
                onChange={handleChange('topic')}
                onBlur={handleBlur('topic')}
                value={values.topic}
                error={errors.topic}
                placeholder="Topic"
              />
              <CSelect
                value={value}
                onChange={handleChange('type')}
                options={[
                  { label: 'Google Drive', value: AUDIO_FILE_TYPE.DRIVE },
                  { label: 'Local File', value: AUDIO_FILE_TYPE.LOCAL_FILE },
                  { label: 'URL', value: AUDIO_FILE_TYPE.URL },
                ]}
              />

              {renderInputURL(values.type)}
              <Button onPress={() => handleSubmit()} title="Submit" />
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY_BG,
    height: '100%',
  },
});

export default SAddAudio;
