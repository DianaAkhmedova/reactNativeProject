import { app, db, auth } from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { authSlise } from "./authReduser";

export const authSignUpUser =
  ({ login, email, password, avatar }) =>
  async (dispatch, getState) => {
    console.log("avatar in authSignUpUser: ", avatar);
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: avatar,
      });

      const user = await auth.currentUser;

      dispatch(
        authSlise.actions.updateUserProfile({
          userId: user.uid,
          nickname: user.displayName,
          email: user.email,
          avatar: user.photoURL,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  try {
    await signOut(auth);

    dispatch(authSlise.actions.authSignOut());
  } catch (error) {
    alert(error.message);
  }
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  try {
    await onAuthStateChanged(auth, async (user) => {
      if (user) {
        await dispatch(
          authSlise.actions.authStateChange({ stateChange: true })
        );

        await dispatch(
          authSlise.actions.updateUserProfile({
            userId: user.uid,
            nickname: user.displayName,
            email: user.email,
          })
        );
      }
    });
  } catch (error) {
    alert(error.message);
  }
};
