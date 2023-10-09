import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCxdT4CjxzMWSdmbcGdNx_7Tznk8U6BL54",
  authDomain: "event-management-auth-devhatem.firebaseapp.com",
  projectId: "event-management-auth-devhatem",
  storageBucket: "event-management-auth-devhatem.appspot.com",
  messagingSenderId: "286647243322",
  appId: "1:286647243322:web:b5fa72fbe51cf700d05b03"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;