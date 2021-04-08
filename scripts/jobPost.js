
function getLocation(){
    let location = document.getElementById("location").value;
    console.log(location);
    return location;
};
function getBusiness(){
    let business = document.getElementById("business").value;
    console.log(business);
    return business;
};
function getPosition(){
    let position = document.getElementById("position").value;
    console.log(position);
    return position;
};
function getSalary(){
    let salary = document.getElementById("salary").value;
    console.log(salary);
    return salary;
}
function getHeadline(){
    let headline = document.getElementById("headline").value;
    return headline
}
function getDesc(){
    let desc = document.getElementById("description").value;
    console.log(desc)
    return desc;
}
function getField(){
    let field = document.getElementById("field").value;
    console.log(field)
    return field;
}


firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        var user = firebaseUser.uid
        console.log("this is the user: " + user);
        let btn = document.getElementById("saveJob");
        btn.addEventListener("click", function(){
                    var jobPost = {
                        "jobPost":{
                        "Description": getDesc(),
                        "Headline":getHeadline(),
                        "Location": getLocation(),
                        "Business": getBusiness(),
                        "Position": getPosition(),
                        "Salary": getSalary(),
                        "Field" : getField(),
                        "User" : user,
                        "jobID": Math.floor(Math.random() * 10000)
                        }
                    };
                    db.collection("jobPostings")
                    .get()
                    .then(snap => {
                        size = snap.size;
                        size ++;
                        console.log(size);
                        db.collection("jobPostings").doc("newJob_" + size).set(jobPost)
                    })
                    });

    }
})

function yourJobs(){
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            var user = firebaseUser.uid;
            db.collection("jobPostings").where("jobPost.User", "in", [user])
            .get()
            .then(function(snap){
                snap.forEach(function(doc){
                    let yourJob = document.getElementById("yourJobs")
                    console.log(doc);name
                    var name = doc.data();
                    console.log(name);
                    let ID = name.jobPost["jobID"];
                    var jobHeading = name.jobPost.Headline;
                    let div = document.createElement("div");
                    let a = document.createElement("a");
                    a.href = "http://127.0.0.1:5502/Handy_SetE/yournewjob.html?id=" + ID ;
                        div.setAttribute("class", "jobPost");
                    let post = document.createTextNode(jobHeading);
                    let buttPost = document.createTextNode("Delete");
                    let butt = document.createElement("button");
                    let div2 = document.createElement("div");
                    butt.setAttribute("id","deleteButt");
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
yourJob();


           



