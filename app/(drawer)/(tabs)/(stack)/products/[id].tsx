import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { products } from '@/store/products.store'



const ProductScreen = () => {
    const { id } = useLocalSearchParams()
    const navigation = useNavigation()

    const product = products.find((product) => product.id === id)


    useEffect(() => {
      navigation.setOptions({
        title: product?.title ?? 'Product',
      })
    }, [product])

    if(!product) {
        return <Redirect href='/products'/>
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