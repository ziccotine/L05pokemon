import React from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View, Image, Button, Alert } from 'react-native';

const pokemonData = [
  {
    title: 'Fire',
    color: '#ff0000',
    icon: '🔥',
    data: [
      { name: 'Charmander', cardNumber: 168 },
      { name: 'Charmeleon', cardNumber: 169 },
    ],
  },
  {
    title: 'Water',
    color: '#0000ff',
    icon: '💧',
    data: [
      { name: 'Squirtle', cardNumber: 170 },
      { name: 'Wartortle', cardNumber: 171 },
    ],
  },
  {
    title: 'Earth',
    color: '#00ff00',
    icon: '🌏',
    data: [
      { name: 'Bulbasaur', cardNumber: 166 },
      { name: 'Ivysaur', cardNumber: 167 },
    ],
  },
  {
    title: 'Electric',
    color: '#cccc00',
    icon: '⚡',
    data: [
      { name: 'Pikachu', cardNumber: 173 },
      { name: 'Zepdos EX', cardNumber: 202 },
    ],
  },
];

const getCardImageUrl = (cardNumber) =>
    `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${cardNumber}-2x.png`;

const renderItem = ({ item }) => (
    <TouchableOpacity
        style={styles.card}
        onPress={() => Alert.alert('Pokemon Selected', item.name)}
    >
      <Text style={styles.cardText}>{item.name}</Text>
      <Image source={{ uri: getCardImageUrl(item.cardNumber) }} style={styles.cardImage} />
    </TouchableOpacity>
);

const App = () => {
  return (
      <View style={styles.container}>
        <Button
            title="Add Pokémon"
            onPress={() => Alert.alert('Add Pokémon', 'This button will be functional next lesson!')}
        />
        <SectionList
            sections={pokemonData}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, color, icon } }) => (
                <View style={[styles.sectionHeader, { backgroundColor: color }]}>
                  <Text style={styles.sectionHeaderText}>{icon} {title}</Text>
                </View>
            )}
            keyExtractor={(item, index) => item.name + index}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffbff1',
  },
  sectionHeader: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
  },
  cardImage: {
    width: 200,
    height: 280,
    borderRadius: 5,
  },
});

export default App;
