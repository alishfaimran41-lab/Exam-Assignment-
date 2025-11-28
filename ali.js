document.addEventListener('DOMContentLoaded', () =>{
    const themeButton= document.createElement('button');
    themeButton.textContent= 'change Theme';
    themeButton.id= 'theme-toggle';
    document.body.appendChild(themeButton);
    let isDarkMode = false ;

    themeButton.addEventListener('click',() =>{
        isDarkMode = !isDarkMode;
        document.body.style.backgroundColor= isDarkMode? '#333':'#fff';
        document.body.style.color= isDarkMode? '#fff' : '#000';
        
    });
});
document.getElementById('contactform').addEventListener('submit', function (event) {
    let name= document.getElementById('name');
    let email= document.getElementById('email');
    let message= document.getElementById('message');
    let valid= true;

    document.getElementById('nameerror').innertext= '';
    document.getElementById('emailerror').innertext= '';
    document.getElementById('messageerror').innertext= '';

    if (!name.value) {
          document.getElementById('nameerror').innertext= '';
          valid = false;
    }
    if (! email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) ) {
          document.getElementById('emailerror').innertext= '';
          valid = false;
    }
    if (!message.value || message.value.lenght < 10) {
          document.getElementById('messageerror').innertext= '';
          valid= false;
    }
    if (!valid) {
        event.preventDefault();
    }
});
document.getElementById('addupdateBtn').addEventListener('click', function () {
    let updateInput= document.getElementById('updateInput');
    let updateList= document.getElementById('updateInput');
    let updateError= document.getElementById('updateInput');
    updateError.innerText= '';
    if (!updateInput.value) {
        updateError.innerText= 'Input cannot be empty';
        return;
    }
    let newItem= document.createElement('Li');
    newItem.textContent= updateInput.value;
    newItem.style.backgroundColor= '#f0f0f0';
    newItem.style.padding= '10px';
    updateList.appendChild(newItem);
    updateInput.value= '';
});