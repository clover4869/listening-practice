import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScaleDecorator} from 'react-native-draggable-flatlist';
import Icons, {EIconTypes} from '../../../assets/Icon';
import {usePlayerStore} from '../../../store/zustand/usePlayerStore';
import { IBreak } from '../../../store/zustand/useBreakStore';

interface IBreakTimeItem {
  item: IBreak;
  getIndex: any;
  drag: any;
  isActive: any;
  onRemove: (key: number | string) => void;
}

const BreakTimeItem: FC<IBreakTimeItem> = ({
  item,
  getIndex,
  drag,
  isActive,
  onRemove,
}) => {
  const {
    setPeriod,
  } = usePlayerStore();
  return (
    <ScaleDecorator>
      <TouchableOpacity
        onLongPress={drag}
        // onPressIn={drag}
        onPress={() => setPeriod(item.start, item.end)}
        disabled={isActive}
        style={[styles.container, {}]}>
        <View>
          <Text style={styles.text}>
            {getIndex()}. {item.start} {'--->'} {item.end}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.binButton]}
            onPress={() => onRemove(item.id)}>
            <View>
              <Icons
                type={EIconTypes.Ionicons}
                name={'trash'}
                size={25}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </ScaleDecorator>
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
    flexDirection: 'row',
    marginBottom: 12,
    color: 'white',
  },
  text: {
    color: 'white',
  },

  //   bin trash

  binButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'rgb(255, 95, 95)',
    borderWidth: 3,
    borderColor: 'rgb(255, 201, 201)',
  },
});

export default BreakTimeItem;
