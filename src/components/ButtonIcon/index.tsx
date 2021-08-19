import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

import discordImg from '../../assets/discord.png';

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
