import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

import {IconsProps} from '@assets/Icon'

const AntDesignIcon: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default AntDesignIcon
