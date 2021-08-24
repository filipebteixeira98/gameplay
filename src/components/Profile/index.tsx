import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

import { Avatar } from '../Avatar';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/filipebteixeira98.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Hello, </Text>
          <Text style={styles.username}>Ethan</Text>
        </View>
        <Text style={styles.message}>Today is victory day</Text>
      </View>
    </View>
  );
}
