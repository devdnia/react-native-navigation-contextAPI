import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingScreen = () => {

  const { authState } = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={
        styles.title}
      >
        Settings Screens
      </Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {
        authState.favouriteIcon && (
          <Icon
            name={authState.favouriteIcon}
            size={150}
            color={colors.primary}
          />
        )
      }
    </View>
  )
}
