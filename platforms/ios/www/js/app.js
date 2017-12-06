
document.addEventListener('DOMContentLoaded', function () {
    
    
    if(document.getElementById('saveBtn')){
        document.getElementById('saveBtn').addEventListener('click', insertData);
    }
    
    if(document.getElementById('loginBtn')){
        document.getElementById('loginBtn').addEventListener('click', loginData);
    }

    if(document.getElementById('createUser')){
       localStorage.setItem("prevScreen", "login.html");
    }

    if(document.getElementById('changePassword')){
        var text = "Hello " + localStorage.getItem("username");
        document.querySelector("h2").innerHTML = text;
    }

    if(document.getElementById("confirmBtn")){
        document.getElementById('confirmBtn').addEventListener('click', confirmPassword);
    }

    if(document.getElementById("backButton")){
        document.getElementById('backButton').addEventListener('click', backButton);
    }
});



function insertData(){
    var username = document.getElementById("new_username").value;
    var password = document.getElementById("new_password").value;
    var params = {
        username: "",
        password: ""
    };
    
    if(username.length > 0 && password.length > 0){
        params.username = username;
        params.password = password; 
        window.MyCordovaPlugin.insertIntoTable(params, function(status){
            if(status === "PRESENT"){
                alert("Username already present");
                document.getElementById("new_username").value = "";
                document.getElementById("new_password").value = "";
            }else{
                alert("new user created");
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                window.location.href = "newPage.html";
                localStorage.setItem("prevScreen", "newUser.html");
            }
        });
    }else{
        alert("All fields must be filled");
    }

    localStorage.setItem("prevScreen", "login.html");
}

function loginData(){
    var params = {
        username: "admin",
        password: "abcdef",
        domain: "novago"
    };

    window.MyCordovaPlugin.isLoginDataPresent(params);
    // var username = document.getElementById("username").value;
    // var password = document.getElementById("password").value;
    // if(username.length > 0 && password.length > 0){
    //     params.username = username;
    //     params.password = password; 
    //     window.MyCordovaPlugin.isLoginDataPresent(params, function(status){
    //         if(status == "OK"){
    //             alert("you are logged in");
    //             localStorage.setItem("username", username);
    //             localStorage.setItem("password", password);
    //             window.location.href = "newPage.html"
    //         }else{
    //             alert("Username or password incorrect");
    //             document.getElementById("username").value = "";
    //             document.getElementById("password").value = "";
    //         }
    //         });
    // }else{
    //     alert("All fields must be filled");
    // }
    
}

// function showData(){
//     document.getElementById("username").value = localStorage.getItem("username");
//     document.getElementById("password").value = localStorage.getItem("password");
    
// }

function confirmPassword(){
    // if(newPassword.length > 0){
    //     if(newPassword === localStorage.getItem("password")){
    //         alert("Same as previous password");
    //     }else{
    //         var params = {
    //             username: "",
    //             password: ""
    //         };
            
    //         params.username = localStorage.getItem("username");
    //         params.password = newPassword;
    //         window.MyCordovaPlugin.updateUserData(params);
    //         alert("password has been changed");
    //     }
    // }else{
    //     alert("Password field cannot be empty");
    // }

    var oldPassword = document.getElementById("old_password");
    var newPassword = document.getElementById("new_password");
    var retypePassword = document.getElementById("retype_password");

    if(newPassword == retypePassword){
        //TODO: encrypt the new password
        alert("do something here");
    }
    if(oldPassword == newPassword || oldPassword == retypePassword){
        alert("Password is same as previous");
    }
}

function backButton(){
    if(localStorage.getItem("prevScreen") !== ""){
        window.location.href = localStorage.getItem("prevScreen");
    }
}

