import React, { useState } from 'react';
import {  View, StyleSheet } from 'react-native';
import { useCalendarContext } from '../CalendarContext';
import { CALENDAR_HEIGHT } from '../enums';
import DateTimePicker from '@react-native-community/datetimepicker';
import {  getDate, getFormated,} from '../utils';
import dayjs from 'dayjs';

const TimeSelector = () => {
  const {
    selectedDateTo,
    selectedDate,
    currentDate,
    onSelectDateTo,
    onSelectDate,
  } = useCalendarContext();

  const [initialTime,setInitialTime] = useState<Date>(new Date())

const handleTimeChange = (time:any) => {
  setInitialTime(new Date(time))
const parsedTime = dayjs(time);
const hours = parsedTime.hour();
const minutes = parsedTime.minute();
  const newDate = getDate(selectedDate ? selectedDate : currentDate).hour(hours).minute(minutes);
  const newDateTo = getDate(selectedDateTo ? selectedDateTo : currentDate).hour(hours).minute(minutes);
  onSelectDate(getFormated(newDate));
  onSelectDateTo(getFormated(newDateTo), selectedDate);
}
  
  return (
    <View style={styles.container} testID="time-selector">
      <View
        style={styles.timePickerContainer}
      >
           <DateTimePicker
           textColor='white'
           style={styles.timePickerStyle}
          testID="dateTimePicker"
          themeVariant='dark'
          value={initialTime}
          mode='time'
          display='spinner'
          is24Hour={true}
          onChange={(value)=>{
            handleTimeChange(value.nativeEvent.timestamp)
          }}
        />
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

  timePickerContainer: {
    backgroundColor: 'rgba(118, 118, 128, 0.24)',
    borderRadius:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: CALENDAR_HEIGHT / 2,
  },
  timePickerStyle:{
    flex: 1,
    height: CALENDAR_HEIGHT / 2,
   },
});

export default TimeSelector;
