import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');

  const appointment = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Legendary',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '06/22 at 8:40 p.m',
      description: 'Today we are going to become challenger without lose',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Legendary',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '06/22 at 8:40 p.m',
      description: 'Today we are going to become challenger without lose',
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
      <View style={styles.content}>
        <ListHeader title="Scheduled matches" subtitle="Total of 6" />
        <FlatList style={styles.matches} showsVerticalScrollIndicator={false} ItemSeparatorComponent={() => <ListDivider />} data={appointment} keyExtractor={(item) => item.id} renderItem={({ item }) => (
          <Appointment data={item} />
        )} />
      </View>
    </View>
  );
}
