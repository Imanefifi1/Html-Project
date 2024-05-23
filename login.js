var users = [{email : 'imanehachefi@gmail.com', password: 'imane1998'},
{email: 'user2@gmail.com', password: 'user1abcd'}]

function showPass(){
    var passInput = document.getElementById('inp2');
   if (passInput.type == 'password'){
    passInput.type = 'text';
   }
   else if (passInput.type == 'text'){
    passInput.type = 'password';
   }
}

function login(){
     var emailValue = document.getElementById('inp1').value ;
     var passValue = document.getElementById('inp2').value ;

     if(emailValue == ''){
        document.getElementById('sp1').innerHTML = 'Email must be filled out';
        return false;
     } else if (passValue == ''){
        document.getElementById('sp2').innerHTML = 'Password must be filled out';
        return false;
    }

    for(var i=0; i<users.length; i++){
        if(users[i].email == emailValue && users[i].password == passValue){
        return true;    
        }
    }
 document.getElementById('sp2').innerHTML = 'Account nonexistant, please try again';
          return false;
}