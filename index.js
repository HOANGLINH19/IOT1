// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  //Điền thông tin Firebase config của cá nhân vào đây
  apiKey: "AIzaSyDKiFMVBy__7AMsT1xf80Mhr8OYxoWqlTo",
  authDomain: "kc236-6ca6f.firebaseapp.com",
  databaseURL: "https://kc236-6ca6f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kc236-6ca6f",
  storageBucket: "kc236-6ca6f.appspot.com",
  messagingSenderId: "56352336197",
  appId: "1:56352336197:web:4218c68dfe0ad2c4da762c"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

send.addEventListener('click',(e) =>{ 
Sends();
});
read.addEventListener('click',(e) =>{ 
Getval();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'Number/'), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
