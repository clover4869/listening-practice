import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {IconsProps} from '@assets/Icon'

const MaterialIcons: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default MaterialIcons
