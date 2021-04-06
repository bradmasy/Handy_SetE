
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
                "jobID": Math.floor(Math.random() * 10000)
                }
            };
            db.collection("jobPostings")
            .get()
            .then(snap => {
                size = snap.size;
                console.log(size);
                db.collection("jobPostings").doc("newJob_" + size).set(jobPost)
            })
            });

           



