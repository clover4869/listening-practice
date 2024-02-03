import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'

import {IconsProps} from '@assets/Icon'

const EvilIconsIcon: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default EvilIconsIcon
