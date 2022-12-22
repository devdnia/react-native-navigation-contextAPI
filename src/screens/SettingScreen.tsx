import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../themes/appTheme';

export const SettingScreen = () => {

  return (
    <View style={ styles.globalMargin }>
        <Text style={
          styles.title }
          >
            Settings Screens 
          </Text>
    </View>
  )
}
