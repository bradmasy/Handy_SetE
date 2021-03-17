function readQuote(){
    db.collection("messages").doc("tuesday")
    .onSnapShot(function(snap){
        console.log(snap.data());
    })
}