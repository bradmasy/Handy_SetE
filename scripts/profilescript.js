
function renderProfName(){
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        var user = firebaseUser.uid
       db.collection("users").doc(user)
       .onSnapshot(function(snap){
           var cloudFirstName = snap.data().profile.firstName;
           var cloudLastName = snap.data().profile.lastName;
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
               var cloudHeading = snap.data().profile.Headline;
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
           var cloudRef = snap.data().profile.References;
           document.getElementById("ref").textContent = cloudRef
       })
      }
      else{
        console.log("none");
      }
    })
    }
    renderProfRef();
//


function displayUserProfilePic() {
  console.log("hi");
  firebase.auth().onAuthStateChanged(function (user) {      //get user object
      db.collection("users").doc(user.uid)                  //use user's uid
          .get()                                            //READ the doc
          .then(function (doc) {
              var picUrl = doc.data().profilePic;     
              console.log(picUrl);      //extract pic url
              // use this line if "mypicdiv" is a "div"
              $("#mypicdiv").append("<img src='" + picUrl + "'>")
              
              // use this line if "mypic-goes-here" is an "img" 
              //$("#profPic").attr("src", picUrl);
          })
  })
}
displayUserProfilePic();





function renderProfBio(){
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        var user = firebaseUser.uid
       db.collection("users").doc(user)
       .onSnapshot(function(snap){
           var cloudBio = snap.data().profile.Biography;
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
               
               var cloudExp = snap.data().profile.Experience;
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
