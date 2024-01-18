import React,{useState} from 'react';
import {  View, StyleSheet } from 'react-native';
import { useCalendarContext } from '../CalendarContext';
import { CALENDAR_HEIGHT } from '../enums';
import { PickerIOS } from '@react-native-picker/picker'
import { getDate, getFormated } from '../utils';

const hour_list = Array.from({ length: 11 }, (_, index) => ({ index: index + 1, value: index + 1 }));
const minute_list = Array.from({ length: 59 }, (_, index) => ({ index: index + 1, value: index + 1 }));

const TimeSelector = () => {
  const {
    selectedDateTo,
    selectedDate,
    currentDate,
    onSelectDateTo,
    onSelectDate,
    // theme,
  } = useCalendarContext();
  const [hoursValue, setHoursValue] = useState(1);
  const [minutesValue, setMinutesValue] = useState(15);
  
  return (
    <View style={styles.container} testID="time-selector">
      <View
        style={styles.timePickerContainer}
      >
        <View style={styles.wheelContainer}>
        <PickerIOS
          selectedValue={hoursValue}
          itemStyle={styles.itemPickerStyle}
     
          onValueChange={(value: any) => {
            setHoursValue(value)
            const newDate = getDate(selectedDate ? selectedDate : currentDate).hour(value);
            const newDateTo = getDate(selectedDateTo ? selectedDateTo : currentDate).hour(value);
            onSelectDate(getFormated(newDate));
            onSelectDateTo(getFormated(newDateTo), selectedDate);
          }}
        >
            {hour_list.map((item,index)=>(
            <PickerIOS.Item color='white' key={index} label={`${item.value}`} value={`${item.value}`} />
        ))}
        </PickerIOS>
        </View>
        <View style={styles.wheelContainer} />
        <PickerIOS
          selectedValue={minutesValue}
          itemStyle={styles.itemPickerStyle}
          onValueChange={(value: any) => {
            setMinutesValue(value)
            const newDate = getDate(selectedDate ? selectedDate : currentDate).minute(value);
            const newDateTo = getDate(selectedDateTo ? selectedDateTo : currentDate).minute(value);
            onSelectDateTo(getFormated(newDateTo), selectedDate);
            onSelectDate(getFormated(newDate));
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
