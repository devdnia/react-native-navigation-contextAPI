import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'
import { AuthContext } from '../context/AuthContext';

export const ContactScreen = () => {

  const { signIn, authState: { isLoggedIn } } = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactScreen</Text>

      {
        !isLoggedIn && <Button title='SingIn' onPress={signIn} />
      }

    </View>
  )
}
