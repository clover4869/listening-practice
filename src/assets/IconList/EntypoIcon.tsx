import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'

import {IconsProps} from '@assets/Icon'

const EntypoIcon: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default EntypoIcon
