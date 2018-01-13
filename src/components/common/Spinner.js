import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// Funtional component
const Spinner = ({ size }) => {
  // props.children is required to render anything enclosed in the Card componenet
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
