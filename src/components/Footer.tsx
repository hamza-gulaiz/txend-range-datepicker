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
      style={[styles.footerContainer, theme?.footerContainerStyle]}
      accessibilityRole="header"
    >
        <Text style={[styles.text, theme?.footerTextStyle]}>Ends</Text>
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
              style={[styles.textContainer, theme?.footerTextContainerStyle]}
            >
              <Text style={[styles.text, theme?.footerTextStyle]}>{time}</Text>
            </View>
          </Pressable>
        ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    marginTop:10,
    height:55,
    borderTopWidth: 1,
    borderColor: 'rgba(84, 84, 88, 0.65)',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
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
    height:40,
    width:90
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
