import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://icon-library.com/images/discord-app-icon/discord-app-icon-15.jpg';
  
  return (
    <Image source={{ uri }} style={styles.image} resizeMode="cover" />
  );
}
