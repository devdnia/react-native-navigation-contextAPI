import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styles } from '../themes/appTheme';

interface Props extends NativeStackScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title='Ir a página 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5,
      }}>
        Navegar con argumentos</Text>

      <View style={{
        flexDirection: 'row'
      }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#585606'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Iván',
          })}
        >
          <Icon name="man-outline" size={ 30 } color='white'/>
          <Text style={styles.botonGrandeTexto}>Iván</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Rosa',
          })}
        >
          <Icon name="woman-outline" size={ 30 } color='white'/>
          <Text style={styles.botonGrandeTexto}>Rosa</Text>
        </TouchableOpacity>
      </View>



    </View>
  )
}
