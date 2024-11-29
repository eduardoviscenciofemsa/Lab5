import {FlatList, View, StyleSheet} from 'react-native';
import React from 'react';
import {ResponseUserT} from '../../types/response.type';
import UserItem from '../atoms/UserItem';

export function UserList({users}: {users: ResponseUserT[]}) {
  return (
    <FlatList
      data={users}
      contentContainerStyle={styles.contentContainer}
      renderItem={({item, index}) => {
        return (
          <View key={index}>
            <UserItem user={item} />
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  defaultText: {
    color: 'white',
  },
});
