function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}

function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) +1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("Kwitter.html")
}

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like']