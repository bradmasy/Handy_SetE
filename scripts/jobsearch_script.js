let button = document.getElementById("submitButton");
let jobSection = document.getElementById("postedJobs");
let jobSearchSection = document.getElementById("newJobPost");




button.addEventListener("click", function () {
    var city = document.getElementById("location").value;
    var jobField = document.getElementById("field").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var salary = document.getElementById("salary").value;
    var field = document.getElementById("field").value;
    console.log(field);
    jobSection.style.display = "none";

    function displayJobs() {
        /*db.collection("jobPostings").where("jobPost.jobID", "array-contains" ,"")
        .get()
        .then((doc)=>{
            if(doc.exists){
                let job = doc.data();
                console.log(job.jobPost);
                console.log(doc.data()+" this is the data")
            }else{(console.log("no"))}
        })*/

        db.collection("jobPostings").where("jobPost.Field", "in", [field])
            .get()
            .then(function (snap) {
                var size = snap.size;
                console.log(size);
                console.log(snap);
                snap.forEach(function (doc) {
                    var name = doc.data();
                    var jobHeading = name.jobPost.Headline;
                    let div = document.createElement("div");
                    let a = document.createElement("a");
                    a.href="http://127.0.0.1:5502/Handy_SetE/scripts/yournewjob.html?id=" +
                    div.setAttribute("class", "jobPost");
                    let post = document.createTextNode(jobHeading);
                    div.appendChild(post);
                    a.appendChild(div);
                    jobSearchSection.appendChild(a);

                });
            });
    }

    
    displayJobs();
})



let toggleButton = document.getElementById("toggleButton");
let addFormDisplay = true
let searchForm = document.getElementById("jobForm");
searchForm.style.display = "none";
console.log(searchForm);

toggleButton.addEventListener("click", function () {
    let display = searchForm.style.display;
    if (display === "none") {
        document.getElementById("jobForm").style.display = "block";
        addFormDisplay = false;
    }
    else {
        document.getElementById("jobForm").style.display = "none";
        addFormDisplay = true;
        
    }
})



db.collection("jobPostings")
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            let div = document.createElement("div");
            div.setAttribute("class", "jobPost");
            let data = (doc.data()["jobPost"]);
            console.log(data);
            let extraction1 = (data["Position"]);
            let extraction2 = (data["Location"]);
            let extraction3 = (data["Business"]);
            let extraction4 = (data["Headline"]);
            let extraction5 = (data["Salary"]);
            let id = (data["jobID"]);
            let jobPost = extraction4;
            let a = document.createElement("a");
            a.href = "http://127.0.0.1:5502/Handy_SetE/scripts/yournewjob.html?id=" + id;
            let jobNode = document.createTextNode(jobPost);
            div.appendChild(jobNode);
            a.appendChild(div);
            console.log(div);
            jobSection.appendChild(a);
        })
    })

