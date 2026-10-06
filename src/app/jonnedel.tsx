import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Profile() {
  return (
    <ScrollView>
    <View style={styles.container}>

      {/* Name */}
      <Text style={styles.name}>Jonnedel</Text>
      <Text style={styles.role}>TEAM LEADER</Text>

      {/* Information */}
      <View style={styles.infoBox}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.info}>Jonnedel</Text>

        <Text style={styles.label}>Role</Text>
        <Text style={styles.info}>Leader</Text>

        <Text style={styles.label}>Age</Text>
        <Text style={styles.info}>26</Text>

        <Text style={styles.label}>Birthday</Text>
        <Text style={styles.info}>July 1, 2000</Text>

        <Text style={styles.label}>Course</Text>
        <Text style={styles.info}>BS Information Technology</Text>

        <Text style={styles.label}>Email / Contact</Text>
        <Text style={styles.info}>jonnedelcuizon2018@gmail.com / 09916033660</Text>

        <Text style={styles.label}>Hobbies</Text>
        <Text style={styles.info}>Gaming</Text>

        <Text style={styles.label}>Favorite</Text>
        <Text style={styles.info}>CrossfirePH</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/team")}
      >
        <Text style={styles.buttonText}>BACK</Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },

  header: {
    width: "100%",
    padding: 20,
    backgroundColor: "#222",
    alignItems: "center",
  },

  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginTop: 25,
  },

  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },

  role: {
    fontSize: 15,
    color: "gray",
    marginTop: 4,
  },

  infoBox: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    marginTop: 8,
  },

  info: {
    fontSize: 17,
    marginTop: 2,
    marginBottom: 5,
  },

  button: {
    backgroundColor: "#222",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});