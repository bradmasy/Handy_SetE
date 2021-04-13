



function firstName(){
    let firstName = document.getElementById("firstName").value;
    return firstName
    }
function lastName(){
        let lastName = document.getElementById("lastName").value;
        return lastName;
    }
function headline(){
    let headline = document.getElementById("headline").value;
    return headline;
}
function biography(){
        let biography = document.getElementById("biography").value;
       return biography;
        }
function experience(){
        let experience = document.getElementById("experience").value;
        return experience;
        }
function references(){
        let references = document.getElementById("references").value;
        return references
        }
function createPerson(){
let button = document.getElementById("createProfile");
button.addEventListener("click", function(){
    function createPersonObject(){
        
            let objectName = firstName() + "/" + lastName();
            console.log(objectName);
                objectName = {
                    first: firstName(),
                    last: lastName(),
                    headline: headline(),
                    bio: biography(),
                    exp: experience(),
                    ref: references()
                }

            console.log(objectName); 
            localStorage.setItem("formdata",JSON.stringify(objectName));
                };
               
                
    
    createPersonObject();
})
}
createPerson();
function generateLink(){
    let button = document.getElementById("linkGenerator");
        console.log(button);
        button.addEventListener("click", function(){
            let link = document.getElementById("yourProfile");
            console.log(link);
            link.href="profile.html?"+ firstName()+"?"+ lastName();
            console.log(link);
    })
}
generateLink();


function generatePicture(){

    let img = document.getElementById("profilePic");
    
    img.addEventListener("change",function(){
        ioimg.src = img.value;
        console.log(img["src"]);
        let div = document.getElementById("imgDiv");
        console.log(img.src);
        console.log(div);
        div.appendChild(img);
        console.log(div);
    })

}
generatePicture();


function addBioToCloud(){

    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            var user = firebaseUser.uid
            let bio = document.getElementById("biography").value;
            var profile = {
                "profile":{
                    "Biography" : bio
                }
            };
            db.collection("users").doc(user).update(profile)
            .then(function(){
            console.log("bio added")
            })
            alert("Bio Updated!");
        }
    })

}



function addHeadlineToCloud(){
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            var user = firebaseUser.uid
            let headline = document.getElementById("headline").value;
            console.log(headline);

            db.collection("users").doc(user).update(profile["Headline"])
            .then(function(){
            console.log("headline added")
            db.collection("users/" + user + "/profile").add(profile);
        })
        alert("Headline Updated!")
        }
    })
}


function addFirstNameToCloud(){
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            var user = firebaseUser.uid
            let firstName = document.getElementById("firstName").value;
            db.collection("users").doc(user).update({
                firstName:firstName
        }).then(function(){
            console.log("first name added")
        })
        alert("First Name Updated!")
        }
    })
}
function addLastNameToCloud(){
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            var user = firebaseUser.uid
            let lastName = document.getElementById("lastName").value;
            db.collection("users").doc(user).update({
                lastName: lastName
        }).then(function(){
            console.log("last name added")
        })
        alert("Last Name Updated!")
        }
    })
}
function addExperienceToCloud(){
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            var user = firebaseUser.uid
            let experience = document.getElementById("experience").value;
            db.collection("users").doc(user).update({
                experience: experience
            }).then(function(){
                console.log("experience added")
            })
            alert("Experience Updated!")
        }
    })
}
function addRefToCloud(){
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            var user = firebaseUser.uid
            let references = document.getElementById("references").value;
            db.collection("users").doc(user).update({
                references: references
            }).then(function(){
                console.log("references added")
            })
            alert("References Updated!")
        }
    })
}
function addProfileToCloud(){

}


document.getElementById("bioButt").addEventListener("click",function(){
    addBioToCloud();
})
document.getElementById("headButt").addEventListener("click",function(){
    addHeadlineToCloud();
})
document.getElementById("firstNameButt").addEventListener("click",function(){
    addFirstNameToCloud();
})
document.getElementById("lastNameButt").addEventListener("click",function(){
    addLastNameToCloud();
})
document.getElementById("exp").addEventListener("click",function(){
    addExperienceToCloud();
})
document.getElementById("ref").addEventListener("click",function(){
    addRefToCloud();


})

addProfileToCloud();





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
    


    function deleteIt(){
        firebase.auth().onAuthStateChanged(firebaseUser=>{
        if(firebaseUser){
          var user = firebaseUser.uid;
          console.log(user);
          db.collection("jobPostings").where("jobPost.User","in",[user])
          .get()
          .then(function(data){
            console.log(data.);
          });
        };
        });
        };
        deleteIt();

/*
    //firebase rules
    rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
           allow read, write: if request.time < timestamp.date(2021, 5, 6);
    }
  }
}
*/


/*
function submitProvince(){
let province = document.getElementById("province").value;

db.collection("Banking").doc("user").update({
    province:province
}).then(function(){
    console.log("province added")
})
}
function submitName(){
    let name = document.getElementById("name").value;
    db.collection("Banking").doc("user").update({
        name:name
    }).then(function(){
        console.log("name added")
    })
}
function submitStreet(){
let street = document.getElementById("streetOrPOB").value;
db.collection("Banking").doc("user").update({
    streetOrPOB: street
}).then(function(){
    console.log("street added")
})
}
function submitCity(){
let city = document.getElementById("city").value;
db.collection("Banking").doc("user").update({
    city: city
}).then(function(){
    console.log("city added")
})
}
function submitPostalCode(){
    let postalCode = document.getElementById("postalCode").value;
    db.collection("Banking").doc("user").update({
        postalCode: postalCode
    }).then(function(){
        console.log("postal code added")
    })
}
function submitBranchNum(){
    let branchNum = document.getElementById("branchNum").value;
    db.collection("Banking").doc("user").update({
        branchNum:branchNum
    }).then(function(){
        console.log("branch number added")
    })
}
function submitBranchNum(){
    let branchNum = document.getElementById("branchNum").value;
     db.collection("Banking").doc("user").update({
        branchNum:branchNum
    }).then(function(){
        console.log("branch number added")
    })
}
function submitInstNum(){
    let instNum = document.getElementById("instNum").value;
    db.collection("Banking").doc("user").update({
        institutionNumber: instNum
    }).then(function(){
        console.log("institution number added")
    })
}
function submitAccountNum(){
    let accountNum = document.getElementById("accountNum").value;
    db.collection("Banking").doc("user").update({
        accountNumber: accountNum
    }).then(function(){
        console.log("account number added")
    })
}
function submitForm(){
    document.getElementById("saveButton").addEventListener("click", function(){
        submitName();
        submitProvince();
        submitStreet();
        submitCity();
        submitPostalCode();
        submitBranchNum();
        submitInstNum();
        submitAccountNum();
        alert("Form Updated!");
    })
}
submitForm();




function submitProvince(){
    let province = document.getElementById("province").value;
    db.collection("users")//user collection
    .doc(user.uid)// user id/hash code
    .collection("banking")//placing collection banking collection
    .add({ //add the province to banking collection as a field
        "province": province
    })
    }
    */

//functioning deleteMe function before editing
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