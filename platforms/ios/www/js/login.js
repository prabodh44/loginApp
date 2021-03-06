function checkAutoLogin(){
    return (localStorage.getItem("userName") || localStorage.getItem("domainName") ? true : false);  
}

function loginData(){
    var params = {
        userName: "",
        password: "",
        domain: ""
    };

    var savedParams = {
        userName: "",
        domainName: "",
        authenticationKey: ""
    };
    
    params.userName = document.getElementById("userName").value.toLowerCase();
    params.password = document.getElementById("password").value.toLowerCase();
    params.domain = document.getElementById("domainName").value.toLowerCase();


    if(params.userName.length > 0 && params.password.length > 0 && params.domain.length > 0){
        window.MyCordovaPlugin.isLoginDataPresent(params, function(result){
            console.log("result: " + result);
            if(result){
                if(params.domain === result.DomainName.toLowerCase() && params.userName === result.UserName.toLowerCase()){
                    // savedParams.authenticationKey = result.AuthenticationKey;
                    // savedParams.userName = result.UserName;
                    // savedParams.domainName = result.DomainName;
                    // localStorage.setItem("savedParams", JSON.stringify(savedParams));

                    localStorage.setItem("authenticationKey", result.AuthenticationKey);
                    localStorage.setItem("userName", result.UserName);
                    localStorage.setItem("domainName", result.DomainName);
                    window.location.href = "newPage.html"
                }
            }
            else{
                alert("Login failed!!");
                document.getElementById("userName").value = "";
                document.getElementById("password").value = "";
                document.getElementById("domainName").value = "";
            }
        });
    }else{
        alert("All fields must be filled");
    }
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

function init(){ 
    document.getElementById('loginBtn').addEventListener('click', loginData);
    var status = checkAutoLogin();
    if(status){
        window.location.href = "newPage.html";
    } 
}

init();

