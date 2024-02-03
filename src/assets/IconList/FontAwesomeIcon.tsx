import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import {IconsProps} from '@assets/Icon'

const FontAwesomeIcon: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default FontAwesomeIcon
