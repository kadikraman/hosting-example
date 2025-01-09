import { StyleSheet, Pressable } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function HomeScreen() {
  const fetchGreeting = async () => {
    const response = await fetch("/api/greeting");
    const data = await response.json();
    alert(data.greeting);
  };

  const postGreeting = async () => {
    const response = await fetch("/api/greeting?name=Kadi", { method: "POST" });
    const data = await response.json();
    alert(data.greeting);
  };

  const postGraphql = async () => {
    const response = await fetch("/api/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "{ greeting }",
      }),
    });
    const data = await response.json();

    alert(data.data.greeting);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1D6B2", dark: "#1E3A34" }}
      headerImage={
        <IconSymbol
          size={180}
          color="#0a7ea4"
          name="shippingbox.fill"
          style={styles.icon}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hosting example</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Open an API route</ThemedText>
        <Pressable onPress={fetchGreeting}>
          <ThemedText style={{ textDecorationLine: "underline" }}>
            GET /api/greeting
          </ThemedText>
        </Pressable>
        <Pressable onPress={postGreeting}>
          <ThemedText style={{ textDecorationLine: "underline" }}>
            POST /api/greeting
          </ThemedText>
        </Pressable>
        <Pressable onPress={postGraphql}>
          <ThemedText style={{ textDecorationLine: "underline" }}>
            POST /api/graphql
          </ThemedText>
        </Pressable>
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
  icon: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
