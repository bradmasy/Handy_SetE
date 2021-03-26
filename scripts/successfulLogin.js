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
            $("#name").text(userName);
        })
        
    }
    })
    }
    hello();
    