function readQuote(){
    db.collection("messages").doc("tuesday")
    .onSnapShot(function(snap){
        console.log(snap.data());
    })
}
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

function displayCities(){
    db.collection("cities").get()
    .then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().name;             //gets the name field
            console.log(n);
            var cityid = doc.data().code;        //gets the unique ID field
            console.log(cityid);
            document.getElementById(cityid).innerText = n;
        })

    })
}
displayCities();