import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { ThemedView } from "./themed-view";

const imuneImage = require("../assets/images/Imune.png");

interface LoadingScreenProps {
  imageUrl?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  imageUrl = "imune.png",
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
          <Image
            source={imuneImage}
            style={styles.image}
            resizeMode="contain"
          />
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

  image: {
    width: 180,
    height: 180,
    marginBottom: 24,
    borderRadius: 24,
  },
});
