import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import {IconsProps} from '@assets/Icon'

const SimpleLineIcon: React.FC<IconsProps> = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />
}

export default SimpleLineIcon
