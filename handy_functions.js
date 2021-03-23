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

function displayJob(){
    db.collection("Business").get()
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

