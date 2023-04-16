import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const config = {
  apiKey: "AIzaSyCFK_PRBjF1i1H97OrTUV8cRhUkZmbSPWc",
  authDomain: "ehcg-clone.firebaseapp.com",
  databaseURL: "https://ehcg-clone.firebaseio.com",
  projectId: "ehcg-clone",
  storageBucket: "",
  messagingSenderId: "427276127206",
  appId: "1:427276127206:web:e9d266ce44fc15b9a26427",
  measurementId: "G-H3RSKX0EDV",
};
const app = initializeApp(config);
const database = getDatabase(app);

/**
 * const db = getDatabase();
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
 */

const postRef = ref(database, "posts");
onValue(postRef, (snapshot) => {
  const data = snapshot.val();
  console.log("### onValue", data);
});
// const databaseRef = database().ref();
// const postRef = databaseRef.child("posts");

export { postRef };
