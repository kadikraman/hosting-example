import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function HostingScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1D6B2", dark: "#1E3A34" }}
      headerImage={
        <IconSymbol
          size={150}
          color="#0a7ea4"
          name="shippingbox.fill"
          style={{ position: "absolute", bottom: 10 }}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">EAS Hosting example</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
