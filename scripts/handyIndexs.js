function readQuote(){
    db.collection("Business").doc("hospital")
    .onSnapshot(function(snap){
        console.log(snap.data());
        let position = snap.data().position
        console.log(position);
    })
}
readQuote();

/*
function userID(){
    db.collection("users").get()
    .then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().name;
            console.log(n);
            var nameID = doc.data().email;
            console.log(nameID);
            document.getElementById(nameID).innerText = n;

        })
    })
}
userID();
*/
/*

function displayJob(){
    db.collection("Business").doc("title").get()
    .then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().title;             //gets the name field
            console.log(n);
            var jobid = doc.data().code;        //gets the unique ID field
            console.log(jobid);
            var jobdes = doc.data().jobdes;
            console.log(jobdes);
            var jobOne = doc.data().descriptionID;
            console.log(jobOne);
            document.getElementById(jobid).innerText = n;
            document.getElementById(jobOne).innerText = jobdes;
        })

    })
}
displayJob();
*/


function yo(){
db.collection("Business").doc("title").OnSnapshot(function(c){
    console.log("current data", c.data());
    document.getElementById("hospitalJob").innerHTML= c.data()
});
}


function getHospitalJobCard(){
    db.collection("Business").doc("hospital").get()
    .then(function(snap){
        if(snap.exists){
        let object = snap.data()["jobPostOne"]
        let position = object.Position;
        let salary = object.Salary;
        let description = object.description;
        document.getElementById("hospitalJob").textContent = position;
        document.getElementById("hospoDesc").textContent = description;
        document.getElementById("hospitalSalary").textContent = salary;
        }
        else {
            console.log("does not exist");
        }
    }).catch(function(err){
        console.log(err +"error")
    })
       
}
getHospitalJobCard();

function getHospitalityJob(){
    db.collection("Business").doc("Hospitality").get()
    .then(function(snap){
        if(snap.exists){
            let object = snap.data()["jobPostOne"];
            let salary = object.Salary;
            let position = object.Position;
            console.log(position);
            let description = object.Description;
            console.log(description);
            document.getElementById("hospitalityJob").textContent = position;
            document.getElementById("hospitalityDescription").textContent = description;
            document.getElementById("hospoJobSalary").textContent = salary
        }
        else {console.log("does not exist")
        };
    }).catch(function(){
        console.log(err +" error")
    })
}
getHospitalityJob();

function getTechJob(){
    db.collection("Business").doc("Technology").get()
    .then(function(snap){
        if(snap.exists){
            let object = snap.data()["jobPostOne"];
            let position = object.position;
            let salary = object.salary;
            let description = object.description;
            document.getElementById("techJob").textContent = position;
            document.getElementById("techJobDescription").textContent = description;
            document.getElementById("techJobSalary").textContent = salary;
        }
        else {console.log("does not exist")
    };
    }).catch(function(){
        console.log(err + " error")
    })
}
getTechJob();

function getTradeJob(){
    db.collection("Business").doc("Trades").get()
    .then(function(snap){
        if(snap.exists){
            let object = snap.data()["jobPostOne"];
            let salary = object.Salary;
            let position = object.Position;
            console.log(position);
            let description = object.description;
            document.getElementById("tradeJob").textContent = position;
            document.getElementById("tradeJobDescription").textContent = description;
            document.getElementById("tradeJobSalary").textContent = salary
        }
        else {console.log("does not exist")
        };
    }).catch(function(){
        console.log(err +" error")
    })
}
getTradeJob();

function getServiceJob(){
    db.collection("Business").doc("Service").get()
    .then(function(snap){
        if(snap.exists){
            let object = snap.data()["jobPostOne"];
            let salary = object.salary;
            let position = object.position;
            console.log(position);
            let description = object.description;
            document.getElementById("serviceJob").textContent = position;
            document.getElementById("serviceJobDescription").textContent = description;
            document.getElementById("serviceJobSalary").textContent = salary;
        }
    })
}
getServiceJob();

function hello(){
    firebase.auth().onAuthStateChanged(function(user){
    if (user){
        console.log(user.uid);
        db.collection("users")
        .doc(user.uid)
        .get()
        .then(function(doc){
            console.log(doc.data().name);
            var userName = doc.data().name;
            $("#name-goes-here").text(userName);
        })
        
    }
    })
    }
    hello();
    

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
        .then(function (response) { console.log("sw was registered, the scope is: " + response.scope); })
        .catch(function (error) { console.log("sw was not registered" + error); })
};
