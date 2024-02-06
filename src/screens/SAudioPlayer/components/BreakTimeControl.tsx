import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScaleDecorator} from 'react-native-draggable-flatlist';
import Icons, {EIconTypes} from '../../../assets/Icon';
import CInput, {ECInputType} from '../../../components/atom/Input';
import CButton from '../../../components/atom/Button';

interface IBreakTimeControl {}

const BreakTimeControl: FC<IBreakTimeControl> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapInput}>
        <CInput
          style={styles.input}
          value={1}
          onChange={() => {}}
          type={ECInputType.number}
          placeholder="Start"
        />
        <CInput
          style={styles.input}
          value={1}
          onChange={() => {}}
          type={ECInputType.number}
          placeholder="End"
        />
      </View>
      <CButton style={styles.button} onPress={() => {}}>
        <Text style={styles.text}>Break time</Text>
      </CButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3F3F40',
    paddingHorizontal: 24,
    paddingVertical: 18,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    color: 'white',
  },
  wrapInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    minHeight: 50,
    borderRadius: 6,
    backgroundColor: '#5e4dcd',
    color: '#fff',
    fontSize: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    minHeight: 50,
    width: '50%',
    padding: 12,
    color: '#fff',
    fontSize: 15,
    borderColor: '#5e4dcd',
    borderWidth: 1,
    backgroundColor: 'transparent',
    marginBottom: 12,
  },
  text: {
    color: 'white',
  },
});

export default BreakTimeControl;
