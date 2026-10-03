import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TeamScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>KEYBOARD WARRIORS</Text>

        <Text style={styles.subtitle}>TEAM 3</Text>

        <Text style={styles.instruction}>
          Select a member
        </Text>

          <View>
            <Text style={styles.section}>Leader</Text>
          </View>

            <TouchableOpacity  onPress={() => router.push("/jhonnedel")}>
              <View style={styles.memberCard}>
              <Text style={styles.memberName}>
                Jhonnedel Cuizon
              </Text>
            </View>
            </TouchableOpacity> 

          <View>
            <Text style={styles.section}>Member</Text>
          </View>

            <TouchableOpacity>
              <View style={styles.memberCard}>
              <Text style={styles.memberName}>
                Ian Pitogo
              </Text>
            </View>
            </TouchableOpacity> 

            <TouchableOpacity>
              <View style={styles.memberCard}>
              <Text style={styles.memberName}>
                Novie Mae Sagaysay
              </Text>
            </View>
            </TouchableOpacity> 

            <TouchableOpacity>
              <View style={styles.memberCard}>
              <Text style={styles.memberName}>
                Geoffrey Delan
              </Text>
            </View>
            </TouchableOpacity> 


            <TouchableOpacity>
              <View style={styles.memberCard}>
              <Text style={styles.memberName}>
                Marclarens Cababan
              </Text>
            </View>
            </TouchableOpacity> 

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.backText}>
            ← Back to Home
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F7",
  },

  content: {
    padding: 20,
    paddingTop: 50,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
    color: "#555",
  },

  instruction: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    color: "#777",
  },

  section: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 15
  },

  memberCard: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },

  memberName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  backButton: {
    backgroundColor: "#111827",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },

  backText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});