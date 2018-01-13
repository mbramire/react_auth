import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

// class based Component
class LoginForm extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '', error: '', loading: false };
    // we bind this to these functions to retain the
    // instance when the function is passed through arguments.
    this.onLoginFailed = this.onLoginFailed.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  //authenticate
  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        // no account exists, create an account
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFailed);
      });
  }

  onLoginFailed() {
    this.setState({
      email: '',
      password: '',
      error: 'Invalid Login',
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={() => this.onButtonPress()} >
        Login
      </Button>
    );
  }

  render() {
    // Input in this case is refered to as a controlled componenet.
    return (
      <Card>
        <CardSection>
          <Input
            label='email'
            placeholder='your@email.com'
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='password'
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle} >
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
