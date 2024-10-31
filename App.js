import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  Alert,
  TextInput,
} from 'react-native';

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

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [player1Name, setPlayer1Name] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  function handlePress(index) {
    if (boxValues[index] !== '') return;
    let newValues = boxValues.slice();
    newValues[index] = currentPlayer;
    setBoxValues(newValues);
    if (checkWin(newValues)) {
      if (currentPlayer === 'X') {
        setPlayer1Score(player1Score + 1);
      } else {
        setPlayer2Score(player2Score + 1);
      }
      setTimeout(() => {
        Alert.alert(
          `${
            currentPlayer === 'X' ? player1Name : player2Name
          } you have won well done mate :)`
        );
        handleCompleteReset();
      }, 250);
    } else if (newValues.every((value) => value !== '')) {
      Alert.alert("It's a draw!");
      handleCompleteReset();
    } else {
      setCurrentPlayer(currentPlayer == 'X' ? 'O' : 'X');
    }
  }

  //
  let winningConditons = [
    [0, 1, 2], //first row
    [3, 4, 5], //second row
    [6, 7, 8], //third row
    [0, 3, 6], //first colloumn
    [1, 4, 7], // second coloumn
    [2, 5, 8], //third column
    [0, 4, 8], //diagonal
    [2, 4, 6], //diagonal
  ];

  function checkWin(boxValues) {
    return winningConditons.some((condition) => {
      return condition.every((index) => boxValues[index] === currentPlayer);
    }); //I thank stack exchange for this very elegant soloution you are my hero and have saved me countless times
  }

  function handleCompleteReset() {
    setBoxValues(['', '', '', '', '', '', '', '', '']);
    setCurrentPlayer('X');
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
          <Text style={styles.boxText}>{boxValues[0] || ''}</Text>
        </Pressable>
        <Pressable
          key={1}
          style={styles.box}
          onPress={function () {
            handlePress(1);
          }}
        >
          <Text style={styles.boxText}>{boxValues[1] || ''}</Text>
        </Pressable>
        <Pressable
          key={2}
          style={styles.box}
          onPress={function () {
            handlePress(2);
          }}
        >
          <Text style={styles.boxText}>{boxValues[2] || ''}</Text>
        </Pressable>
        <Pressable
          key={3}
          style={styles.box}
          onPress={function () {
            handlePress(3);
          }}
        >
          <Text style={styles.boxText}>{boxValues[3] || ''}</Text>
        </Pressable>
        <Pressable
          key={4}
          style={styles.box}
          onPress={function () {
            handlePress(4);
          }}
        >
          <Text style={styles.boxText}>{boxValues[4] || ''}</Text>
        </Pressable>
        <Pressable
          key={5}
          style={styles.box}
          onPress={function () {
            handlePress(5);
          }}
        >
          <Text style={styles.boxText}>{boxValues[5] || ''}</Text>
        </Pressable>
        <Pressable
          key={6}
          style={styles.box}
          onPress={function () {
            handlePress(6);
          }}
        >
          <Text style={styles.boxText}>{boxValues[6] || ''}</Text>
        </Pressable>
        <Pressable
          key={7}
          style={styles.box}
          onPress={function () {
            handlePress(7);
          }}
        >
          <Text style={styles.boxText}>{boxValues[7] || ''}</Text>
        </Pressable>
        <Pressable
          key={8}
          style={styles.box}
          onPress={function () {
            handlePress(8);
          }}
        >
          <Text style={styles.boxText}>{boxValues[8] || ''}</Text>
        </Pressable>
        <View style={styles.resetContainer}>
          <Pressable style={styles.resetButton} onPress={handleCompleteReset}>
            <Text style={styles.boxText}>Reset</Text>
          </Pressable>
        </View>
        <View style={styles.playerContainer}>
          <TextInput
            style={styles.input}
            placeholder='Player 1 Name'
            placeholderTextColor='#FFF'
            onChangeText={setPlayer1Name}
            value={player1Name}
          />
          <Text style={styles.scoreText}> {player1Score}</Text>
        </View>
        <View style={styles.playerContainer}>
          <TextInput
            style={styles.input}
            placeholder='Player 2 Name'
            placeholderTextColor='#FFF'
            onChangeText={setPlayer2Name}
            value={player2Name}
          />
          <Text style={styles.scoreText}> {player2Score}</Text>
        </View>

        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  resetContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  nameContainer: {
    marginBottom: 20,
    width: '40%',
  },
  input: {
    height: 40,
    borderColor: '#FFF',
    borderWidth: 1,
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  scoreContainer: {
    marginBottom: 20,
  },
  scoreText: {
    color: '#FFF',
    fontSize: 24,
    textAlign: 'center',
  },
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
    height: 200,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  boxText: {
    color: '#FFF',
    fontSize: 50,
    textAlign: 'center',
    lineHeight: 50,
  },
});

// 1) square - grids
// 2) logic for alternating
// 3) if 1, 2, 3 have some input show winning
