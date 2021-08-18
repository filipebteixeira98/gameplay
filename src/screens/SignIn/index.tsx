import React from 'react';
import { StatusBar, View, Image, Text } from 'react-native';

import { styles } from './styles';

import illustrationImg from '../../assets/illustration.png';

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={illustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          your games {'\n'}
          easily
        </Text>
        <Text style={styles.subtitle}>
          Create groups to play your {'\n'}
          favorite games with your friends
        </Text>
      </View>
    </View>
  );
}
