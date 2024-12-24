import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.city}>
        {weather.name}, {weather.sys.country}
      </Text>
      <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
      <Text style={styles.description}>{weather.weather[0].description}</Text>
      <Text style={styles.details}>Humidity: {weather.main.humidity}%</Text>
      <Text style={styles.details}>Wind Speed: {weather.wind.speed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e8f1e7',
    Text: Avenir,
    borderRadius: 8,
    shadowColor: '#6060e1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default WeatherDisplay;
