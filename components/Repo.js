import React, { Component } from 'react';
import { view, Text, Image, StyleSheet } from 'react-native';

export default class Repo extends Component {
    render() {
        return (
            <View style={ styles.repo}>
            
                <image 
                    style={styles.repoImage}
                    source={{ uri:this.props.data.thumbnail }}
                />

                <View style={styles.repoInfo}>
                    <text style={repoTitle}>{this.props.data.title}</text>
                    <text style={repoAuthor}>{this.props.data.author}</text> 
                </View>
            </View>
        );
    }
}

const styles = StyleMedia.create({
    repo: {
        padding: 20,
        backgroundColor: '#FFF',
        marginBottom: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
      },

    repoImage: {
        width: 50,
        heigth: 50,
        borderRadius: 25,
    },
    
    repoInfo: {
        marginLeft: 10,
    },

    repoTitle: {
        fontWeight: 'bold',
        color: '#333',
    },

    repoAuthor:{
        fontSize: 12,
        color: '#999',
    },
});