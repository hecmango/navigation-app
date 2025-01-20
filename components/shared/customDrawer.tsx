import { View, Text } from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'

const customDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        >
            <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
                <View className='flex justify-center items-center bg-white rounded-full w-24 h-24'> 
                    <Text className='text-primary font-work-black text-3xl'>HM</Text>
                </View>
            </View>

            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

export default customDrawer