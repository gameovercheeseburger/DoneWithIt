import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSearch = () => {
    if (city && country) {
      onSearch(city, country);  
      setCity('');  
    } else {
      alert('Please enter both city and country!');
    }
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Enter City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Country Code (e.g., CA, US)"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
  },
});

export default SearchBar;
