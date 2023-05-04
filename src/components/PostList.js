import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import { FontAwesome, Feather } from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Ліс",
  },
];

const Item = ({ title, location, photo, navigation, latitude, longitude }) => (
  <View style={styles.item}>
    <View style={styles.photoWrapper}>
      <Image style={{ flex: 1, borderRadius: 8 }} source={{ uri: photo }} />
    </View>
    <Text style={styles.text}>{title}</Text>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Коментарі", {photo});
        }}
      >
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Карта", { latitude, longitude });
          }}
        >
          <Feather
            name="map-pin"
            size={24}
            color="#BDBDBD"
            style={{ marginRight: 4 }}
          />
        </TouchableOpacity>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  </View>
);

const PostList = ({ items, navigation }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <Item
          latitude={item.photoLocation.coords.latitude}
          longitude={item.photoLocation.coords.longitude}
          title={item.title}
          location={item.location}
          photo={item.photo}
          navigation={navigation}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
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
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
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
    textDecorationLine: "underline",
  },
});

export default PostList;
