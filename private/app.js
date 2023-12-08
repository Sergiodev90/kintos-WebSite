
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()


var fullName = document.getElementById("fullname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var copassword = document.getElementById("copassword")
window.signup = function (e) {
if(password)

    if(fullName.value == "" || email.value =="" || password.value ==""){
        alert("All Field Are Required")
    }
    if(password.value == copassword.value){
     
    }
    else{
        alert("Password Confirmation is Wrong")
        return false
    }

    e.preventDefault();
    var obj = {
      firstName: fullName.value,
      email: email.value,
      password: password.value,
    };
  
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        window.location.replace('HTML/login.html')
      // console.log(success.user.uid)
      alert("signup successfully")
    })
    .catch(function(err){
      alert("Error in " + err)
    });
   console.log()
    console.log(obj);
  };