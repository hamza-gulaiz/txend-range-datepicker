import React from 'react';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

export default function App() {


  return (
            <DateTimePicker
              value={dayjs()}
              //minimumDate={dayjs().startOf('day')}
              //maximumDate={dayjs().add(3, 'day').endOf('day')}
              //firstDayOfWeek={1}
              headerButtonsPosition="right"
              displayFullDays={true}
           
              onValueChange={(to,from) => {
                console.log('date range', to,from);
                // setValue(date);
              }}
              // headerButtonColor={theme?.mainColor}
              // selectedItemColor={theme?.mainColor}
              // eslint-disable-next-line react-native/no-inline-styles
              selectedTextStyle={{
                fontWeight: 'bold',
                // color: theme?.activeTextColor,
              }}
              // eslint-disable-next-line react-native/no-inline-styles
              todayContainerStyle={{
                borderWidth: 1,
              }}
              mode="datetime"
            />
  );
}
