import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { router, Stack, useNavigation } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

const StackLayout = () => {

    const navigation = useNavigation()

    const onHeaderLeftClick = ( canGoBack: boolean ) => {
        if(canGoBack) {
            router.back()
            // navigation.dispatch( StackActions.pop() )
            return
        }

        navigation.dispatch( DrawerActions.toggleDrawer )
    }


    return (
        <Stack
        screenOptions={{
            // headerShown: false,
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: 'white',
            },
            headerLeft:({ tintColor, canGoBack }) => (
                <Ionicons
                name={canGoBack? 'arrow-back-outline' :'grid-outline'}
                size={20}
                className='mr-5'
                onPress={() => onHeaderLeftClick(canGoBack ?? false)}
                />
            ),
        }}
        >
            <Stack.Screen
            name='home/index'
            options={{
                title: 'Inicio',
            }}
            />

            <Stack.Screen
            name='products/index'
            options={{
                title: 'Products Screen',
            }}
            />

            <Stack.Screen
            name='profile/index'
            options={{
                title: 'Profile Screen',
            }}
            />

            <Stack.Screen
            name='settings/index'
            options={{
                title: 'Settings Screen',
            }}
            />
        </Stack>
    )
    
}

export default StackLayout