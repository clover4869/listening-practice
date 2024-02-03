import React from 'react'
import Icon from 'react-native-vector-icons/Zocial'

import {IconsProps} from '@assets/Icon'

const ZocialIcon: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default ZocialIcon
