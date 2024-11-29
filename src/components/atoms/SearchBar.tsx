import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import _ from 'lodash';

type PropsT = {
  onSearch: (text: string) => void;
  isLoading: boolean;
};

export default function SearchBar({onSearch, isLoading}: PropsT) {
  const handleOnSearch = _.debounce(text => {
    onSearch(text);
  }, 500);

  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <Text style={styles.baseText}>Search</Text>
        {isLoading && <ActivityIndicator size="small" color="#fff" />}
      </View>
      <View>
        <TextInput
          placeholder="Type here to search"
          placeholderTextColor={'#a2a2a2'}
          onChangeText={handleOnSearch}
          style={styles.textInputContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
  },
  baseText: {
    color: '#fff',
  },
  textInputContainer: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
  },
});
