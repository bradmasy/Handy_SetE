
document.getElementById("yourProfile").addEventListener("click", function () {
    function addJsonToCloud() {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                let bio = document.getElementById("biography").value;
                let headline = document.getElementById("headline").value;
                let firstName = document.getElementById("firstName").value;
                let lastName = document.getElementById("lastName").value;
                let experience = document.getElementById("experience").value;
                let references = document.getElementById("references").value;
                var user = firebaseUser.uid
                var profile = {
                    "profile": {
                        "firstName": firstName,
                        "lastName": lastName,
                        "Headline": headline,
                        "Biography": bio,
                        "Experience": experience,
                        "References": references

                    }
                }
                db.collection("users").doc(user).update(profile)
                    .then(function () {
                        console.log("JSON created")
                        
                    })
                alert("Profile Updated!")
            }
        })
    }
    addJsonToCloud();
})




/*function showPic(){
    const fileInput = document.getElementById("myProfPic");
    const image = document.getElementById("myPic");
    fileInput.addEventListener("change", function(pic){
        var myPic = URL.createObjectURL(pic.target.files[0]);
        image.src = myPic;
    })
}
showPic();
*/



function uploadPicToCloud() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user)
            var fileInput = document.getElementById("myProfPic");
            const image = document.getElementById("myPic");
            fileInput.addEventListener("change", function (pic) {
                var myPic = pic.target.files[0];
                var source = URL.createObjectURL(myPic);
                image.src = source;
                var storageRef = storage.ref("images/" + user.uid + ".jpg");
                console.log(storageRef)
                storageRef.put(myPic)
                var id = user.uid;

                storageRef.getDownloadURL()
                    .then(function (url) {
                        db.collection("users").doc(id).update({
                            "profilePic": url
                        })
                            .then(function () {
                                console.log("picture added to firestore");
                            })
                    });
            })
        } else {
            // No user is signed in.
        }
    });
};
uploadPicToCloud();
