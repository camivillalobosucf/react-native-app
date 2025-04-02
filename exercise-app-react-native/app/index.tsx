import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { useRouter } from 'expo-router';

const exercises = [
  { name: "Push-Ups", type: "repetition", suggested: "Jump Rope" },
  { name: "Squats", type: "repetition", suggested: "Plank" },
  { name: "Jump Rope", type: "duration", suggested: "Push-Ups" },
  { name: "Plank", type: "duration", suggested: "Squats" },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.innerContent}></View>
      <Text style={styles.title}>Exercise Tracker</Text>

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.buttonWrapper}>
            <Button
              title={item.name}
              onPress={() =>
                router.push(
                  `/${item.type}?name=${encodeURIComponent(item.name)}&suggested=${encodeURIComponent(item.suggested)}`
                )
              }
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
              containerStyle={styles.buttonWrapper}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4fb9af',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  
  innerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#025043',
  },
  buttonWrapper: {
    marginVertical: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#b3e0dc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  buttonText: {
    color: '#025043',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



