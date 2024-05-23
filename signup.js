var users = [{username:'Imane', email : 'imanehachefi@gmail.com', password: 'imane1998'},
{username:'Sofia', email: 'user2@gmail.com', password: 'user2abcd'}]
function add(){
    var nameValue = document.getElementById('inp1')
    var emValue = document.getElementById('inp2').value;
    var pValue = document.getElementById('inp3').value;
    if(pValue.length <8 ){
        document.getElementById('sp3').innerHTML = 'password must contain 8 caracters';
    }
    var user ={};
    user.username = nameValue;
    user.email = emValue;
    user.password = pValue;
    user.push(user);

    console.log(users);
}


function showPass(){
    var passInput = document.getElementById('inp3');
   if (passInput.type == 'password'){
    passInput.type = 'text';
   }
   else if (passInput.type == 'text'){
    passInput.type = 'password';
   }
}

function login(){
     var nameValue = document.getElementById('inp1').value ;
     var emailValue = document.getElementById('inp2').value ;
     var passValue = document.getElementById('inp3').value ;

     if(nameValue == ''){
        document.getElementById('sp1').innerHTML = 'Name must be filled out';
        return false;
     }
    else if (emailValue == ''){
        document.getElementById('sp2').innerHTML = 'Email must be filled out';
        return false;
    }
    else if( passValue == ''){
        document.getElementById('sp3').innerHTML ='Password must be filled out';
        return false;
    }
    for(var i=0; i<users.length; i++){
        if( users[i].password == passValue){
        return true;    
        }
    }
 document.getElementById('sp2').innerHTML = 'please try again';
          return false;
}