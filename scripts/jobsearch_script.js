let button = document.getElementById("submitButton");

button.addEventListener("click", function(){
    alert("im working");
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var nameID = firstName + "_" + lastName;
    var city = document.getElementById("location").value;
    var jobField = document.getElementById("field").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var salary = document.getElementById("salary").value;
    var email = document.getElementById("email").value;

    nameID ={First_Name:firstName,Last_Name:lastName,City:city,Job_Field:jobField,Job_Title:jobTitle,Salary:salary,Email:email
         
    };
    console.log(nameID);   
})
