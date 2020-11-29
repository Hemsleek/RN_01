import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Platform, Dimensions, Image, TextInput, FlatList } from 'react-native'

//images
import conical from './app/assets/funnel.png'
import search from './app/assets/search.png'

export default function App() {

  console.log(Dimensions.get('screen'))
  const [challenge, setChallenge] = useState('ch1')
  const boxes = ['Purple', 'Pinks']

  const options = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' },
    { color: 'indigo' },
    { color: 'black' },
    { color: 'yellow' },
    { color: 'violet' },
    { color: 'dodgerblue' }
  ]

  const challengeDisplay = (ch) => ch == challenge

  const ItemSeparatorLine = () => {
    return (
      <View
        style={{
          height: 10,
          width: "100%",

        }}
      />
    );
  };

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        {challengeDisplay('ch1') &&
          <>
            <View style={styles.ch1}>

              {
                boxes.map((col, colIndex) => (<View key={`box-${colIndex}`} style={styles[col]} />))
              }

            </View>
            <Image style={styles.ch1_image} source={require('./app/assets/ch1.png')} />
          </>
        }

        {challengeDisplay('ch3') &&
          <>
            <View style={ch3.ch3}>
              <Text style={ch3.heading}>What to eat</Text>
              <Image source={conical} style={ch3.funnel} />
            </View>
            <View style={ch3.searchBox}>
              <Image source={search} style={ch3.searchIcon} />
              <TextInput typeof='search' underlineColorAndroid='transparent' placeholder="Search" style={ch3.searchInput} />
            </View>

            <FlatList
              data={options}
              renderItem={option => <View style={{ backgroundColor: option.item.color, height: 180, flex: 1, borderRadius: 8, marginRight: 10 }} />}
              numColumns={2}
              keyExtractor={item => item.color}
              ItemSeparatorComponent={ItemSeparatorLine}
              showsVerticalScrollIndicator={false}
            />

          </>
        }
        <Text allowFontScaling={true} onPress={() => challenge == 'ch1' ? setChallenge('ch3') : setChallenge('ch1')} style={ch3.buttonSwitch}>
          {challenge == 'ch1' ? 'NEXT' : 'PREV'}
        </Text>
      </View>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  screen: {
    backgroundColor: "white",
    flex: 1,
    padding: 40,
    paddingTop: Math.floor(StatusBar.currentHeight + 30) - Math.floor(StatusBar.currentHeight + 30) % 10,
    paddingBottom: 10


  },
  ch1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15

  },
  Purple: {
    backgroundColor: '#D2B0E0',
    width: 100,
    height: 100,
    borderRadius: 5

  },
  Pinks: {
    backgroundColor: '#F5A492',
    width: 100,
    height: 100,
    borderRadius: 5

  },
  ch1_image: { flex: 1, resizeMode: 'cover', width: '100%' },
})

const ch3 = StyleSheet.create({
  buttonSwitch: { textAlign: 'center', paddingVertical: 10, color: 'tomato' },
  ch3: {
    flexDirection: 'row',
    // paddingVertical: 10
  },
  heading: {
    flex: 1,
    textAlign: 'center'
  },
  funnel: {
    width: 18,
    height: 18,
    marginRight: 10
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderStyle: 'solid',
    paddingVertical: 7,
    paddingHorizontal: 13

  },
  searchIcon: {
    //  paddingHorizontal: 5,
    width: 18,
    height: 18

  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 16
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex: 1
  },

})
