import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto'

import {IconsProps} from '@assets/Icon'

const FontistoIcon: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default FontistoIcon
