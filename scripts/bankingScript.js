
function submitForm(){
document.getElementById("saveButton").addEventListener("click",function(){
    let name = document.getElementById("name").value;
    console.log(name);
    db.collection("Banking").doc("user").update({
        name:name
    }).then(function(){
        console.log("name added")
    })
    alert("Form Updated!");
})
}
submitForm();

