import React from 'react';
import {
    StyleSheet, Text,
    TextInput, TouchableOpacity, View,
    Button, ImageEditor,
} from 'react-native';
import loginService from '../services/login.service';

export default class LoginComponent extends React.Component {
    static navigationOptions = {
        title: 'Scv Chatter',
    };

    state = {
        name: 'Alex B',
        email: 'test3@gmail.com',
        password: 'test123',
        avatar: '',
    };

    // using Fire.js
    onPressLogin = async () => {
        console.log('pressing login... email:' + this.state.email);
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            avatar: this.state.avatar,
        };

        const response = loginService.login(
            user,
            this.loginSuccess,
            this.loginFailed
        );
    };

    loginSuccess = () => {
        console.log('login successful, navigate to chat.');
        this.props.navigation.navigate('Chat', {
            name: this.state.name,
            email: this.state.email,
            avatar: this.state.avatar,
        });
    };
    loginFailed = () => {
        console.log('login failed ***');
        alert('Login failure. Please tried again.');
    };


    onChangeTextEmail = email => this.setState({email});
    onChangeTextPassword = password => this.setState({password});


    render() {
        return (
            <View>
                <Text style={styles.title}>Email:</Text>
                <TextInput
                    style={styles.nameInput}
                    placeHolder="test123@gmail.com"
                    onChangeText={this.onChangeTextEmail}
                    value={this.state.email}
                />
                <Text style={styles.title}>Password:</Text>
                <TextInput
                    style={styles.nameInput}
                    onChangeText={this.onChangeTextPassword}
                    value={this.state.password}
                />
                <Button
                    title="Login"
                    style={styles.buttonText}
                    onPress={this.onPressLogin}
                />

                <Button
                    title="Sign Up"
                    style={styles.buttonText}
                    onPress={() => this.props.navigation.navigate("Register")}
                />
            </View>
        );
    }
}

const offset = 16;
const styles = StyleSheet.create({
    title: {
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
    },
    nameInput: {
        height: offset * 4,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1,
        fontSize: offset,
    },
    buttonText: {
        marginLeft: offset,
        fontSize: 42,
    },
});
