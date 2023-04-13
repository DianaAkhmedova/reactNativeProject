import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { AntDesign, Feather } from "@expo/vector-icons";

import ProfilePostList from "../../components/ProfilePostList";

const image = "../../../assets/images/bg.jpg";
import { useUser } from "../../../userContext";

const ProfileScreen = ({ navigation }) => {
  const { username, logOut } = useUser();

  return (
    <ImageBackground source={require(image)} style={styles.imgBg}>
      <View style={styles.registrationContainer}>
        <TouchableOpacity
          style={{ position: "absolute", top: 22, right: 16 }}
          onPress={() => {
            logOut();
          }}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <View style={styles.avatarBox}>
          <View style={styles.avatar}>
            <AntDesign
              // name={isAvatar ? "pluscircleo" : "closecircleo"}
              name="closecircleo"
              size={25}
              color={"#BDBDBD"}
              style={{
                position: "absolute",
                top: 81,
                right: -12,
              }}
            />
          </View>
        </View>
        <Text style={styles.title}>{username}</Text>
        <ProfilePostList navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  registrationContainer: {
    paddingBottom: 43,
    paddingLeft: 16,
    paddingRight: 16,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
  },
  avatarBox: {
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    top: -60,
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  title: {
    marginTop: 92,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
    lineHeight: 35,
    letterSpacing: 0.01,
  },
  form: {
    marginTop: 32,
    marginHorizontal: 16,
  },

  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    paddingLeft: 16,
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    color: "#212121",
  },
  btn: {
    marginTop: 43,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontFamily: "Roboto-Regular",
    color: "#f0f8ff",
    fontSize: 16,
    lineHeight: 19,
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 78,
  },
  text: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
  },
});

export default ProfileScreen;
