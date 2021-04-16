
function hello() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.uid);
      db.collection("users")
        .doc(user.uid)
        .get()
        .then(function (doc) {
          var userName = doc.data().name;
          $("#name-goes-here").text(userName);
        })

    }
  })
}
hello();

