import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const members = [
  {
    id: "1",
    name: "Jonnedel",
    role: "Leader",
  },
  {
    id: "2",
    name: "Ian",
    role: "Member",
  },
  {
    id: "3",
    name: "Novie",
    role: "Member",
  },
  {
    id: "4",
    name: "Geoffrey",
    role: "Member",
  },
  {
    id: "5",
    name: "Maclarens",
    role: "Member",
  },
];

export default function Team() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>KEYBOARD WARRIORS</Text>

        <Text style={styles.subtitle}>TEAM 3</Text>

        <Text style={styles.instruction}>
          Select a member
        </Text>

        {members.map((member) => (
          <TouchableOpacity
            key={member.id}
            style={styles.memberCard}
            onPress={() =>
              router.push({
                pathname: "/profile",
                params: {
                  id: member.id,
                },
              })
            }
          >
            <View>
              <Text style={styles.memberName}>
                {member.name}
              </Text>

              <Text style={styles.memberRole}>
                {member.role}
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
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

  memberCard: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  memberName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  memberRole: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  arrow: {
    fontSize: 30,
    color: "#888",
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