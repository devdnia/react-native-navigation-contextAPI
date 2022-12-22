import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tabs2Screen = () => {

  useEffect(() => {
    console.log("Tab2screen effect")
  }, []);

  return (
    <View>
        <Text>Tab2 Screen</Text>
    </View>
  )
}
