import React from 'react'
import Icon from 'react-native-vector-icons/Octicons'

import {IconsProps} from '@assets/Icon'

const OcticonsIcon: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default OcticonsIcon
