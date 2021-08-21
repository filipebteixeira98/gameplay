import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
  View,
  Image,
  Text,
} from 'react-native';

import { styles } from './styles';

import discordImg from '../../assets/discord.png';

type Props = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton {...rest} style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
