let checkbox = document.querySelector('input[type="checkbox"');
let UserNameSave = document.querySelector('input[type="text"')
if(localStorage.length>0){
  UserNameSave.value = localStorage.getItem('saveUserName');
}
checkbox.addEventListener('click',()=>{
  if(checkbox.checked){
    localStorage.setItem('saveUserName',UserNameSave.value)
  }
})