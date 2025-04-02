export const defaultOptions = {
    headerShown: false,
  };
  
  import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
  import { useState, useEffect } from 'react';
  import { useLocalSearchParams, useRouter } from 'expo-router';
  import { Button, Icon } from '@rneui/themed';
  
  export default function DurationExercise() {
    const { name, suggested } = useLocalSearchParams();
    const router = useRouter();
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
  
    useEffect(() => {
      let timer: any;
      if (running) {
        timer = setInterval(() => setTime((t) => t + 1), 1000);
      }
      return () => clearInterval(timer);
    }, [running]);
  
    const format = (s: number) =>
      `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  
    return (
      <SafeAreaView style={styles.container}>
        {/* Back Arrow */}
        <View style={styles.backIconWrapper}>
          <Icon
            name="arrow-back"
            type="material"
            color="#025043"
            size={28}
            onPress={() => router.back()}
          />
        </View>
  
        <View style={styles.innerContent}>
          <View style={styles.buttonWrapper}>
            <Button
              title={`Try ${suggested}`}
              onPress={() =>
                router.push(
                  `/${suggested === 'Jump Rope' || suggested === 'Plank' ? 'duration' : 'repetition'}?name=${suggested}&suggested=${name}`
                )
              }
              buttonStyle={styles.buttonSuggestion}
              titleStyle={styles.buttonTextSuggestion}
            />
          </View>
  
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>Time: {format(time)}</Text>
  
          <View style={styles.buttonWrapper}>
            <Button
              title="Start"
              onPress={() => setRunning(true)}
              disabled={running}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
            />
          </View>
  
          <View style={styles.buttonWrapper}>
            <Button
              title="Stop"
              onPress={() => setRunning(false)}
              disabled={!running}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
            />
          </View>
  
          <View style={styles.buttonWrapper}>
            <Button
              title="Reset"
              onPress={() => {
                setTime(0);
                setRunning(false);
              }}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
            />
          </View>
  
          <View style={styles.buttonWrapper}>
            <Button
              title="Home"
              onPress={() => router.push('/')}
              buttonStyle={styles.buttonAlt}
              titleStyle={styles.buttonTextAlt}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4fb9af',
      padding: 20,
    },
    backIconWrapper: {
      position: 'absolute',
      top: Platform.OS === 'android' ? StatusBar.currentHeight ?? 40 : 20,
      left: 20,
      zIndex: 10,
      marginTop: 30,
    },
    innerContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
      color: '#025043',
    },
    subtitle: {
      fontSize: 18,
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
    buttonAlt: {
      backgroundColor: '#025043',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 12,
    },
    buttonTextAlt: {
      color: '#b3e0dc',
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonSuggestion: {
      backgroundColor: '#025043',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 12,
      marginBottom: 20,
    },
    buttonTextSuggestion: {
      color: '#b3e0dc',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  