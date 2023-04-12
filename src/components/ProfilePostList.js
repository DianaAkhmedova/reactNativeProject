import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Ліс",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    {/* //     <Text style={styles.title}>{title}</Text> */}
    <View style={styles.photoWrapper}></View>
    <Text style={styles.text}>{title}</Text>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
      }}
    >
      <TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome
            name="comment"
            size={24}
            color="#FF6C00"
            style={{ marginRight: 6 }}
          />
          <Text style={styles.comments}>0</Text>
          <AntDesign
            name="like2"
            size={24}
            color="#FF6C00"
            style={{ marginRight: 6 }}
          />
          <Text style={styles.likes}>0</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Feather
          name="map-pin"
          size={24}
          color="#BDBDBD"
          style={{ marginRight: 4 }}
        />
        <Text style={styles.location}>Ivano-Frankivs'k Region, Ukraine</Text>
      </View>
    </View>
  </View>
);

const ProfilePostList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    // backgroundColor: "#f9c2ff",
    marginTop: 32,
  },
  title: {
    fontSize: 32,
  },
  photoWrapper: {
    width: "100%",
    height: 240,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    color: "#212121",
  },
  comments: { fontSize: 16, color: "#212121", marginRight: 24 },
  likes: { fontSize: 16, color: "#212121", marginRight: 24 },
  location: {
    fontSize: 16,
  },
});

export default ProfilePostList;
