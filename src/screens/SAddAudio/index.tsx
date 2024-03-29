/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import COLORS from '../../assets/color';
import CInput from '../../components/atom/Input';
import CSelect from '../../components/atom/Select/Select';
import { AUDIO_FILE_TYPE } from '../../constant/audio';
DropDownPicker.setTheme('DARK');

import * as Yup from 'yup';
import InputDocumentPicker from '../../components/atom/DocumentPicker/InputDocumentPicker';
import { Routes } from '../../navigator/types';
import { insertOne } from '../../store/sqlite/audio';
import Header from '../../components/container/Header/Header';
import CButton from '../../components/atom/Button';
import CButtonText from '../../components/atom/Button/CButtonText';
import Toast from 'react-native-toast-message';
import { delay } from '../../shared/delay';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required(),
  transcript: Yup.string().required(),
  type: Yup.string().required(),
  topic: Yup.string().required(),
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

function getDriveFilePath(url: string) {
  // Extract the file ID from the URL using a regular expression
  const match = url.match(/\/file\/d\/([^\/]+)/);

  // If there's a match, return the captured group (file ID), otherwise return null
  return match
    ? `https://docs.google.com/uc?export=download&id=${match[1]}`
    : '';
}

function SAddAudio(): React.JSX.Element {
  const navigation = useNavigation<any>();
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
  const [isDisable, setIsDisable] = useState(false);

  const getPath = (type: AUDIO_FILE_TYPE, values: IFormValue) => {
    switch (type) {
      default:
      case AUDIO_FILE_TYPE.URL: {
        return values.pathUrl;
      }
      case AUDIO_FILE_TYPE.DRIVE: {
        return getDriveFilePath(values.pathDrive);
      }
      case AUDIO_FILE_TYPE.LOCAL_FILE: {
        return values.pathFile;
      }
    }
  };

  const handleSubmitForm = async (values: IFormValue) => {
    setIsDisable(true);
    try {
      let path = getPath(values.type, values);
      if(!path) {
        throw `Can't get path of audio!`
      }
      const data = {
        ...values,
        listen_number: 0,
        duration: 0,
        path,
      };

      const id = await insertOne(data);
      delay(1000);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: `Audio created!`,
      });
      navigation.navigate(Routes.AUDIO_PLAYER, { id });
      setIsDisable(false);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error?.toString() || `There are something error`,
      });
      setIsDisable(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Add Audio" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        validateOnChange={true}
        validationSchema={SignupSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          const renderInputURL = (type: AUDIO_FILE_TYPE) => {
            switch (type) {
              case AUDIO_FILE_TYPE.URL: {
                return (
                  <CInput
                    onChange={handleChange('pathUrl')}
                    onBlur={handleBlur('pathUrl')}
                    value={values.pathUrl}
                    error={touched.pathUrl ? errors.pathUrl : undefined}
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
                    error={touched.pathDrive ? errors.pathDrive : undefined}
                    placeholder="Path Drive"
                  />
                );
              }

              case AUDIO_FILE_TYPE.LOCAL_FILE: {
                return (
                  <InputDocumentPicker
                    onChange={handleChange('pathFile')}
                    value={values.pathFile}
                    error={touched.pathFile ? errors.pathFile : undefined}
                  />
                );
              }

              default:
                break;
            }
          };
          return (
            <View className="px-2">
              <CInput
                onChange={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder="Name"
                value={values.name}
                error={touched.name ? errors.name : undefined}
              />
              <CInput
                onChange={handleChange('transcript')}
                onBlur={handleBlur('transcript')}
                value={values.transcript}
                error={touched.transcript ? errors.transcript : undefined}
                placeholder="Transcript"
              />
              <CInput
                onChange={handleChange('topic')}
                onBlur={handleBlur('topic')}
                value={values.topic}
                error={touched.topic ? errors.topic : undefined}
                placeholder="Topic"
              />
              <CSelect
                value={values.type}
                onChange={handleChange('type')}
                options={[
                  { label: 'Google Drive', value: AUDIO_FILE_TYPE.DRIVE },
                  { label: 'Local File', value: AUDIO_FILE_TYPE.LOCAL_FILE },
                  { label: 'URL', value: AUDIO_FILE_TYPE.URL },
                ]}
              />

              {renderInputURL(values.type)}
              <CButtonText
                onPress={() => handleSubmit()}
                title="Submit"
                disabled={isDisable}
              ></CButtonText>
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
