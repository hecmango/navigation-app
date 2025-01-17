import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store'
import { Link } from 'expo-router'

const PorductsScreen = () => {
    return (
        <View className='flex flex-1 px-4'>
            <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View className='mt-10'>
                    <Text className='text-2xl font-work-black' >{item.title}</Text>
                    <Text className='text-lg font-work-medium' >{item.description}</Text>
                    <View className='flex flex-row justify-between'>
                        <Text className='font-work-black'>{item.price}</Text>
                        <Link className='text-primary' href={`/products/${item.id}`} >Ver detalles</Link>
                    </View>
                </View>

            )}
            />
        <Text>PorductsScreen</Text>
        </View>
    )
}

export default PorductsScreen