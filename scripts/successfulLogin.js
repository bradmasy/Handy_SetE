
function submitInput(){
    
  document.getElementById("pushMe").addEventListener("click",function(){
    let input = document.getElementById("test").value;
    console.log(input)
    db.collection("users")//user collection
    .doc(firebaseUser.uid)// user id/hash code
    .collection("banking")//placing collection banking collection
    .add({ //add the province to banking collection as a field
        "test": input
    })
    })
    }


function hello(){
    firebase.auth().onAuthStateChanged(function(user){
    if (user){
        console.log(user.uid);
        db.collection("users")
        .doc(user.uid)
        .get()
        .then(function(doc){
            console.log(doc.data().name);
            var userName = doc.data().name;
            $("#name-goes-here").text(userName);
        })
        
    }
    })
    }
    hello()

/*

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


function submitInput(){
    
  document.getElementById("pushMe").addEventListener("click",function(){
    authUser();
    let input = document.getElementById("test").value;
    console.log(input)
    db.collection("users")//user collection
    .doc(firebaseUser.uid)// user id/hash code
    .collection("banking")//placing collection banking collection
    .add({ //add the province to banking collection as a field
        "test": input
    })
    })
    }
submitInput();

*/


function persist(){
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
      console.log("then");
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    let joe = firebase.auth().signInWithEmailAndPassword(email, password);
    console.log(joe);
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
