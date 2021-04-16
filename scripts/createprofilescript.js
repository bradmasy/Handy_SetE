
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