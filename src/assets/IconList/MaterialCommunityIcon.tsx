import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {IconsProps} from '@assets/Icon'

const MaterialCommunityIcon: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default MaterialCommunityIcon
