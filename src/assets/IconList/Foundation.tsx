import React from 'react'
import Icon from 'react-native-vector-icons/Foundation'

import {IconsProps} from '@assets/Icon'

const Foundation: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default Foundation
