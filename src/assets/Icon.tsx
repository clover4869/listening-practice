import React from 'react'

import EntypoIcon from './IconList/EntypoIcon'
import AntDesignIcon from './IconList/AntDesignIcon'
import FeatherIcon from './IconList/FeatherIcon'
import FontAwesomeIcon from './IconList/FontAwesomeIcon'
import FontistoIcon from './IconList/FontistoIcon'
import Foundation from './IconList/Foundation'
import IoniconsIcon from './IconList/IoniconsIcon'
import MaterialCommunityIcon from './IconList/MaterialCommunityIcon'
import MaterialIcons from './IconList/MaterialIcons'
import OcticonsIcon from './IconList/OcticonsIcon'
import SimpleLineIcon from './IconList/SimpleLineIcon'
import ZocialIcon from './IconList/ZocialIcon'

export interface IconsProps {
  name: string
  type?: EIconTypes
  size?: number
  color?: string
}

enum EIconTypes {
  Entypo = 'Entypo',
  AntDesign = 'AntDesign',
  Feather = 'Feather',
  FontAwesome = 'FontAwesome',
  FontAwesome5 = 'FontAwesome5',
  Fontisto = 'Fontisto',
  oundation = 'oundation',
  Ionicons = 'Ionicons',
  MaterialCommunityIcons = 'aterialCommunity',
  MaterialIcons = 'MaterialIcons',
  Octicons = 'Octicons',
  SimpleLineIcons = 'SimpleLineIcons'
}

function Icons({name, type, size, color}: IconsProps) {
  if (type === 'Entypo') {
    return <EntypoIcon name={name} size={size} color={color} />
  }
  if (type === 'AntDesign') {
    return <AntDesignIcon name={name} size={size} color={color} />
  }
  if (type === 'Feather') {
    return <FeatherIcon name={name} size={size} color={color} />
  }
  if (type === 'FontAwesome') {
    return <FontAwesomeIcon name={name} size={size} color={color} />
  }
  if (type === 'Fontisto') {
    return <FontistoIcon name={name} size={size} color={color} />
  }
  if (type === 'oundation') {
    return <Foundation name={name} size={size} color={color} />
  }
  if (type === 'Ionicons') {
    return <IoniconsIcon name={name} size={size} color={color} />
  }
  if (type === 'aterialCommunity') {
    return <MaterialCommunityIcon name={name} size={size} color={color} />
  }
  if (type === 'MaterialIcons') {
    return <MaterialIcons name={name} size={size} color={color} />
  }
  if (type === 'Octicons') {
    return <OcticonsIcon name={name} size={size} color={color} />
  }
  if (type === 'SimpleLineIcons') {
    return <SimpleLineIcon name={name} size={size} color={color} />
  }
  return <ZocialIcon name={name} size={size} color={color} />
}

export {EIconTypes}
export default Icons
