// src/utils/Firebase/config.ts
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/functions";

import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// firebaseパッケージをAPI Keyで初期化
// Firebaseコンソールでさksウエイ他アプリとReactを紐づける処理
firebase.initializeApp(firebaseConfig);

// emulation用
if (process.env.NEXT_PUBLIC_FIREBASE_EMULATOR == "1") {
  firebase.auth().useEmulator("http://localhost:9099");
  firebase.storage().useEmulator("localhost", 8080);
  firebase.functions().useEmulator("localhost", 5001);
}

export const fireAuth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

// ストレージ用のfirebaseモジュール
export const storage = firebase.storage();

// 初期化済みのfirebaseパッケージを確実に使用するためのexport defaultでfirebaseパッケージをexport
// eslint-disable-next-line import/no-default-export
export default firebase;

//TODO: firebaseのexport後で確認
