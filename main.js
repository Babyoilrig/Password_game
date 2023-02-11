let correctPassword = "admin123";
let attempts = 0;

function checkPassword(){

    while (attempts<3){
        let userPassword = prompt("What's your password?");
       if(userPassword === correctPassword){
        alert("Correct!");
        return true;
       } 
       else{
        alert("Incorrect!");
       }
       attempts++;
    }
    return false;
};
checkPassword();