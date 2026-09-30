import { router, useLocalSearchParams } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const members: any = {
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
    name: "Novie Mae R. Sagaysay",
    role: "Member",
    age: "25",
    birthday: "November 27, 2000",
    course: "BS Information Technology",
    email: "noviemaesagaysay450@gmail.com",
    address: "Sandayong Sur, Danao City",
    hobbies: "Driving, watching movies",
    favorite: "seafoods, humba",
  },

  "4": {
    name: "MEMBER 3",
    role: "Member",
    age: "21",
    birthday: "April 4, 2005",
    course: "BS Information Technology",
    email: "member3@email.com",
    address: "Member 3 Address",
    hobbies: "Coding, Movies",
    favorite: "Movies",
  },

  "5": {
    name: "MEMBER 4",
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

  const member = members[id as string];

  if (!member) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Member not found.
        </Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>
            ← Go Back
          </Text>
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

        <Text style={styles.name}>
          {member.name}
        </Text>

        <View style={styles.roleContainer}>
          <Text style={styles.role}>
            {member.role}
          </Text>
        </View>

        <View style={styles.infoBox}>

          <Text style={styles.infoTitle}>
            Personal Information
          </Text>

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

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>
            ← Back to Team
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

  backButton: {
    width: "100%",
    backgroundColor: "#111827",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 25,
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