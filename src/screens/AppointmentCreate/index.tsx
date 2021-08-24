import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');

  return (
    <View style={styles.container}>
      <Background>
        <Header title="Schedule match" />
        <Text
          style={[
            styles.label,
            { marginLeft: 24, marginTop: 36, marginBottom: 18 },
          ]}
        >
          Category
        </Text>
        <CategorySelect
          hasCheckBox
          setCategory={setCategory}
          categorySelected={category}
        />
        <View style={styles.form}>
          <RectButton>
            <View style={styles.select}>
              {
                // <View style={styles.image} />
                <GuildIcon />
              }
              <View style={styles.selectBody}>
                <Text style={styles.label}>Pick one server</Text>
              </View>
              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />
            </View>
          </RectButton>
          <SmallInput />
        </View>
      </Background>
    </View>
  );
}
