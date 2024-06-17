import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Octicons from '@expo/vector-icons/Octicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExternalLink, GradientBackground } from '@/components';
import { formatNumberToShort } from '@/utils';

import { RootStackParamList } from '@/types';

export const Details = ({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'Details'>) => {
  const { repoData } = route.params;
  const [userName, repoName] = repoData.full_name.split('/');
  return (
    <GradientBackground>
      <ScrollView>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Octicons name='arrow-left' size={24} />
            </TouchableOpacity>
            <Image source={{ uri: repoData.owner.avatar_url }} style={styles.image} />
            <Text style={styles.repoName}>
              {userName + '/'}
              <Text style={{ fontFamily: 'sf-bold' }}>{repoName}</Text>
            </Text>
            <View style={styles.statisticContainer}>
              <View style={styles.statisticGroup}>
                <Octicons name='eye' size={16} color={'#707070'} />
                <Text style={styles.info}>{formatNumberToShort(repoData.watchers_count)}</Text>
              </View>
              <View style={styles.statisticGroup}>
                <Octicons name='repo-forked' size={16} color={'#707070'} />
                <Text style={styles.info}>{formatNumberToShort(repoData.forks_count)}</Text>
              </View>
              <View style={styles.statisticGroup}>
                <Octicons name='star' size={16} color={'#707070'} />
                <Text style={styles.info}>{formatNumberToShort(repoData.stargazers_count)}</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.container}>
            <Text style={styles.repoDescription}>{repoData.description}</Text>
            {repoData.topics.length > 0 ? (
              <View>
                <Text style={styles.languagesTitle}>Languages</Text>
                {repoData.topics.map((language, index) => (
                  <Text key={index} style={styles.languagesItem}>
                    {language}
                  </Text>
                ))}
              </View>
            ) : null}
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.externalLinkContainer}>
        <ExternalLink href={repoData.html_url} />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 120
  },
  container: {
    paddingHorizontal: 30
  },
  image: {
    width: 78,
    height: 78,
    borderRadius: 10000,
    marginVertical: 16
  },
  statisticContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14
  },
  statisticGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  repoName: {
    fontSize: 18,
    fontFamily: 'sf-medium',
    marginBottom: 12
  },
  repoDescription: {
    color: '#242424',
    fontSize: 14,
    marginBottom: 24
  },
  info: {
    fontSize: 12,
    color: '#707070',
    fontFamily: 'sf-medium'
  },
  languagesContainer: {
    marginBottom: 8
  },
  languagesTitle: {
    fontFamily: 'sf-bold',
    fontSize: 14,
    color: '#000000',
    marginBottom: 16
  },
  languagesItem: {
    fontSize: 14,
    color: '#242424',
    marginBottom: 4
  },
  divider: {
    backgroundColor: '#DDDDDD',
    height: 1,
    marginVertical: 24
  },
  externalLinkContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 48,
    left: 0,
    paddingHorizontal: 30
  }
});
