import React,{useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useCalendarContext } from '../CalendarContext';

import { CALENDAR_HEIGHT } from '../enums';
// import { getParsedDate, getDate, getFormated } from '../utils';

import { PickerIOS } from '@react-native-picker/picker'

const hour_list = Array.from({ length: 12 }, (_, index) => ({ index: index + 1, value: index + 1 }));
const minute_list = Array.from({ length: 60 }, (_, index) => ({ index: index + 1, value: index + 1 }));

const TimeSelector = () => {
  const {
    // selectedDateTo,
    // selectedDate,
    // currentDate,
    // onSelectDateTo,
    // onSelectDate,
    theme,
  } = useCalendarContext();
  // const { hour, minute } = getParsedDate(
  //   selectedDateTo ? selectedDateTo : selectedDate
  // );

  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(15);

  

  return (
    <View style={styles.container} testID="time-selector">
      <View
        style={styles.timePickerContainer}
      >
        <View style={styles.wheelContainer}>
        <PickerIOS
          selectedValue={hours}
          itemStyle={styles.itemPickerStyle}
     
          onValueChange={(value: any) => {
            setHours(value)
          }}
        >
            {hour_list.map((item,index)=>(
            <PickerIOS.Item color='white' key={index} label={`${item.value}`} value={`${item.value}`} />
        ))}
        </PickerIOS>
        </View>
        <View style={styles.wheelContainer} />
        <PickerIOS
          selectedValue={minutes}
          itemStyle={styles.itemPickerStyle}
          onValueChange={(value: any) => {
            setMinutes(value)
          }}
        >
        {minute_list.map((item,index)=>(
            <PickerIOS.Item color='white' key={index} label={`${item.value}`} value={`${item.value}`} />
        ))}
        </PickerIOS>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
  height: 120,
  width: 80,
},
  wheelContainer: {
    flex:1,
  },
  timePickerContainer: {
    backgroundColor: 'rgba(118, 118, 128, 0.24)',
    borderRadius:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: CALENDAR_HEIGHT / 2,
  },
  timePickerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemPickerStyle: {
    height: CALENDAR_HEIGHT /2,
    width:95,

  },
});

export default TimeSelector;
