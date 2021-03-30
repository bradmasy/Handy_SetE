
function renderProfName(){
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        var user = firebaseUser.uid
       db.collection("users").doc(user)
       .onSnapshot(function(snap){
           var cloudFirstName = snap.data().firstName;
           var cloudLastName = snap.data().lastName;
           document.getElementById("profileName").textContent = cloudFirstName + " " + cloudLastName;
       })
      }
      else{
        console.log("none");
      }
    })
    }
    renderProfName();

    function renderProfHeading(){
        firebase.auth().onAuthStateChanged(firebaseUser => {
          if(firebaseUser){
            var user = firebaseUser.uid
           db.collection("users").doc(user)
           .onSnapshot(function(snap){
               var cloudHeading = snap.data().headline;
               document.getElementById("headline").textContent = cloudHeading;
           })
          }
          else{
            console.log("none");
          }
        })
        }
        renderProfHeading();

function renderProfRef(){
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        var user = firebaseUser.uid
       db.collection("users").doc(user)
       .onSnapshot(function(snap){
           var cloudRef = snap.data().references;
           document.getElementById("ref").textContent = cloudRef
       })
      }
      else{
        console.log("none");
      }
    })
    }
    renderProfRef();





function renderProfBio(){
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        var user = firebaseUser.uid
       db.collection("users").doc(user)
       .onSnapshot(function(snap){
           console.log("current data: " + snap.data().bio);
           var cloudBio = snap.data().bio
           document.getElementById("bio").textContent = cloudBio;
       })
      }
      else{
        console.log("none");
      }
    })
    }
    renderProfBio();

    
    function renderProfExperience(){
        firebase.auth().onAuthStateChanged(firebaseUser => {
          if(firebaseUser){
            var user = firebaseUser.uid
           db.collection("users").doc(user)
           .onSnapshot(function(snap){
               console.log("current data: " + snap.data().experience);
               var cloudExp = snap.data().experience;
               document.getElementById("exp").textContent = cloudExp;
           })
            return user;
          }
          else{
            console.log("none");
          }
        })
        }
        renderProfExperience();

/*

function getObject(
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
function writeBradData2(){
  firebase.auth().onAuthStateChanged(function(user){
      var userid = user.uid;
      var bio = "i'm a cst student";
      var profileinfo1 = "info1";
      var profileinfo2 = "info2";
      var item = {
          "bio": bio
      }
      var pitem = {
          "p1": profileinfo1,
          "p2": profileinfo2
      }
      console.log(item);
      db.collection("users").doc(user.uid)
      .update(item)
      .then(function(){
          db.collection("users/"+user.uid+"/profiles")
          .add(pitem);
      })
  })
}
writeBradData2();