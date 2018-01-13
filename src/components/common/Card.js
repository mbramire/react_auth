import React from 'react';
import { View } from 'react-native';

// Funtional component
const Card = (props) => {
  // props.children is required to render anything enclosed in the Card componenet
  return (
    <View style={styles.containerStyle} >
      { props.children }
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
