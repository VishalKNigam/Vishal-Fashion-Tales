
    let signUp = document.querySelector('.nav>button:nth-child(1)');
    let logIn = document.querySelector('.nav>button:nth-child(2)');
    let logInForm = document.querySelector('#login')
    let signUpForm = document.querySelector('#signup')
    let loginarray = JSON.parse(localStorage.getItem("loginarray")) || [];
    signUp.addEventListener("click",function(){
       
        logInForm.style.display = 'none';
        signUpForm.style.display = 'block';
        
        //loginarray.push(ele);
        
        // loginarray.push(ele);
        // localStorage.setItem("loginarray",JSON.stringify(loginarray));

        //setTimeout(function(){},2000);
        // setTimeout(function login(){
        //     console.log("hi")
        // },3000)
       
    })
    logIn.addEventListener("click",function(){
        logInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        //setTimeout(function(){},2000);
    
    })
    
     signUpForm.addEventListener("submit",function(ele){
          ele.preventDefault();
          let element = {
            name2: signUpForm.name2.value,
            email2: signUpForm.email2.value,
            password2: signUpForm.password2.value,
            //name: signUpForm.name2.value,
            //name: signUpForm.name2.value,
            
          }
          loginarray.push(element);
           localStorage.setItem("loginarray",JSON.stringify(loginarray));
     })
     let email = logInForm.email.value;
     let password = logInForm.password.value; 
     logInForm.addEventListener("submit",function(el){
        el.preventDefault();
        if(registered(loginarray)){
            alert("Login Successfully!!")
            
        }else {
            alert("Please Register yourself!!")
        }
        
  })
  function registered(data){
      for(let i=0; i<data.length; i++){
        if((logInForm.email.value == data[i].email2) && (logInForm.password.value ==  data[i].password2)){
            return true;
        }
        
      }
      return false
  }
