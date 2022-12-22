import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props extends NativeStackScreenProps<any, any> { }

export const Pagina2Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle:'Atrás'
    })
  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button
        title='Ir página 3'
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  )
}
