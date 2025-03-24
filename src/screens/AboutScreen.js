import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../themes/ThemeContext';

export default function AboutScreen() {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          About Us
        </Text>
        
        <Text style={[styles.paragraph, { color: theme.colors.text }]}>
          This is a sample app to demonstrate React Native capabilities.
          It was automatically generated based on a website's design.
        </Text>
        
        <Text style={[styles.subtitle, { color: theme.colors.text }]}>
          Features:
        </Text>
        
        <View style={styles.featureList}>
          <Text style={[styles.feature, { color: theme.colors.text }]}>• Responsive design</Text>
          <Text style={[styles.feature, { color: theme.colors.text }]}>• Theme based on the original website</Text>
          <Text style={[styles.feature, { color: theme.colors.text }]}>• Navigation between screens</Text>
          <Text style={[styles.feature, { color: theme.colors.text }]}>• Sample content</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  featureList: {
    marginLeft: 10,
  },
  feature: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 5,
  },
});
