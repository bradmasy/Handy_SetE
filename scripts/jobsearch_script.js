let button = document.getElementById("submitButton");
let jobSection = document.getElementById("postedJobs");
let jobSearchSection = document.getElementById("newJobPost");

db.collection("jobPostings").get().then(function (querySnapshot) {
    querySnapshot.forEach(doc => {
        console.log(doc.id, "=>", doc.data()["jobPost"].jobID);
        var you = doc.data()["jobPost"].jobID;
        console.log(you);
    })
})



button.addEventListener("click", function () {
    var city = document.getElementById("location").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var jobTi= String(jobTitle)
    console.log(jobTi);
    var salary = document.getElementById("salary").value;
    var field = document.getElementById("field").value;
    console.log(field);
    jobSection.style.display = "none";

    

    function displayJobsField() {
        db.collection("jobPostings").where("jobPost.Field", "in", [field])
            .get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    console.log(doc);
                    var name = doc.data();
                    console.log(name);
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
    
    function displayJobsLocation() {
        db.collection("jobPostings").where("jobPost.Location", "in", [city])
            .get()
            .then(function (snap) {
                snap.forEach(function (doc) {
                    console.log(doc);
                    var name = doc.data();
                    console.log(name);
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
                    console.log(doc);
                    var name = doc.data();
                    console.log(name);
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
                    console.log(doc);
                    var name = doc.data();
                    console.log(name);
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
            let b = document.createElement("button");
            console.log(b);
            a.href = "http://127.0.0.1:5502/Handy_SetE/yournewjob.html?id=" + id;
            let jobNode = document.createTextNode(jobPost);
            div.appendChild(jobNode);
            a.appendChild(div);
            console.log(div);
            jobSection.appendChild(a);
        })
    })

function addLikeListener(id, likeid){
            document.getElementById(likeid)
            .addEventListener("click", function(){
                //when clicked do this
                //increment the like counter
                db.collection("webcams")
                .doc(id)
                .update({
                    likes: firebase.firestore.FieldValue.increment(1)
                })
            })
}