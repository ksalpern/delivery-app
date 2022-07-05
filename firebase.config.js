import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBHq-e5dwDP1-xhmzAwyEp34RfgrDth6X4",
  authDomain: "delivery-app-a0a7f.firebaseapp.com",
  databaseURL: "https://delivery-app-a0a7f-default-rtdb.firebaseio.com",
  projectId: "delivery-app-a0a7f",
  storageBucket: "delivery-app-a0a7f.appspot.com",
  messagingSenderId: "743878516859",
  appId: "1:743878516859:web:0c9ea60342507e9ce0c2de"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };