import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import {IconsProps} from '@assets/Icon'

const IoniconsIcon: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default IoniconsIcon
