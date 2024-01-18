import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'


const TimerPicker = () => {
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  // const [seconds, setSeconds] = useState('0');

  const handleHoursChange = (value: React.SetStateAction<string>) => {
    setHours(value);
  };

  const handleMinutesChange = (value: React.SetStateAction<string>) => {
    setMinutes(value);
  };

  // const handleSecondsChange = (value: React.SetStateAction<string>) => {
  //   setSeconds(value);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={hours}
          onValueChange={handleHoursChange}
          style={styles.picker}
        >
          {[...Array(12).keys()].map((hour) => (
            <Picker.Item key={hour} label={`${hour}`} value={`${hour}`} />
          ))}
        </Picker>
        <Text style={styles.label}>Hours</Text>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={minutes}
          onValueChange={handleMinutesChange}
          style={styles.picker}
        >
          {[...Array(60).keys()].map((minute) => (
            <Picker.Item key={minute} label={`${minute}`} value={`${minute}`} />
          ))}
        </Picker>
        <Text style={styles.label}>Minutes</Text>
      </View>

      {/* <View style={styles.pickerContainer}>
        <Picker
          selectedValue={seconds}
          onValueChange={handleSecondsChange}
          style={styles.picker}
        >
          {[...Array(60).keys()].map((second) => (
            <Picker.Item key={second} label={`${second}`} value={`${second}`} />
          ))}
        </Picker>
        <Text style={styles.label}>Seconds</Text>
      </View> */}
    </View>
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
