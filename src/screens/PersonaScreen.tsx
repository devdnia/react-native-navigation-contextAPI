import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native'
import { styles } from '../themes/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';


// interface RouterParams{
//     id: number;
//     nombre: string;
// }

interface Props extends NativeStackScreenProps<RootStackParams, 'PersonaScreen'> { }

export const PersonaScreen = ({ route, navigation }: Props) => {

    // const params = route.params as RouterParams;
    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
