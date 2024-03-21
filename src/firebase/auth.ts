import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (
    email: string,
    password: string
) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const updateInfo = (user: any, displayName: string) => {
    return updateProfile(user, { displayName });
};

export const doSignOut = () => {
    return auth.signOut();
};
