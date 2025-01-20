import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router, useNavigation } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation()

    const onToggleDrawer = () => {
        navigation.dispatch( DrawerActions.openDrawer )
    }

    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                {/* <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/settings'>Ajustes</Link> */}

                <Link href='/products' asChild>
                    <CustomButton 
                    children={'Productos'}
                    color='primary'
                    className='mb-5'
                    />
                </Link>

                <CustomButton 
                children={'Perfil'}
                color='secondary'
                onPress={() => router.push('/profile')}
                className='mb-5'
                />

                <CustomButton 
                children={'Ajustes'}
                color='tertiary'
                onPress={() => router.push('/settings')}
                className='mb-5'
                />

                <CustomButton 
                children={'Text only'}
                color='tertiary'
                variant='text-only'
                onPress={() => router.push('/settings')}
                className='mb-5'
                />

                <CustomButton
                children={'Abrir menu'}
                onPress={onToggleDrawer}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home