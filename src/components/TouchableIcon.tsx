import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import { colors } from '../themes/appTheme'
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string;
}


export const TouchableIcon = ({ iconName } : Props) => {

    const { changeFavouriteIcon } = useContext( AuthContext )

  return (
    <TouchableOpacity
        onPress={ () => changeFavouriteIcon( iconName ) }
    >
        <Icon
          name= { iconName }
          size={30}
          color={colors.primary}
        />
    </TouchableOpacity>
  )
}
