import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../src/screens/HomeScreen';

// Mock the dependencies
jest.mock('../src/themes/ThemeContext', () => ({
  useTheme: () => ({
    theme: {
      colors: {
        primary: '#3498db',
        background: '#ffffff',
        text: '#333333',
      },
    },
  }),
}));

// Mock navigation
const navigation = { navigate: jest.fn() };

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen navigation={navigation} />).toJSON();
    expect(tree).toBeTruthy();
  });
});
