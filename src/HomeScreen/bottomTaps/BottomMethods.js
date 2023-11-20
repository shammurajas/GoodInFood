import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EnterHome from './EnterHome';
import ShopCard from './ShopCard';
import UserAccount from './UserAccount';

const Tab = createBottomTabNavigator();

const BottomMethods = () => {
    return (
        <Tab.Navigator
            initialRouteName="Enterhome"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Enterhome"
                component={EnterHome}
                options={{
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen
                name="shopcard"
                component={ShopCard}
                options={{
                    tabBarLabel: 'ShopCard',
                }}
            />
            <Tab.Screen
                name="Account"
                component={UserAccount}
                options={{
                    tabBarLabel: 'Account',
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomMethods