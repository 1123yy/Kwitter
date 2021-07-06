var firebaseConfig = {
      apiKey: "AIzaSyBlX8gJzOVNbPRAUpzZH2Sj3av51kAZGXg",
      authDomain: "medichat-fc162.firebaseapp.com",
      databaseURL: "https://medichat-fc162-default-rtdb.firebaseio.com",
      projectId: "medichat-fc162",
      storageBucket: "medichat-fc162.appspot.com",
      messagingSenderId: "1033639904834",
      appId: "1:1033639904834:web:61a15e1349cdfa95a6cfdb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);







//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
