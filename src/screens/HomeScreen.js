import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { useTheme } from '../themes/ThemeContext';

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Image 
          source={require('../../assets/icon.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Welcome to our App!
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.text }]}>
          Explore our services and features
        </Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Learn More"
            color={theme.colors.primary}
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 400,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
  },
});
