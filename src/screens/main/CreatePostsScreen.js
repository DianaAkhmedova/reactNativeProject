import React from "react";
import { useState } from "react";

import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const initialState = { title: "", location: "" };

const CreatePostsScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const { title, location } = state;

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const keyboardHideOnBtn = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    if (title === "" || location === "") {
      alert("Всі поля повинні бути заповнені!");
      return;
    }
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View>
          <View style={styles.photoWrapper}>
            <TouchableOpacity
              style={{
                position: "absolute",
                backgroundColor: "#ffffff",
                paddingHorizontal: 18,
                paddingTop: 18,
                paddingBottom: 18,
                borderRadius: 50,
              }}
            >
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Завантажте фото</Text>
          <View style={styles.form}>
            <View style={{ marginTop: isShowKeyboard ? 5 : 32 }}>
              <TextInput
                value={title}
                placeholder={"Назва..."}
                placeholderTextColor={"#BDBDBD"}
                inputMode={"title"}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                selectionColor={"#FF6C00"}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, title: value }))
                }
                style={styles.input}
              />
            </View>
            <View style={{ marginTop: isShowKeyboard ? 5 : 16 }}>
              <Feather
                name="map-pin"
                size={24}
                color="#BDBDBD"
                style={{
                  position: "absolute",
                  top: 13,
                }}
              />
              <TextInput
                value={location}
                placeholder={"Місце..."}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                selectionColor={"#FF6C00"}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, location: value }))
                }
                style={{ ...styles.input, paddingLeft: 28 }}
              />
            </View>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={keyboardHideOnBtn}
            >
              <Text style={styles.btnTitle}>Опублікувати</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.deleteBtn} activeOpacity={0.8}>
          <AntDesign name="delete" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    paddingBottom: 34,
    paddingTop: 32,
    paddingHorizontal: 16,
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
    color: "#BDBDBD",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderWidth: 1,
    height: 50,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#E8E8E8",
    color: "#212121",
  },
  btn: {
    marginTop: 32,
    backgroundColor: "#F6F6F6",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
  },
  deleteBtn: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F6F6F6",
    height: 40,
    width: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostsScreen;
