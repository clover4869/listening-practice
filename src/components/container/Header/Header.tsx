import { Pressable, Text, View } from 'react-native';
import Icons, { EIconTypes } from '../../../assets/Icon';
import COLORS from '../../../assets/color';
import { useNavigation } from '@react-navigation/native';

interface IHeaderProps {
  title: string;
  style?: any;
}

const Header: React.FC<IHeaderProps> = ({ title, style }) => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={style}
      className="flex-row justify-between items-center align-middle px-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)] border-gray-600 border-b-2 py-3 mb-4"
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Icons
          type={EIconTypes.Ionicons}
          name={'chevron-back'}
          size={25}
          color={COLORS.WHITE}
        />
      </Pressable>

      <Text className=" text-white text-xl font-bold text-center">{title}</Text>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Icons
          type={EIconTypes.Feather}
          name={'menu'}
          size={25}
          color={COLORS.WHITE}
        />
      </Pressable>
    </View>
  );
};

export default Header;
