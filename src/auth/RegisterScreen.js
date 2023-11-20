import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity, ScrollView, Button, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const handleButtonClick = () => {
        navigation.navigate('LoginScreen')
    }

    const createUser = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('MainHomeScreen'))
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.headerText}>HealEat</Text>
                <Text style={styles.subText}>Just Register with HealEat</Text>
                <View style={styles.SectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Email or Phone"
                        placeholderTextColor="#dcdcdc"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.passSectionStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Password"
                        placeholderTextColor="#dcdcdc"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    activeOpacity={0.5}
                    onPress={createUser}>
                    <Text style={styles.buttonTextStyle}>Register</Text>
                </TouchableOpacity>
                <View style={styles.signin}>
                    <Text style={styles.signinText}>Have an account?</Text><Button
                        onPress={handleButtonClick}
                        title="Login"
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-around',
        alignContent: 'center',
    },
    headerText: {
        fontSize: 26,
        fontWeight: '700',
        marginTop: 30,
        textAlign: 'center',
        color: '#808000'
    },
    subText: {
        color: '#808000',
        fontSize: 16,
        fontWeight: '400',
        marginTop: 20,
        marginLeft: 54,
        marginRight: 54,
        textAlign: 'center',
        maxWidth: 480
    },
    SectionStyle: {
        flexDirection: 'row',
        marginTop: 100,
        marginLeft: 24,
        marginRight: 24,
    },
    inputStyle: {
        width: 354,
        height: 57,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#808000',
        backgroundColor: '#FFFFFF',
    },
    passSectionStyle: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 24,
        marginRight: 24,
    },
    buttonStyle: {
        backgroundColor: '#808000',
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 30,
        marginRight: 26,
        marginTop: 50,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 20,
    },
    signin: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signinText: {
        color: 'black',
        textAlign: 'center',
        maxWidth: 250,
        alignContent: 'center',
    },
})

export default RegisterScreen
