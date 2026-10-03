import { router } from "expo-router";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>

      {/* Cover */}
      <View style={styles.cover}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.coverTitle}>TEAM 3</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>

        <Image
          source={{
            uri: "https://i.pravatar.cc/300?img=12",
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>Novie Mae Sagaysay</Text>

        <Text style={styles.role}>
          Team Leader • Keyboard Warriors
        </Text>

        <Text style={styles.location}>
          📍 Philippines
        </Text>

      </View>

      {/* Stats */}
      <View style={styles.statsCard}>

        <View style={styles.stat}>
          <Text style={styles.statNumber}>01</Text>
          <Text style={styles.statLabel}>Leader</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.stat}>
          <Text style={styles.statNumber}>05</Text>
          <Text style={styles.statLabel}>Members</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.stat}>
          <Text style={styles.statNumber}>03</Text>
          <Text style={styles.statLabel}>Team</Text>
        </View>

      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Personal Information
        </Text>

        <View style={styles.card}>

          <View style={styles.item}>
            <View style={styles.circle}>
              <Text>🎂</Text>
            </View>

            <View>
              <Text style={styles.itemTitle}>Birthday</Text>
              <Text style={styles.itemText}>
                January 1, 2008
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.circle}>
              <Text>🎓</Text>
            </View>

            <View>
              <Text style={styles.itemTitle}>Course</Text>
              <Text style={styles.itemText}>
                BS Information Technology
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.circle}>
              <Text>📧</Text>
            </View>

            <View>
              <Text style={styles.itemTitle}>Email</Text>
              <Text style={styles.itemText}>
                novz@example.com
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.circle}>
              <Text>🏠</Text>
            </View>

            <View>
              <Text style={styles.itemTitle}>Address</Text>
              <Text style={styles.itemText}>
                Cebu, Philippines
              </Text>
            </View>
          </View>

        </View>
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          About Me
        </Text>

        <View style={styles.aboutCard}>
          <Text style={styles.aboutText}>
            Hi! I'm Novie, the leader of Team 3 —
            Keyboard Warriors. I enjoy coding, gaming,
            and learning about technology.
          </Text>
        </View>
      </View>

      {/* Hobbies */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          My Hobbies
        </Text>

        <View style={styles.hobbies}>

          <View style={styles.hobby}>
            <Text style={styles.hobbyEmoji}>🎮</Text>
            <Text style={styles.hobbyText}>Gaming</Text>
          </View>

          <View style={styles.hobby}>
            <Text style={styles.hobbyEmoji}>💻</Text>
            <Text style={styles.hobbyText}>Coding</Text>
          </View>

          <View style={styles.hobby}>
            <Text style={styles.hobbyEmoji}>🎧</Text>
            <Text style={styles.hobbyText}>Music</Text>
          </View>

        </View>
      </View>

      {/* Back */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          BACK TO TEAM
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f5f7",
  },

  cover: {
    height: 190,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
  },

  coverTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 3,
  },

  backButton: {
    position: "absolute",
    top: 45,
    left: 20,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "white",
    fontSize: 24,
  },

  profileSection: {
    backgroundColor: "white",
    alignItems: "center",
    paddingBottom: 25,
  },

  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 63,
    borderWidth: 6,
    borderColor: "white",
    marginTop: -63,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 12,
  },

  role: {
    fontSize: 15,
    color: "#6b7280",
    marginTop: 5,
  },

  location: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 7,
  },

  statsCard: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  stat: {
    alignItems: "center",
    flex: 1,
  },

  statNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },

  statLabel: {
    color: "#6b7280",
    marginTop: 4,
  },

  divider: {
    width: 1,
    height: 35,
    backgroundColor: "#ddd",
  },

  section: {
    marginTop: 25,
    marginHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 10,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
  },

  circle: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#f0f1f3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  itemTitle: {
    color: "#9ca3af",
    fontSize: 12,
  },

  itemText: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 2,
  },

  aboutCard: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 18,
  },

  aboutText: {
    color: "#4b5563",
    fontSize: 15,
    lineHeight: 23,
  },

  hobbies: {
    flexDirection: "row",
    gap: 10,
  },

  hobby: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    width: 100,
  },

  hobbyEmoji: {
    fontSize: 28,
  },

  hobbyText: {
    marginTop: 7,
    fontWeight: "600",
    color: "#374151",
  },

  button: {
    backgroundColor: "#111827",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});