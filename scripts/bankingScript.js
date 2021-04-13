

var province = document.getElementById("province").value;
var nameE = document.getElementById("name").value;
var street = document.getElementById("streetOrPOB").value;
var city = document.getElementById("city").value;
var postalCode = document.getElementById("postalCode").value;
var branchNum = document.getElementById("branchNum").value;
var instNum = document.getElementById("instNum").value;
var accountNum = document.getElementById("accountNum").value;

firebase.auth().onAuthStateChanged(firebaseUser=>{
    if(firebaseUser){
        var user = firebaseUser.uid;
        console.log(user);
    }
})

function getBankInfo() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            var user = firebaseUser.uid
            console.log(user)
            var bankInfo = {
                "bankInfo": {
                    "province": province,
                    "name": nameE,
                    "street": street,
                    "city": city,
                    "postalCode": postalCode,
                    "branchNumber": branchNum,
                    "instutionNum": instNum,
                    "accountNum": accountNum
                }

            }
            db.collection("users").doc(user).update(bankInfo)
                .then(function () {
                    console.log("bank info updated");
                }).catch(function(err){
                    console.log(err);
                })
            alert("Bank info updated!");
        }
    })
}
document.getElementById("saveButton").addEventListener("click", function(){
    getBankInfo();
});

