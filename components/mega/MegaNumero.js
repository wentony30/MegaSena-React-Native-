import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({num}) => {
    return(
        <View style={style.contianer}>
            <Text style={style.Num}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    contianer: {
        width: 50,
        height: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: "center"
    },
    Num: {
        color: '#fff',
    }
})