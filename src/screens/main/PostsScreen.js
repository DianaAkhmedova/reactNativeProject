import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { useUser } from "../../../userContext";

import PostList from "../../components/PostList";

const PostsScreen = ({ navigation }) => {
  const { username, userEmail } = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.avatarBox}></View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{username}</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
        </View>
      </View>
      <PostList navigation={navigation} />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingLeft: 16,
    paddingRight: 16,
  },
  userContainer: {
    flexDirection: "row",
    marginTop: 32,
  },
  avatarBox: {
    marginRight: 8,
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  userInfo: {
    justifyContent: "center",
  },
  userName: {
    fontWeight: "700",
    color: "#212121",
  },
  userEmail: {
    fontWeight: "400",
    color: "rgba(33, 33, 33, 0.8)",
  },
});
