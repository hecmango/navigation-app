import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { products } from '@/store/products.store'



const ProductScreen = () => {
    const { id } = useLocalSearchParams()

    const product = products.find((product) => product.id === id)

    if(!product) {
        return <Redirect href='/(stack)/products'/>
    }

  return (
    <View>
      <Text className='font-work-black text-2xl'>{product.title}</Text>
      <Text className=''>{product.description}</Text>
        <Text className='font-work-black'>{product.price}</Text>
    </View>
  )
}

export default ProductScreen