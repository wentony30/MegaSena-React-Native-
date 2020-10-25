import React, {Component} from 'react'
import {Button, Text, TextInput, View, StyleSheet} from 'react-native'

import MegaNumero from './MegaNumero'


export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarNumeros = (qtde) => {
        this.setState({qtdeNumeros: +qtde})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {

        return(
            <>
                <Text style={{fontSize: 30}}>
                    Gerador de Mega Sena {this.state.qtdeNumeros}
                </Text>
                <TextInput 
                    keyboardType="numeric"
                    style={{borderBottomWidth: 1, marginBottom: 20}}
                    placeholder="Quantidade de Números" 
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={qtde => this.alterarNumeros(qtde)}
                />
                <Button
                    style={style.botao}
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <View style={style.numerosMega}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}

const style = StyleSheet.create({
    numerosMega: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 20,
    },
    botao: {
        color: '#ff0000'
    }
})