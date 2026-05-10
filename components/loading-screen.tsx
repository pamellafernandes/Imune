import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";
import { ThemedView } from "./themed-view";

interface LoadingScreenProps {
  message?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = "IMUNE",
}) => {
  const textOpacity = useSharedValue(0.6);
  const textTranslateY = useSharedValue(0);

  useEffect(() => {
    textOpacity.value = withRepeat(
      withTiming(1, {
        duration: 1200,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );

    textTranslateY.value = withRepeat(
      withTiming(-18, {
        duration: 1200,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true,
    );
  }, []);

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{ translateY: textTranslateY.value }],
  }));

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={textAnimatedStyle}>
          <View style={styles.textBox}>
            <Text style={styles.loadingText}>{message}</Text>
          </View>
        </Animated.View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#E8B9F8",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderRadius: 12,
    borderWidth: 4,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },
  loadingText: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
    color: "#E8B9F8",
    textAlign: "center",
  },
});
