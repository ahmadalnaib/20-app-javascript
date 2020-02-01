const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");



// show input error message
showError=(input,message)=>{
  const formControl=input.parentElement;
  formControl.className="form-control error";
  const small= formControl.querySelector("small");
  small.innerText=message;

}

// SHOW SUCCESS message
showSuccess=(input) =>{
  const formControl=input.parentElement;
  formControl.className="form-control success";
  
}


// show email is validation

isValidEmail=(email)=>{
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



cheakRequired=(inputArr)=>{
inputArr.forEach((input)=>{
if(input.value.trim()===""){
  showError(input, `${input.id} is required`);
}else{
  showSuccess(input);
}

})



}




form.addEventListener('submit',(e)=>{

cheakRequired([username,email,password,password2]);


  e.preventDefault();
});









// // Event listeners
// form.addEventListener("submit",function(e){

// if(username.value===""){
//   showError(username,"Username is required");
// }else {
//   showSuccess(username);
// }


// if(email.value===''){
//   showError(email,"Email is required");
// } else if (!isValidEmail(email.value)){
//   showError(email,"Email is not valid");
// } 
// else {
//   showSuccess(email);
// }


// if(password.value===''){
//   showError(password,"Password is required");
// } else {
//   showSuccess(password);
// }


// if(password2.value===''){
//   showError(password2,"Password is required");
// } else {
//   showSuccess(password2);
// }

//   e.preventDefault();
// });

