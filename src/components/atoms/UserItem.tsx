import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {ResponseUserT} from '../../types/response.type';

export default function UserItem({user}: {user: ResponseUserT}) {
  return (
    <View style={styles.container}>
      <Text style={styles.defaultText}>
        {user.id} - {user.name}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#232323',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  defaultText: {
    color: 'white',
  },
});
