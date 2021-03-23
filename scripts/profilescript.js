function getObject(){
    var object = JSON.parse(localStorage.getItem("formdata"));
    console.log(object);
    return object
}
getObject();
function changeName(){
    let profileName = document.getElementById("profileName");
    console.log(profileName)
    profileName.textContent = (getObject()["first"]) +" "+(getObject()["last"]);

;}
changeName();
function changeHeadline(){
    let hline = document.getElementById("headline");
    hline.textContent = (getObject()["headline"]);
};
changeHeadline()
function changeBio(){
    let bio = document.getElementById("bio");
    bio.textContent = (getObject()["bio"]);
}
changeBio();
function changeExp(){
    let exp = document.getElementById("exp");
    exp.textContent = (getObject()["exp"]);
}
changeExp();
function changeRef(){
    let ref = document.getElementById("ref");
    ref.textContent = (getObject()["ref"]);
}
changeRef();

let url = (URLSearchParams);
console.log(url);