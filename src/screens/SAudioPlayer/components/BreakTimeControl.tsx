import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScaleDecorator} from 'react-native-draggable-flatlist';
import Icons, {EIconTypes} from '../../../assets/Icon';
import CInput, {ECInputType} from '../../../components/atom/Input';
import CButton from '../../../components/atom/Button';
import COLORS from '../../../assets/color';
import {insertOne} from '../../../store/sqlite/breakTime';
import {usePlayerStore} from '../../../store/zustand/usePlayerStore';
import {useRoute} from '@react-navigation/native';
import {useBreaksStore} from '../../../store/zustand/useBreakStore';

interface IBreakTimeControl {}

const BreakTimeControl: FC<IBreakTimeControl> = ({}) => {
  const {params} = useRoute<any>();
  const {breaks, addBreak} = useBreaksStore();
  const {id} = params;
  const {duration} = usePlayerStore();
  const [form, setForm] = useState({
    start: 0,
    end: duration || 0,
  });

  const handleSubmit = async () => {
    const position = breaks.length || 0;
    const data = await insertOne({
      audio_id: id,
      start: form.start,
      end: form.end,
      position: position,
    });
    addBreak(form.start, form.end, position);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapInput}>
        <CInput
          style={styles.input}
          value={form.start}
          onChange={value => {
            setForm({...form, start: Number(value)});
          }}
          type={ECInputType.number}
          placeholder="Start"
        />
        <CInput
          style={styles.input}
          value={form.end}
          onChange={value => {
            setForm({...form, end: Number(value)});
          }}
          type={ECInputType.number}
          placeholder="End"
        />
      </View>
      <CButton style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>Break time</Text>
      </CButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.GREY_SCALE,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.GREY_CHARCOAL,
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
    backgroundColor: COLORS.LAVENDER,
    color: COLORS.WHITE,
    fontSize: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    minHeight: 50,
    width: '50%',
    padding: 12,
    color: COLORS.WHITE,
    fontSize: 15,
    borderColor: COLORS.LAVENDER,
    borderWidth: 1,
    backgroundColor: 'transparent',
    marginBottom: 12,
  },
  text: {
    color: 'white',
  },
});

export default BreakTimeControl;
