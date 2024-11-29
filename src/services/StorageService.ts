import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async <T>(key: string, value: T) => {
  try {
    const stringValue = JSON.stringify(value);

    await AsyncStorage.setItem(key, stringValue);
  } catch (e) {
    throw e;
  }
};

export const getData = async <T>(key: string): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key);

    return !value ? null : JSON.parse(value);
  } catch (e) {
    throw e;
  }
};
