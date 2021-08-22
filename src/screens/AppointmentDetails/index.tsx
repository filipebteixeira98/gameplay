import React from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

import BannerImg from '../../assets/banner.png';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Lisa',
      avatar_url:
        'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
      status: 'online',
    },
    {
      id: '2',
      username: 'Josh',
      avatar_url:
        'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Kurt&hairColor=Platinum&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Dizzy&eyebrowType=FlatNatural&mouthType=Twinkle&skinColor=DarkBrown',
      status: 'offline',
    },
  ];

  return (
    <View style={styles.container}>
      <Background>
        <Header
          title="Details"
          action={
            <BorderlessButton>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          }
        />
        <ImageBackground source={BannerImg} style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.title}>Legendaries</Text>
            <Text style={styles.subtitle}>
              Today we are going to become legendary without lose
            </Text>
          </View>
        </ImageBackground>
        <ListHeader title="Players" subtitle="Total of 3" />
        <FlatList
          data={members}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Member key={item.id} data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.members}
        />
        <View style={styles.footer}>
          <ButtonIcon title="Join the match" />
        </View>
      </Background>
    </View>
  );
}
