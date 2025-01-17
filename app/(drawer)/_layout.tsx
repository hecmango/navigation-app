import customDrawer from '@/components/shared/customDrawer'
import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import { Text } from 'react-native'

const DrawerLayout = () => {
    return (
        <Drawer
        drawerContent={customDrawer}
        screenOptions={{
            overlayColor: 'rgba(0,0,0,0.5)',
            drawerActiveTintColor: 'indigo',
            headerShadowVisible: false,
            // headerShown: false,
            sceneStyle: {
                backgroundColor: 'white',
            }
        }}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                    drawerLabel: 'Tabs + Stack',
                    title: 'Tabs + STack',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="albums-outline" size={size} color={color} />
                    )
                }}
            />

            <Drawer.Screen
                name="user/index"
                options={{
                    drawerLabel: 'User',
                    title: 'User SIUUUUUUU',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" size={size} color={color} />
                    )
                }}

            />
            <Drawer.Screen
                name="schedule/index"
                options={{
                    drawerLabel: 'Schedule',
                    title: 'Schedule SIUUUUUUU',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="calendar-outline" size={size} color={color} />
                    )
                }}
            />
        </Drawer>
    )

}

export default DrawerLayout