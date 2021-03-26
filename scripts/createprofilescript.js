

/*

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
        img.src = img.value;
        console.log(img["src"]);
        let div = document.getElementById("imgDiv");
        console.log(img.src);
        console.log(div);
        div.appendChild(img);
        console.log(div);
    })

}
generatePicture();

*/

let bio = document.getElementById("biography").value;



document.getElementById("bioButt").addEventListener("click",function(){
    let bio = document.getElementById("biography").value;
    console.log(bio);
    db.collection("users").doc("brad").update({
        bio:bio
    }).then(function(){
        console.log("bio added")
    })
    alert("Bio Updated!");
})

document.getElementById("headButt").addEventListener("click",function(){
    let headline = document.getElementById("headline").value;
    console.log(headline);
    db.collection("users").doc("brad").update({
        headline:headline
    }).then(function(){
        console.log("headline added")
    })
    alert("Headline Updated!")
})

document.getElementById("firstNameButt").addEventListener("click",function(){
    let firstName = document.getElementById("firstName").value;
    console.log(firstName);
    db.collection("users").doc("brad").update({
        firstName:firstName
    }).then(function(){
        console.log("first name added")
    })
    alert("First Name Updated!")
})

document.getElementById("lastNameButt").addEventListener("click",function(){
    let lastName = document.getElementById("lastName").value;
    console.log(lastName);
    db.collection("users").doc("brad").update({
        lastName: lastName
    }).then(function(){
        console.log("last name added")
    })
    alert("Last Name Updated!")
})


document.getElementById("email").addEventListener("click",function(){
    let emailAddress = document.getElementById("emailAddress").value;
    console.log(emailAddress);
    db.collection("users").doc("brad").update({
        email: emailAddress
    }).then(function(){
        console.log("email added")
    })
    alert("Email Address Updated!")
})


document.getElementById("exp").addEventListener("click",function(){
    let experience = document.getElementById("experience").value;
    console.log(experience);
    db.collection("users").doc("brad").update({
        experience: experience
    }).then(function(){
        console.log("experience added")
    })
    alert("Experience Updated!")
})

document.getElementById("ref").addEventListener("click",function(){
    let references = document.getElementById("references").value;
    console.log(references);
    db.collection("users").doc("brad").update({
       references: references
    }).then(function(){
        console.log("references added")
    })
    alert("References Updated!")
})





/*
function bioToDataB(){
    document.getElementById("bioButt").addEventListener("click", function(){
        db.collection("user").add({
            name:"brad"
        })
        .then((docRef)=>{
            console.log("document written with ID: ", docRef.id)
        })
        .catch((error)=>{
            console.error("error adding document: ", error);
        });
        console.log(bio);
        addBioDataToCloud()
    })
    
}
bioToDataB();

*/


function getEmail(){
    document.getElementById("button1").addEventListener("click", function(){
        var email = document.getElementById("emailAddress").value;
        console.log(email);
        db.collection("cities")
        .where("name", "==", email)
        .get()
        .then(function(snap){
            snap.forEach(function(doc) {
                console.log(doc.data());
            });
            
        })
    })
}

