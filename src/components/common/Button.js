import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Funtional component
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  // props.children is required to render anything enclosed in the Card componenet
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} >
      <Text style={textStyle}>
        { children }
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, //fill container
    alignSelf: 'stretch', //position itself using flexbox rules
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
