import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const { photo } = route.params;

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const keyboardHideOnBtn = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    if (comment === "") {
      alert("Коментарій не може бути порожнім!");
      return;
    }
    console.log(comment);
    setComment("");
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View>
          <View style={styles.photoWrapper}>
            <Image
              style={{ flex: 1, borderRadius: 8 }}
              source={{ uri: photo }}
            />
          </View>
        </View>
        <View style={{ marginTop: 32, marginBottom: isShowKeyboard ? 300 : 0 }}>
          <View>
            <TextInput
              value={comment}
              placeholder={"Коментувати..."}
              placeholderTextColor={"#BDBDBD"}
              // inputMode={"title"}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              selectionColor={"#FF6C00"}
              onChangeText={(value) => setComment(value)}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={keyboardHideOnBtn}
            >
              <AntDesign name="arrowup" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  photoWrapper: {
    width: "100%",
    height: 240,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
  },
  input: {
    padding: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    color: "#212121",
  },
  btn: {
    position: "absolute",
    top: 10,
    right: 8,
    backgroundColor: "#FF6C00",
    height: 34,
    width: 34,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CommentsScreen;
