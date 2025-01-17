import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const Home = () => {
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                {/* <Link className='mb-5' href='/products'>Productos</Link>
                <Link className='mb-5' href='/profile'>Perfil</Link>
                <Link className='mb-5' href='/settings'>Ajustes</Link> */}

                <Link href='/tabs/(stack)/products' asChild>
                    <CustomButton 
                    children={'Productos'}
                    color='primary'
                    className='mb-5'
                    />
                </Link>

                <CustomButton 
                children={'Perfil'}
                color='secondary'
                onPress={() => router.push('/tabs/(stack)/profile')}
                className='mb-5'
                />

                <CustomButton 
                children={'Ajustes'}
                color='tertiary'
                onPress={() => router.push('/tabs/(stack)/settings')}
                className='mb-5'
                />

                <CustomButton 
                children={'Text only'}
                color='tertiary'
                variant='text-only'
                onPress={() => router.push('/tabs/(stack)/settings')}
                className='mb-5'
                />
            </View>
        </SafeAreaView>
    )
}

export default Home