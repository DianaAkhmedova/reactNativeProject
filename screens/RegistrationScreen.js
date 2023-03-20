import { useState } from "react";

import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { AntDesign, Ionicons } from "@expo/vector-icons";

const image = "./assets/images/bg.jpg";
const initialState = { login: "", email: "", password: "" };

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [hidePassword, setHidePassword] = useState(true);
  const [inputBgColor, setInputBgColor] = useState("#F6F6F6");
  const [inputBorderColor, setInputBorderColor] = useState("#E8E8E8");

  const { login, email, password } = state;

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const keyboardHideOnBtn = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  //   const customOnFocus = () => {
  //     TextInput?.onFocus;
  //     setInputBgColor("#ffffff");
  //     setInputBorderColor("#FF6C00");
  //   };

  //   const customOnBlur = () => {
  //     TextInput?.onBlur;
  //     setInputBgColor("#F6F6F6");
  //     setInputBorderColor("#E8E8E8");
  //   };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.registrationContainer}>
          <View style={styles.avatarBox}>
            <View style={styles.avatar}>
              <AntDesign
                // name={isAvatar ? "pluscircleo" : "closecircleo"}
                name="pluscircleo"
                size={25}
                color={"#FF6C00"}
                style={{
                  position: "absolute",
                  top: 81,
                  right: -12,
                }}
              />
            </View>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.form}>
            <View>
              <TextInput
                value={login}
                style={{
                  ...styles.input,
                  backgroundColor: inputBgColor,
                  borderColor: inputBorderColor,
                }}
                placeholder={"Логін"}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyboard(true)}
                selectionColor={"#FF6C00"}
                // onFocus={customOnFocus}
                // onBlur={customOnBlur}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                value={email}
                style={{
                  ...styles.input,
                  backgroundColor: inputBgColor,
                  borderColor: inputBorderColor,
                }}
                placeholder={"Адреса електронної пошти"}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyboard(true)}
                selectionColor={"#FF6C00"}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                // onFocus={customOnFocus}
                // onBlur={customOnBlur}
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                value={password}
                style={{
                  ...styles.input,
                  marginBottom: isShowKeyboard ? 32 : 0,
                  backgroundColor: inputBgColor,
                  borderColor: inputBorderColor,
                }}
                secureTextEntry={hidePassword}
                placeholder={"Пароль"}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyboard(true)}
                selectionColor={"#FF6C00"}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                // onFocus={customOnFocus}
                // onBlur={customOnBlur}
              />
              <Ionicons
                onPress={() => setHidePassword(!hidePassword)}
                name={hidePassword ? "md-eye-off" : "md-eye"}
                size={30}
                color={"#000000"}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 16,
                  color: "#808080",
                }}
              />
            </View>
            {!isShowKeyboard && (
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.8}
                onPress={keyboardHideOnBtn}
              >
                <Text style={styles.btnTitle}>Зареєструватися</Text>
              </TouchableOpacity>
            )}
          </View>
          {!isShowKeyboard && (
            <Text style={styles.text}>Вже є акаунт? Увійти</Text>
          )}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  registrationContainer: {
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
    fontSize: 16,
    paddingLeft: 16,
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    color: "#212121",
    // borderColor: "#E8E8E8",
    // backgroundColor: "#F6F6F6",
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
    color: "#f0f8ff",
    fontSize: 16,
  },
  text: {
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
    marginTop: 16,
    marginBottom: 78,
  },
});
