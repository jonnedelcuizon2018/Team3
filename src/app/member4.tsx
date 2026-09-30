import { router } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MEMBER = {
  name: "Geoffrey Delan",
  role: "Member",
  nickname: "Geo",
  age: "21",
  birthday: "January 19, 2005",
  course: "BS Information Technology",
  email: "gffrydln@gmail.com",
  address: "Luyang, Carmen, Cebu",
  hobbies: "Video Games, Rocket Sport",
  favorite: "Rocket Sport",
  skills: ["React Native", "JavaScript", "TypeScript", "Git", "Expo"],
  motto: '"If you don\'t take risk, you can\'t create future." – Luffy',
};

export default function Member4Screen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backBtnText}>← Back</Text>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.heroCard,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>GD</Text>
        </View>

        <Text style={styles.heroName}>{MEMBER.name}</Text>
        <View style={styles.roleBadge}>
          <Text style={styles.roleBadgeText}>{MEMBER.role}</Text>
        </View>
        <Text style={styles.motto}>{MEMBER.motto}</Text>
      </Animated.View>

      <View style={styles.sectionTitleRow}>
        <Text style={styles.sectionTitle}>👤 Personal Info</Text>
      </View>
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nickname</Text>
          <Text style={styles.infoValue}>{MEMBER.nickname}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Age</Text>
          <Text style={styles.infoValue}>{MEMBER.age}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Birthday</Text>
          <Text style={styles.infoValue}>{MEMBER.birthday}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Course</Text>
          <Text style={styles.infoValue}>{MEMBER.course}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>{MEMBER.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Address</Text>
          <Text style={styles.infoValue}>{MEMBER.address}</Text>
        </View>
      </View>

      <View style={styles.sectionTitleRow}>
        <Text style={styles.sectionTitle}>🛠 Skills</Text>
      </View>
      <View style={styles.skillsContainer}>
        {MEMBER.skills.map((skill) => (
          <View key={skill} style={styles.skillBadge}>
            <Text style={styles.skillBadgeText}>{skill}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionTitleRow}>
        <Text style={styles.sectionTitle}>🎯 Hobbies & Interests</Text>
      </View>
      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Hobbies</Text>
          <Text style={styles.infoValue}>{MEMBER.hobbies}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Favorite</Text>
          <Text style={styles.infoValue}>{MEMBER.favorite}</Text>
        </View>
      </View>

      <View style={styles.sectionTitleRow}>
        <Text style={styles.sectionTitle}>⚡ Fun Facts</Text>
      </View>
      <View style={styles.funFactsContainer}>
        <View style={styles.funFactItem}>
          <Text style={styles.funFactEmoji}>🎮</Text>
          <Text style={styles.funFactText}>Passionate gamer — video games are life</Text>
        </View>
        <View style={styles.funFactItem}>
          <Text style={styles.funFactEmoji}>🚀</Text>
          <Text style={styles.funFactText}>Into Rocket Sport — speed and precision</Text>
        </View>
        <View style={styles.funFactItem}>
          <Text style={styles.funFactEmoji}>⚓</Text>
          <Text style={styles.funFactText}>Lives by Luffy's motto: take risks, create your future</Text>
        </View>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const ACCENT = "#4F80E1";
const ACCENT_LIGHT = "#EEF3FD";
const CARD_BG = "#FFFFFF";
const BG = "#F2F4F7";
const TEXT_PRIMARY = "#111827";
const TEXT_SECONDARY = "#6B7280";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },
  content: {
    padding: 20,
    paddingTop: 50,
  },
  backBtn: {
    alignSelf: "flex-start",
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: CARD_BG,
    borderRadius: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  backBtnText: {
    color: ACCENT,
    fontWeight: "700",
    fontSize: 14,
  },
  heroCard: {
    backgroundColor: ACCENT,
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    marginBottom: 24,
    shadowColor: ACCENT,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 8,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "rgba(255,255,255,0.25)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.5)",
  },
  avatarText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  heroName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
    textAlign: "center",
  },
  roleBadge: {
    backgroundColor: "rgba(255,255,255,0.22)",
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 14,
  },
  roleBadgeText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  motto: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 13,
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 20,
  },
  sectionTitleRow: {
    marginBottom: 10,
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: TEXT_PRIMARY,
  },
  infoCard: {
    backgroundColor: CARD_BG,
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  infoLabel: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    fontWeight: "600",
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: TEXT_PRIMARY,
    flex: 2,
    textAlign: "right",
    fontWeight: "500",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  skillBadge: {
    backgroundColor: ACCENT_LIGHT,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#C9D8F8",
  },
  skillBadgeText: {
    color: ACCENT,
    fontSize: 13,
    fontWeight: "600",
  },
  funFactsContainer: {
    backgroundColor: CARD_BG,
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    gap: 12,
  },
  funFactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  funFactEmoji: {
    fontSize: 22,
  },
  funFactText: {
    fontSize: 14,
    color: TEXT_PRIMARY,
    flex: 1,
  },
});
