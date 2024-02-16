import React, { FC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScaleDecorator } from 'react-native-draggable-flatlist';
import Icons, { EIconTypes } from '../../../assets/Icon';
import CInput, { ECInputType } from '../../../components/atom/Input';
import CButton from '../../../components/atom/Button';
import COLORS from '../../../assets/color';
import { insertOne } from '../../../store/sqlite/breakTime';
import { usePlayerStore } from '../../../store/zustand/usePlayerStore';
import { useRoute } from '@react-navigation/native';
import { IBreak, useBreaksStore } from '../../../store/zustand/useBreakStore';
import Toast from 'react-native-toast-message';

interface IBreakTimeControl {}

const BreakTimeControl: FC<IBreakTimeControl> = ({}) => {
  const { params } = useRoute<any>();
  const { breaks, addBreak } = useBreaksStore();
  const { id } = params;
  const { duration } = usePlayerStore();
  const [form, setForm] = useState({
    start: 0,
    end: duration || 0,
  });

  const handleSubmit = async () => {
    if (form.start === form.end) {
      return Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Start time can't equal end time",
      });
    }

    if (form.start > form.end) {
      return Toast.show({
        type: 'error',
        text1: 'Error',
        text2: "Start time can't greater than end time",
      });
    }

    const isExist = breaks.some(
      (element: IBreak) =>
        element.start === form.start && element.end === form.end,
    );

    if (isExist) {
      return Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Break time existed!',
      });
    }


    try {
      const position = breaks.length || 0;
      const data = await insertOne({
        audio_id: id,
        start: form.start,
        end: form.end,
        position: position,
      });

      addBreak({ ...data });
      return Toast.show({
        type: 'success',
        text1: 'Success',
        text2: `Break time created!`,
      });
    } catch (error) {
      return Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `Have something error ${error}`,
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapInput}>
        <CInput
          styleContainer={styles.input}
          value={form.start}
          onChange={(value) => {
            setForm({ ...form, start: Number(value) });
          }}
          type={ECInputType.number}
          placeholder="Start"
        />
        <CInput
          styleContainer={styles.input}
          value={form.end}
          onChange={(value) => {
            setForm({ ...form, end: Number(value) });
          }}
          type={ECInputType.number}
          placeholder="End"
        />
      </View>
      <CButton style={styles.button} className="w-full" onPress={handleSubmit}>
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
    width: '100%',
    gap: 12,
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
    width: '47%',
  },
  text: {
    color: 'white',
  },
});

export default BreakTimeControl;
