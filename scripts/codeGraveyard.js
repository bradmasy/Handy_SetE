



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




