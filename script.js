
var p = document.getElementById('erro')
const name = document.getElementById('inpt-name')
const last = document.getElementById('inpt-last')
const email = document.getElementById('inpt-email')
const password = document.getElementById('inpt-pass')
const card2 = document.querySelector('.card2')
const forms = document.querySelector('.forms')
var icon1 = document.getElementById('icon1')
var icon2 = document.getElementById('icon2')
var icon3 = document.getElementById('icon3')
var icon4 = document.getElementById('icon4')
function validacao(){
    var certo = 0
    if(name.value == ""){
        icon1.style.display = "flex"
         name.style.border ="1px solid red"
    }
    else{
        certo++;
    }
     if(last.value == ""){
        icon2.style.display = "flex"
        last.style.border = "1px solid red"
    } 
    else{
        certo++;
    } 
     if(email.value == "" ){
        icon3.style.display = "flex"
        email.style.border = "1px solid red"
     }
     else{
        certo++;
     }
     if(password.value == ""){
        icon4.style.display = "flex"
        password.style.border = "1px solid red"
    }
    else{
        certo++;
    }
     if(certo == 4){
        forms.style.display = "none"
        card2.style.display = "flex"
     }
 
}
function back(){
    name.value = ""
    last.value = ""
    email.value = ""
    password.value = ""
    forms.style.display = "flex"
    card2.style.display = "none"

}
 