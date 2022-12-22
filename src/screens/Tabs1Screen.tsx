import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { styles, colors } from '../themes/appTheme';


export const Tabs1Screen = () => {


  useEffect(() => {
    console.log("Tab1screen effect")
  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>

        <Icon
          name="add-circle-outline"
          size={30}
          color={colors.primary}
        />

        <Icon
          name="alarm-outline"
          size={30}
          color={colors.primary}
        />

        <Icon
          name="battery-charging-outline"
          size={30}
          color={colors.primary}
        />

        <Icon
          name="calendar-outline"
          size={30}
          color={colors.primary}
        />

        <Icon
          name="desktop-outline"
          size={30}
          color={colors.primary}
        />
      </Text>
    </View>
  )
}
