import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native';

export default function App() {
  const [boxValues, setBoxValues] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [boxHiddenValues, setBoxHiddenValues] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [currentHiddenPlayer, setCurrentHiddenPlayer] = useState(-1);

  function handlePress(index) {
    if (boxValues[index] !== '') return;
    if (boxHiddenValues[index] !== '') return;

    let newValues = boxValues.slice();
    let newHiddenValues = boxHiddenValues.slice();

    newValues[index] = currentPlayer;
    newHiddenValues[index] = currentHiddenPlayer;

    setBoxValues(newValues);
    setHiddenBoxValues(newHiddenValues);
    setCurrentHiddenPlayer(currentHiddenPlayer == -1 ? 1 : -1);
  }

  //
  let winningConditons = [
    [1, 2, 3][(4, 5, 6)][(7, 8, 9)][(1, 4, 7)][(2, 5, 8)][(3, 6, 9)][(1, 5, 9)][
      (3, 5, 7)
    ],
  ];
  function handleCompleteReset() {
    setBoxValues(['', '', '', '', '', '', '', '', '']);
    setCurrentPlayer((currentPlayer = useState('X')));
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Pressable
          key={0}
          style={styles.box}
          onPress={function () {
            handlePress(0);
          }}
        >
          <Text style={styles.boxText}>{boxValues[0] || 'Box 1'}</Text>
        </Pressable>
        <Pressable
          key={1}
          style={styles.box}
          onPress={function () {
            handlePress(1);
          }}
        >
          <Text style={styles.boxText}>{boxValues[1] || 'Box 2'}</Text>
        </Pressable>
        <Pressable
          key={2}
          style={styles.box}
          onPress={function () {
            handlePress(2);
          }}
        >
          <Text style={styles.boxText}>{boxValues[2] || 'Box 3'}</Text>
        </Pressable>
        <Pressable
          key={3}
          style={styles.box}
          onPress={function () {
            handlePress(3);
          }}
        >
          <Text style={styles.boxText}>{boxValues[3] || 'Box 4'}</Text>
        </Pressable>
        <Pressable
          key={4}
          style={styles.box}
          onPress={function () {
            handlePress(4);
          }}
        >
          <Text style={styles.boxText}>{boxValues[4] || 'Box 5'}</Text>
        </Pressable>
        <Pressable
          key={5}
          style={styles.box}
          onPress={function () {
            handlePress(5);
          }}
        >
          <Text style={styles.boxText}>{boxValues[5] || 'Box 6'}</Text>
        </Pressable>
        <Pressable
          key={6}
          style={styles.box}
          onPress={function () {
            handlePress(6);
          }}
        >
          <Text style={styles.boxText}>{boxValues[6] || 'Box 7'}</Text>
        </Pressable>
        <Pressable
          key={7}
          style={styles.box}
          onPress={function () {
            handlePress(7);
          }}
        >
          <Text style={styles.boxText}>{boxValues[7] || 'Box 8'}</Text>
        </Pressable>
        <Pressable
          key={8}
          style={styles.box}
          onPress={function () {
            handlePress(8);
          }}
        >
          <Text style={styles.boxText}>{boxValues[8] || 'Box 9'}</Text>
        </Pressable>
        <Pressable
          onPress={function () {
            handleCompleteReset();
          }}
        >
          <Text style={styles.boxText}>Reset</Text>
        </Pressable>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '33.33%',
    height: '33.33%',
    backgroundColor: '#000',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  boxText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center', // Center the text
  },
});

// 1) square - grids
// 2) logic for alternating
// 3) if 1, 2, 3 have some input show winning
