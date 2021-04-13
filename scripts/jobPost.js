
function getLocation() {
    let location = document.getElementById("location").value;
    console.log(location);
    return location;
};
function getBusiness() {
    let business = document.getElementById("business").value;
    return business;
};
function getPosition() {
    let position = document.getElementById("position").value;
    console.log(position);
    return position;
};
function getSalary() {
    let salary = document.getElementById("salary").value;
    console.log(salary);
    return salary;
}
function getHeadline() {
    let headline = document.getElementById("headline").value;
    return headline
}
getHeadline();
function getDesc() {
    let desc = document.getElementById("description").value;
    console.log(desc)
    return desc;
}

function getField() {
    let field = document.getElementById("field").value;
    console.log(field)
    return field;
}

function getValues() {
    let location = document.getElementById("location").value;
    let business = document.getElementById("business").value;
    let headline = document.getElementById("headline").value;
    let desc = document.getElementById("description").value;
    let field = document.getElementById("field").value;
    let position = document.getElementById("position").value;
    let salary = document.getElementById("salary").value;
    var valueArray = [location, business, headline, desc, field, position, salary];
    console.log(valueArray);
    var Bool = false;
    for (i = 0; i < valueArray.length; i++) {
        var arrayVal = valueArray[i];
        console.log(arrayVal);
        if (arrayVal === "" && "Job Field") {
            console.log('error data not filled');
            Bool === false;
            if (Bool === false) {
                alert('please fill in all data');
                Bool = true;
                return Bool;
            };
        } else {
            Bool = false;

            return Bool;
        };
    };
}

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        var user = firebaseUser.uid;
        console.log("this is the user: " + user);
        let btn = document.getElementById("saveJob");
        btn.addEventListener("click", function () {
            if (getValues() === true) {
                console.log('data was not filled in');
            }
            else {
                var jobPost = {
                    "jobPost": {
                        "Description": getDesc(),
                        "Headline": getHeadline(),
                        "Location": getLocation(),
                        "Business": getBusiness(),
                        "Position": getPosition(),
                        "Salary": getSalary(),
                        "Field": getField(),
                        "User": user,
                        "jobID": Math.floor(Math.random() * 100000)
                    }
                };
                db.collection("jobPostings")
                    .get()
                    .then(snap => {
                        size = snap.size;
                        size++;
                        db.collection("jobPostings").doc("newJob_" + size).set(jobPost);
                        console.log('worked');
                    })
            }
        });

    }
})



function yourJobs() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            var user = firebaseUser.uid;
            db.collection("jobPostings").where("jobPost.User", "in", [user])
                .get()
                .then(function (snap) {
                    snap.forEach(function (doc) {
                        let yourJob = document.getElementById("yourJobs")
                        var name = doc.data();
                        let ID = name.jobPost["jobID"];
                        var jobHeading = name.jobPost.Headline;
                        let div = document.createElement("div");
                        let a = document.createElement("a");
                        a.href = "./yournewjob.html?id=" + ID;
                        div.setAttribute("class", "jobPost");
                        let post = document.createTextNode(jobHeading);
                        let buttPost = document.createTextNode("Delete");
                        let butt = document.createElement("button");
                        let div2 = document.createElement("div");
                        butt.setAttribute("id", "deleteButt");
                        butt.appendChild(buttPost);
                        div2.appendChild(butt);
                        div.appendChild(post);
                        a.appendChild(div);;
                        yourJob.appendChild(a);

                    })
                })
        }
    })

}
yourJobs();





