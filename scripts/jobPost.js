
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
function getTitle(){
    let title = document.getElementById("title").value;
    console.log(title)
    return title;
}
var jobCounter = 0;
let btn = document.getElementById("saveJob");
btn.addEventListener("click", function(){
            jobCounter ++;
            var jobPost = {
                "jobPost":{
                //"posterID": user,
                "Title": getTitle(),
                "Headline":getHeadline(),
                "Location": getLocation(),
                "Business": getBusiness(),
                "Position": getPosition(),
                "Salary": getSalary()
                }
            };
            
            db.collection("jobPostings").doc("new -job: " + jobCounter).set(jobPost)
            //.then(function(){
              //  db.collection("jobPostings").add(jobPost)
           //db.collection("jobPostings").doc("postings").add(jobPost);
            //console.log("posting updated");
           // }) ;
        
    
});
