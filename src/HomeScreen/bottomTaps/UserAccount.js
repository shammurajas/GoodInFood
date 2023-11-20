import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const UserAccount = () => {

    const navigation = useNavigation();

    const onLogout = () => {
        auth()
            .signOut()
            .then(response => {
                Alert.alert('Sign Out!');
                navigation.navigate('LoginScreen')
            })
            .catch(error => {
                Alert.alert('Not able to logout!');
            });
    };



    return (
        <View>
            <Text style={{ textAlign: 'center', marginTop: 300 }}>
                Ohm..
            </Text>
            <TouchableOpacity
                style={styles.LogoutButton}
                activeOpacity={0.5}
                onPress={onLogout}>
                <Text style={styles.buttonTextStyle}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    LogoutButton: {
        justifyContent: 'center',
        backgroundColor: '#808000',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 30,
        marginRight: 26,
        marginTop: 50,
        marginBottom: 20,
    }
})

export default UserAccount
