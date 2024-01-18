import React, { useState } from 'react';
import dayjs from 'dayjs';
import DateTimePicker,{DateType} from "txend-react-native-ui-datepicker";
import { StyleSheet,  View} from 'react-native';

export default function App() {
  
  const [value, setValue] = useState<DateType>(dayjs());
  return (

    <View style={{padding:20,marginTop:30,backgroundColor:'black'}}>

            <DateTimePicker
              //minimumDate={dayjs().startOf('day')}
              //maximumDate={dayjs().add(3, 'day').endOf('day')}
              // firstDayOfWeek={1}
              value={value}
              displayFullDays={true}
              mode="datetime"
              calendarTextStyle={styles.calendarTextStyle}
              selectedTextStyle={styles.selectedTextStyle}
              selectedItemColor={'rgba(10, 132, 255, 0.6)'}
              headerContainerStyle={styles.headerContainerStyle}
              headerTextStyle={styles.headerTextStyle}
              headerButtonColor='white'
              headerButtonsPosition="right"
              dayContainerStyle={styles.dayContainerStyle}
              weekDaysTextStyle={styles.weekDaysTextStyle}
              timePickerContainerStyle={styles.timePickerContainerStyle}
              timePickerTextStyle={styles.timePickerTextStyle}
              monthContainerStyle={styles.monthContainerStyle}
              yearContainerStyle={styles.yearContainerStyle}
              onValueChange={(to: DateType,from: DateType) => {
                console.log('date range', to,from);
                setValue(from)
              }}
              
              />
              </View>
   
  );
}
const styles = StyleSheet.create({
  calendarTextStyle:{
    color:'white',
    // fontFamily: fonts.SF_PRO_TEXT,
    fontSize: 20,
    fontWeight: '400',
  },
  selectedTextStyle:{
    color: 'rgba(10, 132, 255, 1)',
    // fontFamily: fonts.SF_PRO_TEXT,
    fontSize: 20,
    fontWeight: '500',
  },
  headerContainerStyle:{
// backgroundColor:'red',
  },
  headerTextStyle:{
    color: 'white',
    // fontFamily: fonts.SF_PRO_TEXT,
    fontSize: 20,
    fontWeight: '500',
  },
  dayContainerStyle:{
    // backgroundColor: 'red',
    // borderRadius: wp(5),
  },
  weekDaysTextStyle :{
    color: 'rgba(235, 235, 245, 0.3)',
    // fontFamily: fonts.SF_PRO_TEXT,
    fontSize: 15,
    fontWeight: '500',
  },
  timePickerContainerStyle:{
    borderRadius:10,
    backgroundColor: 'rgba(118, 118, 128, 0.24)',
  },
  timePickerTextStyle: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },
  monthContainerStyle: {
    backgroundColor: 'rgba(118, 118, 128, 0.24)',
    borderColor: 'rgba(118, 118, 128, 0.24)',
  },
  yearContainerStyle:{
    backgroundColor: 'rgba(118, 118, 128, 0.24)',
    borderColor: 'rgba(118, 118, 128, 0.24)',
  },
});