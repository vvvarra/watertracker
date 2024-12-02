import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Animated, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AddRemoveButton } from "./components/WaterTr";

const amounts = [250, 500, 1000, 1500];



export default function App() {
  const [waterGoal, setWaterGoal] = useState(3000);
  const [waterDrank, setWaterDrank] = useState(0);

  const barHeight = useRef(new Animated.Value(0)).current;
  const progressPercent = barHeight.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", `100%`],
  });


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.waterGoalContainer}>
        <Text style={[styles.blueText, { fontSize: 24 }]}>Ваша цель</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.grayText, { fontSize: 28 }]}>
            {waterGoal} мл{" "}
          </Text>
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => setWaterGoal(waterGoal + 250)}
          >
            <Ionicons name="add-circle" size={26} color="#00CC00" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => setWaterGoal(waterGoal - 250)}
          >
            <Ionicons name="remove-circle" size={26} color="red" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ProgressView */}

      <View
        style={{
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-around",
        }}
      >
        {/* Water You've Drunk Label */}
        <View style={{ justifyContent: "center", paddingTop: 100, paddingBottom: 100 }}>
          <Text style={[styles.grayText, { fontSize: 28 }]}>Вы выпили</Text>
          <Text style={[styles.blueText, { fontSize: 40 }]}>
            {waterDrank} мл 
            <Text> / </Text>
            <Text style={[styles.blueText, { fontSize: 40 }]}>
            {waterGoal} мл{" "}
          </Text>
          </Text>
         
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <Animated.View
            style={{
              height: progressPercent,
              backgroundColor: "#5abcd8",
              borderRadius: 40,
            }}
          />
        </View>
      </View>

      {/* Add Water */}
      <View style={styles.waterButtonsContainer}>
        {amounts.map((amount) => {
          return (
            <AddRemoveButton
              key={"add" + amount}
              amount={amount}
              value={waterDrank}
              setValue={setWaterDrank}
              operation="add"
            />
          );
        })}
      </View>

      {/* Remove Water */}
      <View style={styles.waterButtonsContainer}>
        {amounts.map((amount) => {
          return (
            <AddRemoveButton
              key={"remove" + amount}
              amount={amount}
              value={waterDrank}
              setValue={setWaterDrank}
              operation="remove"
            />
          );
        })}
      </View>
      
      <View
        style={{
          paddingVertical: 20,
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-between",
        }}
      >


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  waterButtonsContainer: {
    flexDirection: "row",
    paddingVertical: 30,
    width: "90%",
    justifyContent: "space-between",
  },
  waterGoalContainer: {
    padding: 50,
    alignItems: "center",
  },
  blueText: {
    color: "#090974",
    fontWeight: "600",
  },
  grayText: { color: "#323033", fontWeight: "600" },
  notificationButton: {
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    padding: 7,
  },
});