import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BottomMethods from './bottomTaps/BottomMethods'

const MainHomeScreen = () => {
    return (
        <View style={styles.bottomContainer}>
            <BottomMethods />
        </View>
    )
}

const styles = StyleSheet.create({
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    }
})

export default MainHomeScreen
