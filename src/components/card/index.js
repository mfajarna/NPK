import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ic_micro } from '../../assets/icons'

const Card = ({onPress,label}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.content}>
                <View style={{ alignItems: 'center', marginBottom: 25, marginTop: 10 }}>
                    <Ic_micro />
                </View>
                <View style={{ alignItems: 'center'}}>
                    <Text style={styles.text}>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    container:{
        padding: 9,
        width: 130,
        height: 130,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#78DEE0',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    text:{
        fontSize: 17,
        fontWeight: 'bold'
    }
})
