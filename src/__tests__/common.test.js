import React from 'react';
import { render, screen } from '@testing-library/react-native';
import DateTimePicker from '../DateTimePicker';
describe('COMMON TESTS', () => {
    test('should render with default options', () => {
        render(React.createElement(DateTimePicker, null));
        expect(screen.toJSON()).toMatchSnapshot();
    });
});
