import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_VSRwuczoT666vaA12W8e4mgsIyhqq1c",
  authDomain: "kintosuyo-c7e2a.firebaseapp.com",
  projectId: "kintosuyo-c7e2a",
  storageBucket: "kintosuyo-c7e2a.appspot.com",
  messagingSenderId: "659722891417",
  appId: "1:659722891417:web:99bdba15c6fb6464630808",
  measurementId: "G-4XSKCHTJKW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("logined Successfully")
      var aaaa =  (success.user.uid);
      localStorage.setItem("uid",aaaa)
      console.log(aaaa)
      
      
      
      window.location.replace('UserPage.html')
     // localStorage.setItem(success,user,uid)
      
    })
    .catch(function (err) {
      alert("login error"+err);
    });

  console.log(obj);
}