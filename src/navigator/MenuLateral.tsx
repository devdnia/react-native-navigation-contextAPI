import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SettingScreen } from '../screens/SettingScreen';
import { styles } from '../themes/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: (width >= 768 ? 'permanent' : 'front'),

      }}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      {/* Parte de avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHjMTlz2-Xszg1cyGDzEzs2Y2GVb28psGEw&usqp=CAU'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>

        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Text style={styles.menuTexto}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  )
};