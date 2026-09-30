import { router, useLocalSearchParams } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// ─── Type Definitions (Clean Architecture) ───────────────────────────────────
interface MemberProfile {
  name: string;
  role: string;
  age: string;
  birthday: string;
  course: string;
  email: string;
  address: string;
  hobbies: string;
  favorite: string;
}

const members: Record<string, MemberProfile> = {
  "1": {
    name: "Jonnedel M. Cuizon",
    role: "Leader",
    age: "26",
    birthday: "July 1, 2000",
    course: "BS Information Technology",
    email: "jonnedelcuizon2018@email.com",
    address: "Purok Periko, Maslog, Danao City, Cebu",
    hobbies: "Gaming, Coding",
    favorite: "Computer Games",
  },

  "2": {
    name: "Ian Pitigo",
    role: "Member",
    age: "23",
    birthday: "September 29, 2003",
    course: "BS Information Technology",
    email: "ianpitogoos@gmail.com",
    address: "purok 3 sunflower, tayud,Consolacion Cebu",
    hobbies: "repairing basic pc parts, sounds tech, driving truck simulator, playing triple A games ",
    favorite: "Pragmata,Forza Horizon 6",
  },

  "3": {
    name: "Novie",
    role: "Member",
    age: "20",
    birthday: "March 3, 2006",
    course: "BS Information Technology",
    email: "member2@email.com",
    address: "Member 2 Address",
    hobbies: "Basketball, Gaming",
    favorite: "Basketball",
  },

  "4": {
    name: "Geoffrey Delan",
    role: "Member",
    age: "21",
    birthday: "January 19, 2005",
    course: "BS Information Technology",
    email: "gffrydln@gmail.com",
    address: "Luyang, Carmen, Cebu",
    hobbies: "Video Games, Rocket Sport",
    favorite: "Rocket Sport",
  },

  "5": {
    name: "Maclarens",
    role: "Member",
    age: "21",
    birthday: "May 5, 2005",
    course: "BS Information Technology",
    email: "member4@email.com",
    address: "Member 4 Address",
    hobbies: "Sports, Gaming",
    favorite: "Sports",
  },
};

export default function Profile() {
  const { id } = useLocalSearchParams();

  const memberId = typeof id === "string" ? id : "4";
  const member = members[memberId];

  if (!member) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Member not found.</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.content}>
        <Text style={styles.name}>{member.name}</Text>

        <View style={styles.roleContainer}>
          <Text style={styles.role}>{member.role}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Personal Information</Text>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Age</Text>
            <Text style={styles.value}>{member.age}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Birthday</Text>
            <Text style={styles.value}>{member.birthday}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Course</Text>
            <Text style={styles.value}>{member.course}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{member.email}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>{member.address}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Hobbies</Text>
            <Text style={styles.value}>{member.hobbies}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.label}>Favorite</Text>
            <Text style={styles.value}>{member.favorite}</Text>
          </View>
        </View>

        {/* ── Link to Member 4 Custom Screen ── */}
        {memberId === "4" && (
          <TouchableOpacity
            style={styles.customScreenButton}
            onPress={() => router.push("/member4")}
            <Text style={styles.customScreenText}>
              ✨ View Geoffrey's Portfolio Screen →
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← Back to Team</Text>
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
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },

  roleContainer: {
    backgroundColor: "#111827",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 25,
  },

  role: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },

  infoBox: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 10,
  },

  infoItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingVertical: 12,
  },

  label: {
    fontSize: 13,
    color: "#777",
    marginBottom: 4,
  },

  value: {
    fontSize: 17,
    color: "#222",
  },

  customScreenButton: {
    width: "100%",
    backgroundColor: "#4F80E1",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 18,
    shadowColor: "#4F80E1",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },

  customScreenText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  backButton: {
    width: "100%",
    backgroundColor: "#111827",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 14,
  },

  backText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },

  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F2F4F7",
  },

  errorText: {
    fontSize: 20,
    color: "#555",
    marginBottom: 20,
  },
});
