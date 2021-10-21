var firebaseConfig = {
    apiKey: "AIzaSyDgYm-cXBisxxoPNBckn5BvCVhh6t_PaKo",
    authDomain: "kwitter-8c25a.firebaseapp.com",
    databaseURL: "https://kwitter-8c25a-default-rtdb.firebaseio.com",
    projectId: "kwitter-8c25a",
    storageBucket: "kwitter-8c25a.appspot.com",
    messagingSenderId: "604086516434",
    appId: "1:604086516434:web:36bb6181f2e7167fc20b0b",
    measurementId: "G-FH6S4DDSQ7"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0,
    });
    document.getElementById("msg").value="";
}
