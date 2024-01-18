import React from 'react';
import { View, StyleSheet } from 'react-native';

const TimerPicker = () => {


  return (
    <View style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  pickerContainer: {
    alignItems: 'center',
  },
  picker: {backgroundColor:'green', 
    height: 120,
    width: 80,
  },
  label: {
    marginTop: 5,
    color:'white'
  },
});

export default TimerPicker;
