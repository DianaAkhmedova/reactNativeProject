import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { FontAwesome, Feather } from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Ліс",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
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
            name="comment-o"
            size={24}
            color="#BDBDBD"
            style={{ marginRight: 6 }}
          />
          <Text style={styles.comments}>0</Text>
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

const PostList = () => {
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
    marginTop: 32,
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
  comments: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  location: {
    fontSize: 16,
  },
});

export default PostList;
