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

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>MY PROFILE</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>

        <View style={styles.avatarBorder}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/300?img=11",
            }}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.name}>Marclarens Cababan</Text>

        <Text style={styles.role}>
          TEAM 3 MEMBER
        </Text>

        <View style={styles.status}>
          <View style={styles.dot} />
          <Text style={styles.statusText}>ACTIVE MEMBER</Text>
        </View>

      </View>

      {/* Introduction */}
      <View style={styles.intro}>
        <Text style={styles.introTitle}>
          Hello! 👋
        </Text>

        <Text style={styles.introText}>
          Welcome to my profile. I am Marclarens Cababan,
          a member of Team 3 - Keyboard Warriors.
        </Text>
      </View>

      {/* Information */}
      <Text style={styles.sectionTitle}>
        PERSONAL DETAILS
      </Text>

      <View style={styles.detailsCard}>

        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>👤</Text>

          <View>
            <Text style={styles.detailLabel}>NAME</Text>
            <Text style={styles.detailValue}>
              Marclarens Cababan
            </Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>🎓</Text>

          <View>
            <Text style={styles.detailLabel}>COURSE</Text>
            <Text style={styles.detailValue}>
              BS Information Technology
            </Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>🎂</Text>

          <View>
            <Text style={styles.detailLabel}>AGE</Text>
            <Text style={styles.detailValue}>
              18 years old
            </Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>📧</Text>

          <View>
            <Text style={styles.detailLabel}>EMAIL</Text>
            <Text style={styles.detailValue}>
              marclarens@example.com
            </Text>
          </View>
        </View>

      </View>

      {/* Interests */}
      <Text style={styles.sectionTitle}>
        INTERESTS
      </Text>

      <View style={styles.interests}>

        <View style={styles.interestCard}>
          <Text style={styles.interestIcon}>🎮</Text>
          <Text style={styles.interestText}>Gaming</Text>
        </View>

        <View style={styles.interestCard}>
          <Text style={styles.interestIcon}>💻</Text>
          <Text style={styles.interestText}>Coding</Text>
        </View>

        <View style={styles.interestCard}>
          <Text style={styles.interestIcon}>🎵</Text>
          <Text style={styles.interestText}>Music</Text>
        </View>

      </View>

      {/* Quote */}
      <View style={styles.quoteCard}>
        <Text style={styles.quote}>
          "Keep learning, keep improving."
        </Text>

        <Text style={styles.quoteAuthor}>
          — Marclarens
        </Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => router.back()}
      >
        <Text style={styles.bottomButtonText}>
          BACK TO TEAM
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F2",
  },

  header: {
    height: 65,
    backgroundColor: "#14281D",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  backButton: {
    position: "absolute",
    left: 18,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#294C36",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "white",
    fontSize: 22,
  },

  profileCard: {
    backgroundColor: "#14281D",
    alignItems: "center",
    paddingBottom: 35,
    paddingTop: 25,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  avatarBorder: {
    width: 135,
    height: 135,
    borderRadius: 68,
    borderWidth: 4,
    borderColor: "#61D095",
    padding: 4,
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 65,
  },

  name: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15,
  },

  role: {
    color: "#9EE7B5",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
    letterSpacing: 1,
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#294C36",
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 12,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#61D095",
    marginRight: 7,
  },

  statusText: {
    color: "#B8EAC8",
    fontSize: 11,
    fontWeight: "bold",
  },

  intro: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 18,
  },

  introTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#14281D",
    marginBottom: 8,
  },

  introText: {
    fontSize: 15,
    color: "#647067",
    lineHeight: 23,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#506056",
    letterSpacing: 1.5,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 5,
  },

  detailsCard: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 18,
    padding: 8,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  detailIcon: {
    fontSize: 24,
    width: 45,
  },

  detailLabel: {
    fontSize: 10,
    color: "#8A968E",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  detailValue: {
    fontSize: 16,
    color: "#14281D",
    fontWeight: "600",
    marginTop: 3,
  },

  interests: {
    flexDirection: "row",
    marginHorizontal: 15,
  },

  interestCard: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 5,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  interestIcon: {
    fontSize: 28,
  },

  interestText: {
    color: "#294C36",
    fontWeight: "600",
    marginTop: 8,
  },

  quoteCard: {
    backgroundColor: "#DCEFE2",
    margin: 20,
    padding: 22,
    borderRadius: 18,
    alignItems: "center",
  },

  quote: {
    color: "#14281D",
    fontSize: 17,
    fontStyle: "italic",
    textAlign: "center",
  },

  quoteAuthor: {
    color: "#52705C",
    fontSize: 13,
    marginTop: 8,
  },

  bottomButton: {
    backgroundColor: "#14281D",
    marginHorizontal: 20,
    marginBottom: 40,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  bottomButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});