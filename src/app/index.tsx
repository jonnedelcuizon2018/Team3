import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>TEAM 3</Text>
      </View>

      <View style={styles.content}>

        <Text style={styles.welcome}>
          Welcome to
        </Text>

        <Text style={styles.teamName}>
          KEYBOARD WARRIORS
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/team")}
          style={styles.teamButton}
        >
          <Text style={styles.buttonText}>
            Tap here to continue
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F7",
  },

  header: {
    height: 75,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  welcome: {
    fontSize: 22,
    color: "#555",
  },

  teamName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 35,
  },

  teamButton: {
    backgroundColor: "#111827",
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  tapText: {
    marginTop: 5,
    fontSize: 14,
    color: "#D1D5DB",
  },
});