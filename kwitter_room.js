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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding Room Name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
  }

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_name = childKey;
                row = "<div class='room_name' id=" + Room_name + " onclick='redirectToRoomName(this.id)'>#" + Room_name + "</div><hr>";
                document.getElementById("output").innerHTML+=row;
          });
    });
}
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}

