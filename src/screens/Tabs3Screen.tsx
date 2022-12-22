import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tabs3Screen = () => {

  useEffect(() => {
    console.log("Tab3screen effect")
  }, []);

  return (
    <View>
        <Text>Tab3 Screen</Text>
    </View>
  )
}
