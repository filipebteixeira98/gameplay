import React, { useState } from 'react';
import { View } from 'react-native';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
        <View style={styles.content}>
          <ListHeader title="Scheduled matches" subtitle="Total of 6" />
        </View>
      </View>
    </View>
  );
}
