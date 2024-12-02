import React, { useRef } from "react";
import { View, TouchableOpacity, Text, Animated } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export const AddRemoveButton = ({
  amount,
  value,
  setValue,
  operation = "add",
}) => {
  
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity
      style={{ alignItems: "center", paddingHorizontal: 10 }}
      onPress={() => {
        operation === "add"
          ? setValue(value + amount)
          : setValue(Math.max(0, value - amount));
        startShake();
      }}
    >
      <View
        style={{
          backgroundColor: operation === "add" ? "#00CC00" : "red",
          width: 50,
          height: 50,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {operation === "add" ? (
          <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
            <MaterialCommunityIcons name="plus" size={26} color="white" />
          </Animated.View>
        ) : (
          <Animated.View style={{ transform: [{ translateX: shakeAnimation }] }}>
            <MaterialCommunityIcons name="minus" size={26} color="white" />
          </Animated.View>
        )}
      </View>
      <Text style={{ color: "#5a595b", fontWeight: "600" }}>{amount} мл</Text>
    </TouchableOpacity>
  );
};
