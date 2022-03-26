const createAccountBtn = document.querySelector('[data-create-account-btn]');
const modalWrap = document.querySelector('[data-modal-wrap]');
const modal = document.querySelector('[data-modal]')
const closeModalBtn = document.querySelector('[data-modal-close]')

const createAccountSubmitBtn = document.querySelector('[data-create-account-submit]')
const password = document.querySelector('[data-password]')
const confirmPassword = document.querySelector('[data-confirm-password]')

createAccountBtn.addEventListener('click', () => {
    openModdal();
})

modalWrap.addEventListener('click', (e) =>{
   if (e.target.matches(".close") || !e.target.closest(".modal")) {
    closeModal();
   }
})

confirmPassword.addEventListener('input', (e) => {
    checkPassword();
})

function closeModal() {
    modalWrap.style.visibility = 'hidden';
}

function openModdal() {
    modalWrap.style.visibility = 'visible';
}

function checkPassword() {
    let pword = password.value;
    let confirm = confirmPassword.value

    if (pword == confirm) {
        confirmPassword.style.border = "2px solid green";
        submitButton.disabled = false
    } else {
        confirmPassword.style.border = "2px solid red";
        submitButton.disabled = true;
    } 
}