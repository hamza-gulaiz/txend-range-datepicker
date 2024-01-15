import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useCalendarContext } from '../CalendarContext';
import { CalendarViews } from '../enums';
import { formatTimeWithAmPm } from '../utils';

const Footer = () => {
  const {
    selectedDate,
    selectedDateTo,
    calendarView,
    setCalendarView,
    mode,
    theme,
  } = useCalendarContext();

  const time = formatTimeWithAmPm(
    selectedDateTo ? selectedDateTo : selectedDate
  );

  return (
    <View
      style={[styles.headerContainer, theme?.headerContainerStyle]}
      accessibilityRole="header"
    >
      <View style={styles.container}>

        <Text style={[styles.text, theme?.headerTextStyle]}>Ends</Text>

        {mode === 'datetime' && calendarView !== CalendarViews.year ? (
          <Pressable
            onPress={() =>
              setCalendarView(
                calendarView === CalendarViews.time
                  ? CalendarViews.day
                  : CalendarViews.time
              )
            }
            accessibilityRole="button"
            accessibilityLabel={time}
          >
            <View
              style={[styles.textContainer, theme?.headerTextContainerStyle]}
            >
              <Text style={[styles.text, theme?.headerTextStyle]}>{time}</Text>
            </View>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    marginTop:15,
    borderTopWidth: 1,
    borderColor: 'rgba(84, 84, 88, 0.65)',
  },
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  selectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(118, 118, 128, 0.24)',
    alignItems:'center',
    justifyContent: 'center',
    marginHorizontal: 0,
    paddingHorizontal: 0,
    paddingVertical: 5,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF',
  },
  iconContainer: {
    padding: 4,
  },
  prev: {
    marginRight: 3,
  },
  next: {
    marginLeft: 3,
  },
  row: {
    flexDirection: 'row',
  },
});

export default Footer;
