// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
  increment,
  updateDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import {
  logout as logoutHandle,
  login as loginHandle,
} from "./redux/authSlice";
import { setCart } from "./redux/productSlice";
import store from "./redux/store";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("Your account created.");
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export const profileUpdate = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);
    toast.success("Profile updated");
  } catch (error) {
    toast.error(error.message);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(
      loginHandle({
        email: user.email,
        emailVerified: user.emailVerified,
        userId: user.uid,
        displayName: user.providerData[0].displayName,
      })
    );

    onSnapshot(
      query(collection(db, "cart"), where("uid", "==", auth.currentUser.uid)),
      (doc) => {
        store.dispatch(
          setCart(
            doc.docs.reduce(
              (products, product) => [
                ...products,
                { ...product.data(), id: product.id },
              ],
              []
            )
          )
        );
      }
    );
  } else {
    store.dispatch(logoutHandle());
  }
});

export const addCart = async (data) => {
  /*try {
    const result = await addDoc(collection(db, "cart"), data);
    toast.success("Added to cart");
  } catch (error) {
    toast.error(error.message);
  }*/

  const cart = store.getState().product.cart;
  const isInCart = cart.some((item) => item.productName == data.productName);
  if (isInCart) {
    const item = cart.find((item) => item.productName == data.productName);
    const ref = doc(db, "cart", item.id);
    await updateDoc(ref, {
      count: item.count + 1,
    });
  } else {
    await addDoc(collection(db, "cart"), data);
  }
};

export const deleteCart = async (data) => {
  try {
    await deleteDoc(doc(db, "cart", data));
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};
