import React from 'react';
import { Text, View } from 'react-native';

// Functional Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle} >{ props.headerText }</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    paddingTop: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f50560',
    shadowColor: '#f85492',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
};

// make component available
export { Header };
