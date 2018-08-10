import React, { Component } from 'react';
import { View, 
        Text, 
        Modal, 
        TextInput, 
        StylesSheet, 
        TouchableOpacity, 
       } from 'react-native';


export default class NewRepoModal extends Component {
    state={
        NewRepoText: '',
    };

    render() {
        return (
            <Modal animationType='fade' transparent={ true } visible={ this.props.visible }>
                <View style={ styles.modalContainer}>
                    <View style={ styles.boxContainer } >
                        <text style={ styles.boxTitle }>Adicionar repositório</text>
                        <TextInput 
                            autoFocus
                            autoCapitalize='none'
                            style={ styles.boxInput }
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='organização/repositório'  
                            value={this.state.NewRepoText}
                            onChangeText={NewRepoText => this.setState({ NewRepoText: NewRepoText })}                      
                        />
                        <View style={ styles.buttonContainer }>
                            <TouchableOpacity 
                                style={ [styles.button, styles.cancelButton ] }
                                onPress={this.props.onCancel}>

                                <text style={ styles.buttonText }>Cancelar</text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                style={ [styles.button, styles.submitButton ] }
                                onPress={() => this.props.onAdd(this.state.NewRepoText)}>

                                <text style={ styles.buttonText }>Adicionar</text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            
            </Modal>

        );
    }
}

const style = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: rgba(0,0,0,0.7),
        justifyContent: 'center',
        alignItems: 'center',
    },

    boxContainer: {
        padding: 20,
        backgroundColor:'#FFF',
        borderRadius: 10,
        alignItems: 'center',
        width: 280,
    },

    boxTitle: {
        fontSize: 16,
        fontWeight: 'bold', 
    },

    boxInput: {
        alignSelf: 'stretch',
        marginTop: 10,
        paddingVertical: 0,
        paddingHorizontal: 20,
        borderWidth:1,
        borderColor: '#DDD',
        height: 40,
        borderRadius: 3,
    },

    buttonContainer: {
        marginTop: 10,
        height: 20,
        flexDirection: 'row',
    },

    button: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 3,
    },

    cancelButton: {
        backgroundColor:'#E25F5F',
        marginRight: 5,
    },

    submitButton: {
        backgroundColor:'#70BD85',
        marginRight: 5,
    },

    buttonText: {
        fontSize: 12,
        color:'#FFF',
        fontWeight: 'bold', 
    }
});