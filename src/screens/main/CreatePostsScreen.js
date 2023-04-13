// import React, { useState } from "react";
// import { Camera, CameraType } from "expo-camera";

// import {
//   TouchableWithoutFeedback,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Keyboard,
//   Image,
// } from "react-native";

// import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";

// const initialState = { title: "", location: "" };

// const CreatePostsScreen = () => {
//   const [state, setState] = useState(initialState);
//   const [camera, setCamera] = useState(null);
//   const [photo, setPhoto] = useState("");
//   const [isShowKeyboard, setIsShowKeyboard] = useState(false);

//   const { title, location } = state;

//   const keyboardHide = () => {
//     setIsShowKeyboard(false);
//     Keyboard.dismiss();
//   };

//   const keyboardHideOnBtn = () => {
//     Keyboard.dismiss();
//     setIsShowKeyboard(false);
//     if (title === "" || location === "") {
//       alert("Всі поля повинні бути заповнені!");
//       return;
//     }
//     console.log(state);
//     setState(initialState);
//   };

//   const takePhoto = async () => {
//     console.log(camera.takePictureAsync());
//     const photo = await camera.takePictureAsync();
//     setPhoto(photo.uri);
//   };

//   return (
//     <TouchableWithoutFeedback onPress={keyboardHide}>
//       <View style={styles.container}>
//         <View>
//           <Camera style={styles.photoWrapper} ref={setCamera}>
//             <TouchableOpacity
//               onPress={takePhoto}
//               style={{
//                 position: "absolute",
//                 backgroundColor: "#ffffff",
//                 paddingHorizontal: 18,
//                 paddingTop: 18,
//                 paddingBottom: 18,
//                 borderRadius: 50,
//               }}
//             >
//               <FontAwesome name="camera" size={24} color="#BDBDBD" />
//             </TouchableOpacity>
//           </Camera>
//           <Text style={styles.text}>Завантажте фото</Text>
//           <View style={styles.form}>
//             <View style={{ marginTop: isShowKeyboard ? 5 : 32 }}>
//               <TextInput
//                 value={title}
//                 placeholder={"Назва..."}
//                 placeholderTextColor={"#BDBDBD"}

//                 onFocus={() => {
//                   setIsShowKeyboard(true);
//                 }}
//                 selectionColor={"#FF6C00"}
//                 onChangeText={(value) =>
//                   setState((prevState) => ({ ...prevState, title: value }))
//                 }
//                 style={styles.input}
//               />
//             </View>
//             <View style={{ marginTop: isShowKeyboard ? 5 : 16 }}>
//               <Feather
//                 name="map-pin"
//                 size={24}
//                 color="#BDBDBD"
//                 style={{
//                   position: "absolute",
//                   top: 13,
//                 }}
//               />
//               <TextInput
//                 value={location}
//                 placeholder={"Місце..."}
//                 placeholderTextColor={"#BDBDBD"}
//                 onFocus={() => {
//                   setIsShowKeyboard(true);
//                 }}
//                 selectionColor={"#FF6C00"}
//                 onChangeText={(value) =>
//                   setState((prevState) => ({ ...prevState, location: value }))
//                 }
//                 style={{ ...styles.input, paddingLeft: 28 }}
//               />
//             </View>
//             <TouchableOpacity
//               style={styles.btn}
//               activeOpacity={0.8}
//               onPress={keyboardHideOnBtn}
//             >
//               <Text style={styles.btnTitle}>Опублікувати</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <TouchableOpacity style={styles.deleteBtn} activeOpacity={0.8}>
//           <AntDesign name="delete" size={24} color="#BDBDBD" />
//         </TouchableOpacity>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     justifyContent: "space-between",
//     paddingBottom: 34,
//     paddingTop: 32,
//     paddingHorizontal: 16,
//   },
//   photoWrapper: {
//     width: "100%",
//     height: 240,
//     borderRadius: 16,
//     backgroundColor: "#F6F6F6",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     marginTop: 8,
//     fontSize: 16,
//     color: "#BDBDBD",
//   },
//   input: {
//     fontFamily: "Roboto-Regular",
//     fontSize: 16,
//     borderWidth: 1,
//     height: 50,
//     borderTopColor: "transparent",
//     borderLeftColor: "transparent",
//     borderRightColor: "transparent",
//     borderBottomColor: "#E8E8E8",
//     color: "#212121",
//   },
//   btn: {
//     marginTop: 32,
//     backgroundColor: "#F6F6F6",
//     height: 51,
//     borderRadius: 100,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   btnTitle: {
//     fontFamily: "Roboto-Regular",
//     color: "#BDBDBD",
//     fontSize: 16,
//     lineHeight: 19,
//   },
//   deleteBtn: {
//     marginLeft: "auto",
//     marginRight: "auto",
//     backgroundColor: "#F6F6F6",
//     height: 40,
//     width: 70,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import React, { useState, useRef, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";

import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";

const initialState = { title: "", location: "" };

const CreatePostsScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const { title, location } = state;
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

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

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture", source);
      }
    }
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  const renderCancelPreviewButton = () => (
    <TouchableOpacity onPress={cancelPreview} style={styles.closeButton}>
      <AntDesign name="close" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );

  const renderCaptureControl = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={!isCameraReady}
      onPress={takePicture}
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
  );
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={{ borderRadius: 16 }}>
          <Camera
            ref={cameraRef}
            style={styles.camera}
            flashMode={Camera.Constants.FlashMode.on}
            onCameraReady={onCameraReady}
            onMountError={(error) => {
              console.log("camera error", error);
            }}
          >
            {isPreview && renderCancelPreviewButton()}
            {!isPreview && renderCaptureControl()}
          </Camera>
          <Text style={styles.text}>Завантажте фото</Text>
          <View style={styles.form}>
            <View style={{ marginTop: isShowKeyboard ? 5 : 32 }}>
              <TextInput
                value={title}
                placeholder={"Назва..."}
                placeholderTextColor={"#BDBDBD"}
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
const WINDOW_HEIGHT = Dimensions.get("window").height;
const closeButtonSize = Math.floor(WINDOW_HEIGHT * 0.032);
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    paddingBottom: 34,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  camera: {
    height: 240,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    height: closeButtonSize,
    width: closeButtonSize,
    borderRadius: Math.floor(closeButtonSize / 2),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    opacity: 0.7,
    zIndex: 2,
  },
  closeCross: {
    width: "68%",
    height: 1,
    backgroundColor: "black",
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
