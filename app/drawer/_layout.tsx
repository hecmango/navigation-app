import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'

const DrawerLayout = () => {
    return (
        <Drawer
        screenOptions={{
            overlayColor: 'rgba(0,0,0,0.5)',
            drawerActiveTintColor: 'indigo',
            headerShadowVisible: false,
            sceneStyle: {
                backgroundColor: 'white',
            }
        }}
        >
            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'User',
                    title: 'User SIUUUUUUU',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" size={size} color={color} />
                    )
                }}

            />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
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