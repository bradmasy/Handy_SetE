let params = (new URL(document.location)).searchParams;
var jobID = params.get("id");
var newIDjob = jobID;
console.log(newIDjob);
var collection = db.collection("jobPostings");
console.log(collection);





db.collection("jobPostings").where("jobPost.jobID","==",[newIDjob])
.get()
.then(function(snap){
  console.log(snap);
    snap.forEach(function(doc){
        console.log(doc);
        console.log(doc.data());
    })
})



db.collection("jobPostings").where("jobPost.jobID", "==", 2319)
.get()
.then(function (snap) {
    snap.forEach(function (doc) {
        console.log(doc);
        var name = doc.data();
        console.log(name);
        let ID = name.jobPost["jobID"];
        var jobHeading = name.jobPost.Headline;
       

    });
});


//.then(querySnapshot => {
    //let job = collection.jobPostings;
  //  console.log(job)
  //  console.log(jobID);
    //let doc = querySnapshot.docs;
    //console.log(doc);
//})
      //  querySnapshot.forEach(doc => {
        //    var post = doc.data().jobPost
          //  console.log(post);
//            let theID = doc.data().jobPost.jobID;

  //      });
    //});
/*
db.collection("jobPostings").where("jobPost.jobID", "==", jobID)
.get()
.then(snap=>{
console.log(snap.);
})
         */