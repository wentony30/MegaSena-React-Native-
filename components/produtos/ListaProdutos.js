import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Produtos from './Produtos'

export default props => {
    return (
        <View>
            <Text style={style.txtGd}>Lista de Produtos</Text>
            {Produtos.map(p => {
                return (
                    <View key={p.id} style={style.fundoItem}>
                        <Text style={style.txtItem}>{p.id}) {p.nome} - R${p.preco}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const style = StyleSheet.create({
    txtGd: {
        fontSize: 30,
    },
    fundoItem: {
        backgroundColor: '#00000011',
        padding: 5,
    },
    txtItem: {
        fontSize: 15,
    }
})