function readQuote(){
    db.collection("Business").doc("hospital")
    .onSnapshot(function(snap){
        console.log(snap.data());
        let position = snap.data().position
        console.log(position);
    })
}
readQuote();

/*
function userID(){
    db.collection("users").get()
    .then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().name;
            console.log(n);
            var nameID = doc.data().email;
            console.log(nameID);
            document.getElementById(nameID).innerText = n;

        })
    })
}
userID();
*/
/*

function displayJob(){
    db.collection("Business").doc("title").get()
    .then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().title;             //gets the name field
            console.log(n);
            var jobid = doc.data().code;        //gets the unique ID field
            console.log(jobid);
            var jobdes = doc.data().jobdes;
            console.log(jobdes);
            var jobOne = doc.data().descriptionID;
            console.log(jobOne);
            document.getElementById(jobid).innerText = n;
            document.getElementById(jobOne).innerText = jobdes;
        })

    })
}
displayJob();
*/


function yo(){
db.collection("Business").doc("title").OnSnapshot(function(c){
    console.log("current data", c.data());
    document.getElementById("hospitalJob").innerHTML= c.data()
});




}
function getBusiness(){
    var docRef = db.collection("Business").doc("hospital").get()
    .then(function(snap){
        if(snap.exists){
        let array = snap.data()["jobPostOne"]
        console.log(array);
        let position = (array["position"])
        console.log(position);
        console.log("great");
        }
        else {
            console.log("does not exist");
        }
    }).catch(function(err){
        console.log(err +"error")
    })
        console.log(docRef)



}
getBusiness();


/*
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
    hello();
    */