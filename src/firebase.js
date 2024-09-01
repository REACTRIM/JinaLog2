// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2pGfQXrbzVPi7Kgw9BCmfKzf_HOKlIzo",
  authDomain: "jina-project-7c504.firebaseapp.com",
  projectId: "jina-project-7c504",
  storageBucket: "jina-project-7c504.appspot.com",
  messagingSenderId: "687204916143",
  appId: "1:687204916143:web:4cd32e24c4674764abad5a",
  measurementId: "G-6FYL0ZEKDJ",
};

const app = initializeApp(firebaseConfig);

// Firestore와 Storage 초기화
const db = getFirestore(app);
const storage = getStorage(app);

// Analytics 사용 시 주석 해제
// const analytics = getAnalytics(app);

export { db, storage };
