



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
