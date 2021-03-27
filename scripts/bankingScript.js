

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