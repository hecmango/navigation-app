import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const App = () => {

    // return <Redirect href='/(stack)/home'/>

    return <Redirect href='/drawer'/>
    // return (
    //     <SafeAreaView>
    //         <View className='mt-6'>
    //             <Text className='text-3xl' style={{fontFamily: 'WorkSans-Black'}}>App</Text>
    //             <Text className='text-3xl font-work-black text-primary'>App</Text>
    //             <Text className='text-3xl font-work-light text-secondary-200'>App</Text>
    //             <Text className='text-3xl font-work-medium text-tertiary'>App</Text>

    //             <Link href='/products' >Productos</Link>
    //         </View>
    //     </SafeAreaView>
    // )
}

export default App