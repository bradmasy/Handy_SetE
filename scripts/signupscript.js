function displayJob(){
    db.collection("Business").get()
    .then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().title;             //gets the name field
            console.log(n);
            var jobid = doc.data().code;        //gets the unique ID field
            console.log(jobid);
            document.getElementById(jobid).innerText = n;
        })

    })
}
displayJob();