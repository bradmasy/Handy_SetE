
function submitProvince(){
    let province = document.getElementById("province").value;
    db.collection("users")//user collection
    .doc(user.uid)// user id/hash code
    .collection("banking")//placing collection banking collection
    .add({ //add the province to banking collection as a field
        "province": province
    })
    }