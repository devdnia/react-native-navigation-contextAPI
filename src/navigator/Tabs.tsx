import React, { useState } from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tabs1Screen } from '../screens/Tabs1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../themes/appTheme';
import { TopTabNavigator } from './TopTapNavigator';



export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndoroid />;
}

// Tabs Android
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndoroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary
      }}
      screenOptions={({ route }) => ({
        // TABS 
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'document-outline'
              break;

            case 'Tab2Screen':
              iconName = 'globe-outline'
              break;

            case 'Stack':
              iconName = 'person-outline'
              break;

          }
          return <Icon name={iconName} />
        },
        tabBarShowIcon: true,
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" component={Tabs1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="Stack" component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

// Tabs iOS
const BottomTabIOS = createBottomTabNavigator();




const TabsIOS = () => {

  return (
    
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        // TABS 
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'document-outline'
              break;

            case 'Tab2Screen':
              iconName = 'globe-outline'
              break;

            case 'Stack':
              iconName = 'person-outline'
              break;

          }
          return <Icon name={iconName} size={25} color={ color }/>
        },
        tabBarActiveTintColor: colors.primary,
        // Eliminar el título en header navigation
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14
        }
      })
      }
    >
      <BottomTabIOS.Screen name="Tab1Screen" component={Tabs1Screen}/>
      <BottomTabIOS.Screen name="Tab2Screen" component={TopTabNavigator} />
      <BottomTabIOS.Screen name="Stack" component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}