import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}

export const Pagina3Screen = ( { navigation }: Props ) => {
  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Pagina3Screen</Text>

      <Button
        title='Regresar'
        onPress={ () => navigation.pop() }
      />

      <Button
        title='Ir a página 1'
        onPress={ () => navigation.popToTop() }
      />

    </View>
  )
}
