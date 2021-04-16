let button = document.getElementById("submitButton");
let jobSection = document.getElementById("postedJobs");
let jobSearchSection = document.getElementById("newJobPost");
let jobForm = document.getElementById("jobForm");
let reset = document.getElementById("reset");
reset.style.display = "none";



//Job Search Queries: getting the values from inputs to put into query
button.addEventListener("click", function () {
    var city = document.getElementById("location").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var salary = document.getElementById("salary").value;
    var field = document.getElementById("field").value;
    jobSection.style.display = "none";
    jobForm.style.display = "none";
    reset.style.display = "block";
    jobSearchSection.style.display = "block";


    //Job Search Queries: taking values and comparing them to whats in
    function displayJobsField() {
        db.collection("jobPostings").where("jobPost.Field", "in", [field])
            .get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    var name = doc.data();
                    let ID = name.jobPost["jobID"];
                    var jobHeading = name.jobPost.Headline;
                    let div = document.createElement("div");
                    let a = document.createElement("a");
                    a.href = "http://127.0.0.1:5502/Handy_SetE/yournewjob.html?id=" + ID;
                    div.setAttribute("class", "jobPost");
                    let post = document.createTextNode(jobHeading);
                    div.appendChild(post);
                    a.appendChild(div);
                    jobSearchSection.appendChild(a);
                });
            });
    }
    displayJobsField();

    //functions getting data from jobpost in firebase
    function displayJobsLocation() {
        db.collection("jobPostings").where("jobPost.Location", "in", [city])
            .get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    var name = doc.data();
                    let ID = name.jobPost["jobID"];
                    var jobHeading = name.jobPost.Headline;
                    let div = document.createElement("div");
                    let a = document.createElement("a");
                    a.href = "http://127.0.0.1:5502/Handy_SetE/yournewjob.html?id=" + ID;
                    div.setAttribute("class", "jobPost");
                    let post = document.createTextNode(jobHeading);
                    div.appendChild(post);
                    a.appendChild(div);
                    jobSearchSection.appendChild(a);

                });
            });
    }
    displayJobsLocation();
    function displayJobsSalary() {
        db.collection("jobPostings").where("jobPost.Salary", "in", [salary])
            .get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    var name = doc.data();
                    let ID = name.jobPost["jobID"];
                    var jobHeading = name.jobPost.Headline;
                    let div = document.createElement("div");
                    let a = document.createElement("a");
                    a.href = "http://127.0.0.1:5502/Handy_SetE/yournewjob.html?id=" + ID;
                    div.setAttribute("class", "jobPost");
                    let post = document.createTextNode(jobHeading);
                    div.appendChild(post);
                    a.appendChild(div);
                    jobSearchSection.appendChild(a);
                });
            });
    }
    displayJobsSalary();
    function displayJobsPosition() {
        db.collection("jobPostings").where("jobPost.Position", "in", [jobTi])
            .get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    var name = doc.data();
                    let ID = name.jobPost["jobID"];
                    var jobHeading = name.jobPost.Headline;
                    let div = document.createElement("div");
                    let a = document.createElement("a");
                    a.href = "http://127.0.0.1:5502/Handy_SetE/yournewjob.html?id=" + ID;
                    div.setAttribute("class", "jobPost");
                    let post = document.createTextNode(jobHeading);
                    div.appendChild(post);
                    a.appendChild(div);
                    jobSearchSection.appendChild(a);
                });
            });
    }
    displayJobsPosition();
})

//Hiding the Search Bar
let toggleButton = document.getElementById("toggleButton");
let addFormDisplay = true
let searchForm = document.getElementById("jobForm");
searchForm.style.display = "none";

//hiding the job form
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

//Finding the Jobs in the database and posting them to the Job Board
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
            let extractionHeadline = (data["Headline"]);
            let extraction5 = (data["Salary"]);
            let id = (data["jobID"]);
            let jobPost = extractionHeadline;
            let a = document.createElement("a");
            let b = document.createElement("button");
            console.log(b);
            a.href = "./yournewjob.html?id=" + id;
            let jobNode = document.createTextNode(jobPost);
            div.appendChild(jobNode);
            a.appendChild(div);
            console.log(div);
            jobSection.appendChild(a);

        })
    })

reset.addEventListener("click", function () {
    reset.style.display = "none";
    jobSearchSection.innerHTML = "";
    jobSection.style.display = "block";
})