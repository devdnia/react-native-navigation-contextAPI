import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbunScreen';
import { colors } from '../themes/appTheme';


const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({

                // TABS 
                tabBarIcon: ({ color, focused, }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'chatbubbles-outline'
                            break;

                        case 'Contact':
                            iconName = 'person-outline'
                            break;

                        case 'Album':
                            iconName = 'images-outline'
                            break;

                    }
                    return <Icon name={iconName}  size={20}/>
                },
                tabBarPressColor: colors.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary
                },
                tabBarStyle: {
                    shadowColor: 'transparent',
                    elevation: 0,
                },
            })
            }

        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contact" component={ContactScreen} />
            <Tab.Screen name="Album" component={AlbumScreen} />
        </Tab.Navigator >
    );
}
