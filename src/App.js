import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common'; //by default this will pick up index.js in components/common
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCnNyeLJ9OknMBj0lt8MA0vu0iYS90_bWY',
      authDomain: 'reactauth-33b6e.firebaseapp.com',
      databaseURL: 'https://reactauth-33b6e.firebaseio.com',
      projectId: 'reactauth-33b6e',
      storageBucket: 'reactauth-33b6e.appspot.com',
      messagingSenderId: '750187947598'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
