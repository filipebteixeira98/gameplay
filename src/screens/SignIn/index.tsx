import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';

import illustrationImg from '../../assets/illustration.png';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
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
          <ButtonIcon title="Sign in with Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
