import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { LoadingScreen } from "@/components/loading-screen";

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8B9F8",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
    borderBottomWidth: 2,
    paddingBottom: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
