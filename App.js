import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import RepetitionExercise from "./src/components/RepetitionExercise";
import DurationExercise from "./src/components/DurationExercise";
import RunningExercise from "./src/components/RunningExercise";

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exerciseType, setExerciseType] = useState(null);

  const exercises = [
    { name: "Push-Ups", type: "repetition" },
    { name: "Squats", type: "repetition" },
    { name: "Jump Rope", type: "duration" },
    { name: "Plank", type: "duration" },
    { name: "Running", type: "running" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Tracker</Text>

      {!selectedExercise && (
        <View>
          <Text style={styles.subtitle}>Select an Exercise:</Text>
          {exercises.map((exercise, index) => (
            <View key={index} style={styles.buttonWrapper}>
              <Button
                title={exercise.name}
                onPress={() => {
                  setSelectedExercise(exercise.name);
                  setExerciseType(exercise.type);
                }}
              />
            </View>
          ))}
        </View>
      )}

      {exerciseType === "repetition" && <RepetitionExercise name={selectedExercise} />}
      {exerciseType === "duration" && <DurationExercise name={selectedExercise} />}
      {exerciseType === "running" && <RunningExercise name={selectedExercise} />}

      {selectedExercise && (
        <View style={{ marginTop: 20 }}>
          <Button
            title="Go Back"
            onPress={() => {
              setSelectedExercise(null);
              setExerciseType(null);
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonWrapper: {
    marginVertical: 5,
  },
});
