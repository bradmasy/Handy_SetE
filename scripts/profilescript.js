
function renderProfName() {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var user = firebaseUser.uid
      db.collection("users").doc(user)
        .onSnapshot(function (snap) {
          var cloudFirstName = snap.data().profile.firstName;
          var cloudLastName = snap.data().profile.lastName;
          document.getElementById("profileName").textContent = cloudFirstName + " " + cloudLastName;
        })
    }
    else {
      console.log("none");
    }
  })
}
renderProfName();

function renderProfHeading() {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var user = firebaseUser.uid
      db.collection("users").doc(user)
        .onSnapshot(function (snap) {
          var cloudHeading = snap.data().profile.Headline;
          document.getElementById("headline").textContent = cloudHeading;
        })
    }
    else {
      console.log("none");
    }
  })
}
renderProfHeading();

function renderProfRef() {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var user = firebaseUser.uid
      db.collection("users").doc(user)
        .onSnapshot(function (snap) {
          var cloudRef = snap.data().profile.References;
          document.getElementById("ref").textContent = cloudRef
        })
    }
    else {
      console.log("none");
    }
  })
}
renderProfRef();

function renderProfBio() {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var user = firebaseUser.uid
      db.collection("users").doc(user)
        .onSnapshot(function (snap) {
          var cloudBio = snap.data().profile.Biography;
          document.getElementById("bio").textContent = cloudBio;
        })
    }
    else {
      console.log("none");
    }
  })
}
renderProfBio();

function renderProfExperience() {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var user = firebaseUser.uid
      db.collection("users").doc(user)
        .onSnapshot(function (snap) {
          var cloudExp = snap.data().profile.Experience;
          document.getElementById("exp").textContent = cloudExp;
        })
      return user;
    }
    else {
      console.log("none");
    }
  })
}
renderProfExperience();
