/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import COLORS from '../../assets/color';
import Select from '../../components/atom/Select/Select';
import { AUDIO_FILE_TYPE } from '../../constant/audio';
import { Formik } from 'formik';
import CInput from '../../components/atom/Input';
DropDownPicker.setTheme('DARK');

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

function SAddAudio(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const [value, setValue] = useState<string>(AUDIO_FILE_TYPE.URL);

  const renderInput = () => {
    switch (value) {
      case AUDIO_FILE_TYPE.URL:
        {
          return;
        }
        break;

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Select
        value={value}
        onChange={(value) => setValue(value)}
        options={[
          { label: 'Google Drive', value: AUDIO_FILE_TYPE.DRIVE },
          { label: 'Local File', value: AUDIO_FILE_TYPE.LOCAL_FILE },
          { label: 'URL', value: AUDIO_FILE_TYPE.URL },
        ]}
      />

      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) => console.log(values)}
        validateOnChange={true}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
          console.log({ errors });

          return (
            <View>
              <CInput
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
              />
              <Button onPress={() => handleSubmit()} title="Submit" />
            </View>
          );
        }}
      </Formik>

      {/* <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text>Add Audio</Text>
          <Icons
            name="add"
            type={EIconTypes.Ionicons}
            size={12}
            color={COLORS.GREY_SCORPION}></Icons>

          <Button
            title="open picker for single file selection"
            onPress={async () => {
              try {
                const pickerResult = await DocumentPicker.pickSingle({
                  presentationStyle: 'fullScreen',
                  copyTo: 'cachesDirectory',
                });
                const sound = new Sound(
                  pickerResult.fileCopyUri?.split('file://')[1],
                  Sound.MAIN_BUNDLE,
                  error => {
                    console.log({error});
                    sound.play();
                  },
                );
                sound.play();
                console.log({
                  pickerResult,
                  sound,
                  path: pickerResult.fileCopyUri?.split('file://')[1],
                });
              } catch (e) {
                console.log(e);
              }
            }}
          />

          <Button
            title="list audio"
            onPress={() => {
              navigation.navigate(Routes.LIST_AUDIO);
            }}></Button>
        </View>
      </ScrollView> */}
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
