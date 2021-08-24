import React from 'react';
import { View, FlatList } from 'react-native';

import { styles } from './styles';

import { Guild } from '../../components/Guild';

export function Guilds() {
  const guilds = [
    {
      id: '1',
      name: 'Legendaries',
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Guild key={item.id} data={item} />}
      />
    </View>
  );
}
