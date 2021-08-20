import React from 'react';
import { View, Image, Text } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';

import illustrationImg from '../../assets/illustration.png';

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        source={illustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Connect {'\n'}
          and organize your {'\n'}
          games
        </Text>
        <Text style={styles.subtitle}>
          Create groups to play your {'\n'}
          favorite games with your friends
        </Text>
        <ButtonIcon activeOpacity={0.7} title="Sign in with Discord" />
      </View>
    </View>
  );
}
