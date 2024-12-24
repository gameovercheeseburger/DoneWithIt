import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getWeatherData } from '../api/weatherAPI';
import WeatherDisplay from '../components/WeatherDisplay';

const WeatherScreen = () => {
  const [weather, setWeather] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  const handlePress = async (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    // Save the coordinates
    setCoordinates({ latitude, longitude });

    // Fetch weather data for the selected location
    const weatherData = await getWeatherData(latitude, longitude);
    setWeather(weatherData);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.0501, // Default coordinates for Calgary, Canada
          longitude: -114.0853,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handlePress}
      >
        {coordinates && (
          <Marker coordinate={coordinates} title="Selected Location" />
        )}
      </MapView>

      <WeatherDisplay weather={weather} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f1e7',
  },
  map: {
    width: '100%',
    height: '60%',
  },
});

export default WeatherScreen;
