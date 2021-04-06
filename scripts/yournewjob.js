let params = (new URL(document.location)).searchParams;
var jobID = params.get("id");
var newIDjob = parseInt(jobID);
console.log(newIDjob);
var collection = db.collection("jobPostings");
console.log(collection);





db.collection("jobPostings").where("jobPost.jobID","==",newIDjob)
.get()
.then(function(snap){
  console.log(snap);
    snap.forEach(function(doc){
        console.log(doc);
        let jobInfo= doc.data();
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



