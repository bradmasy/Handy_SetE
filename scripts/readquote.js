function readQuote(){
    db.collection("quotes").doc("tuesday")
    .onSnapshot(function(c){
        console.log ("current document data: " + c.data());                       
        document.getElementById("quote-goes-here").innerHTML = c.data().quote;
    })
}
readQuote();