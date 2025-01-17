import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: 'indigo',
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'white',
                borderTopColor: 'rgba(0,0,0,0.1)',
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowOffset: {
                    width: 0,
                    height: -2,
                },
                shadowOpacity: 0.05,
                shadowRadius: 4,
            },
            }}>
        <Tabs.Screen
          name="home/index"
          options={{
            title: 'Home Screen',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
          }}
        />
        <Tabs.Screen
          name="favorites/index"
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
          }}
        />
        <Tabs.Screen
          name="(stack)"
          options={{
            title: 'Stack',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add-outline" color={color} />,
          }}
        />
      </Tabs>
    )
}

export default TabsLayout