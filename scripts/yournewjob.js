let params = (new URL(document.location)).searchParams;
var jobID = params.get("id");
console.log(jobID);
var newIDjob = parseInt(jobID);
var collection = db.collection("jobPostings");
console.log(collection);





db.collection("jobPostings").where("jobPost.jobID", "==", newIDjob)
  .get()
  .then(function (snap) {
    console.log(snap);
    snap.forEach(function (doc) {
      console.log(doc);
      let jobInfo = doc.data();
      let headline = jobInfo.jobPost["Headline"];
      console.log(headline);
      let headingTxt = document.getElementById("theHeading");
      headingTxt.textContent = headline;
      let salary = jobInfo.jobPost["Salary"];
      let salaryNum = document.getElementById("theSalary");
      salaryNum.textContent = salary;
      let desc = jobInfo.jobPost["Description"];
      let jobDesc = document.getElementById("theDesc");
      jobDesc.textContent = desc;
      let pos = jobInfo.jobPost["Position"];
      let jobPos = document.getElementById("thePos");
      jobPos.textContent = pos;
      let title = jobInfo.jobPost["Position"];
      let pageTitle = document.getElementById("title");
      pageTitle.textContent = title;

    })
  })


function deleteMe() {
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var user = firebaseUser.uid;
      console.log(user);
      db.collection("jobPostings").where("jobPost.User", "in", [user])
        .get()
        .then(function (snap) {
          snap.forEach(function (doc) {
            var docID = doc.id;
            let data = doc.data();
            let userID = data.jobPost["User"];
            if (user === userID) {
              let deletionDiv = document.createElement("div");
              let deleteButton = document.createElement("button");
              deleteButton.setAttribute("id", "deleteMe");
              let deleteTxt = document.createTextNode("Delete Job?");
              let deleteSection = document.getElementById("deleteSection");
              deleteButton.appendChild(deleteTxt);
              deletionDiv.appendChild(deleteButton);
              deleteSection.appendChild(deletionDiv);
              deleteButton.addEventListener("click", function () {
                alert('Job Post Has Been Deleted');
                db.collection("jobPostings")
                  .doc(docID)
                  .delete()
                  .then(() => {
                  }).catch((error) => {
                    console.log(error);
                  })
              })
            }
          })
        })
    }
  })
};
deleteMe();

/*

function deleteMe(){
  firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser){
      var user = firebaseUser.uid;
      console.log(user);
      db.collection("jobPostings").where("jobPost.User","in",[user])
      .get()
      .then(function(snap){
       snap.forEach(function(doc){
         var docID = doc.id;
         let data = doc.data();
         let userID = data.jobPost["User"];
         if(user === userID){
          let deletionDiv = document.createElement("div");
          let deleteButton = document.createElement("button");
          let a = document.createElement("a");
          a.href = "./jobsearch.html";
          deleteButton.setAttribute("id","deleteMe");
          let deleteTxt = document.createTextNode("Delete Job?");
          let deleteSection = document.getElementById("deleteSection");
          deleteButton.appendChild(deleteTxt);
          a.appendChild(deleteButton);
          deletionDiv.appendChild(a);
          deleteSection.appendChild(deletionDiv);
          deleteButton.addEventListener("click",function(){
            alert('Job Post Has Been Deleted');
            db.collection("jobPostings")
            .doc(docID)
            .delete()
            .then(()=>{
            }).catch((error)=>{
              console.log(error);
            })
          })
         }
       })
      })
    }
  })
  };
  deleteMe();
  
*/
function contactMe() {
  alert("event works")
};

let contactButton = document.getElementById("contactButt");
contactButton.addEventListener("click", function () {
  contactMe();
});