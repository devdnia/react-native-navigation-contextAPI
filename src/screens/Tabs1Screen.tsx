import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles} from '../themes/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tabs1Screen = () => {


  useEffect(() => {
    console.log("Tab1screen effect")
  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="add-circle-outline"/>
        <TouchableIcon iconName="alarm-outline"/>
        <TouchableIcon iconName="battery-charging-outline"/>
        <TouchableIcon iconName="calendar-outline"/>
        <TouchableIcon iconName="desktop-outline"/>
      </Text>
    </View>
  )
}
