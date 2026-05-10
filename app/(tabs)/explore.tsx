import { Image } from "expo-image";
import { Platform, StyleSheet, Text } from "react-native";

import { ExternalLink } from "@/components/external-link";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/ui/collapsible";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Fonts } from "@/constants/theme";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Text
          style={{
            fontFamily: Fonts.rounded,
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          Explore
        </Text>
      </ThemedView>
      <Text>This app includes example code to help you get started.</Text>
      <Collapsible title="File-based routing">
        <Text>
          This app has two screens:{" "}
          <Text style={{ fontWeight: "600" }}>app/(tabs)/index.tsx</Text> and{" "}
          <Text style={{ fontWeight: "600" }}>app/(tabs)/explore.tsx</Text>
        </Text>
        <Text>
          The layout file in{" "}
          <Text style={{ fontWeight: "600" }}>app/(tabs)/_layout.tsx</Text> sets
          up the tab navigator.
        </Text>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <Text style={{ color: "#0a7ea4", textDecorationLine: "underline" }}>
            Learn more
          </Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <Text>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <Text style={{ fontWeight: "600" }}>w</Text> in the
          terminal running this project.
        </Text>
      </Collapsible>
      <Collapsible title="Images">
        <Text>
          For static images, you can use the{" "}
          <Text style={{ fontWeight: "600" }}>@2x</Text> and{" "}
          <Text style={{ fontWeight: "600" }}>@3x</Text> suffixes to provide
          files for different screen densities
        </Text>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <Text style={{ color: "#0a7ea4", textDecorationLine: "underline" }}>
            Learn more
          </Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <Text>
          This template has light and dark mode support. The{" "}
          <Text style={{ fontWeight: "600" }}>useColorScheme()</Text> hook lets
          you inspect what the user&apos;s current color scheme is, and so you
          can adjust UI colors accordingly.
        </Text>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <Text style={{ color: "#0a7ea4", textDecorationLine: "underline" }}>
            Learn more
          </Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <Text>
          This template includes an example of an animated component. The{" "}
          <Text style={{ fontWeight: "600" }}>components/HelloWave.tsx</Text>{" "}
          component uses the powerful{" "}
          <Text style={{ fontWeight: "600", fontFamily: Fonts.mono }}>
            react-native-reanimated
          </Text>{" "}
          library to create a waving hand animation.
        </Text>
        {Platform.select({
          ios: (
            <Text>
              The{" "}
              <Text style={{ fontWeight: "600" }}>
                components/ParallaxScrollView.tsx
              </Text>{" "}
              component provides a parallax effect for the header image.
            </Text>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
