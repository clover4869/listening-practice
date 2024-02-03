import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import {IconsProps} from '@assets/Icon'

const FeatherIcon: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default FeatherIcon
