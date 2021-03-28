
/*

function getObject(){
    var object = JSON.parse(localStorage.getItem("formdata"));
    console.log(object);
    return object
}
getObject();
function changeName(){
    let profileName = document.getElementById("profileName");
    console.log(profileName)
    profileName.textContent = (getObject()["first"]) +" "+(getObject()["last"]);

;}
changeName();
function changeHeadline(){
    let hline = document.getElementById("headline");
    hline.textContent = (getObject()["headline"]);
};
changeHeadline()
function changeBio(){
    let bio = document.getElementById("bio");
    bio.textContent = (getObject()["bio"]);
}
changeBio();
function changeExp(){
    let exp = document.getElementById("exp");
    exp.textContent = (getObject()["exp"]);
}
changeExp();
function changeRef(){
    let ref = document.getElementById("ref");
    ref.textContent = (getObject()["ref"]);
}
changeRef();

let url = (URLSearchParams);
console.log(url);
*/

function authUser(){
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        console.log(firebaseUser.email);
        console.log(firebaseUser);
        var user = firebaseUser.uid
       
        
        console.log("used id: " + user);
        return user;
      }
      else{
        console.log("none");
      }
    })
    }
    authUser();

console.log(auth);

function readBio(){
    db.collection("user").doc(user.uid).
    onSnapshot(function(data){
        console.log("current data: " + data.data());
    })
    document.getElementById("bio").innerHTML = data.data().bio;

}
readBio();

/*
var docRef = db.collection("user");
console.log(docRef);
docRef.get().then((doc)=>{
    if(doc.exists){
        console.log("document data: ", doc.data());
    } else {
        console.log("no such data");
    }
}).catch((error) =>{
    console.log("error getting document: ", error);
});
*/