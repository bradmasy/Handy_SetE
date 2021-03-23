function showUploadedPicture(){
    const fileInput = document.getElementById("mypic-input");   // pointer #1
    const image = document.getElementById("mypic-goes-here");   // pointer #2
    fileInput.addEventListener('change', function(e){        //event listener
        var blob = URL.createObjectURL(e.target.files[0]);
        image.src = blob;    //change DOM image
    })
}
showUploadedPicture();

/* saving job posting picture to firebase */

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      // Do something for the user here. 
    } else {
      // No user is signed in.
    }
  });


 