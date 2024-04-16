const forms = document.querySelectorAll('.form')
const btnSubmitHeroForm = document.querySelector('#btn-submit-hero-form')
const btnSubmitJoinusForm = document.querySelector('#btn-submit-joinus-form')
const inputNameHeroForm = document.querySelector('#name-hero-form')
const inputEmailHeroForm = document.querySelector('#email-hero-form')
const inputPhoneHeroForm = document.querySelector('#phone-hero-form')
const inputNameJoinUsForm = document.querySelector('#name-joinus-form')
const inputEmailJoinUsForm = document.querySelector('#email-joinus-form')
const inputPhoneJoinUsForm = document.querySelector('#phone-joinus-form')
const textBtnSubmitHeroForm = document.querySelector('.text-btn-hero-form')
const textBtnSubmitJoinUsForm = document.querySelector('.text-btn-joinus-form')
const spinnerHeroBtn = document.querySelector('.spinner-hero-btn')
const spinnerJoinUsBtn = document.querySelector('.spinner-joinus-btn')
const greetingsDialog = document.querySelector('#greetingsDialog');

//const urlTest = 'http://localhost:8080/lead'
//const url = 'https://www.weddinglink.io/lead'
const urlTest = 'http://localhost:8080/form/send'

forms.forEach(form => {
    form.addEventListener('submit', (event) => {
        //event.preventDefault();
    })
})

btnSubmitHeroForm.addEventListener('click', () => {
    const {name, email, phone} = getInputsValues(inputNameHeroForm, inputEmailHeroForm, inputPhoneHeroForm);
    SendForm(urlTest, name, email, phone, textBtnSubmitHeroForm, spinnerHeroBtn);
    forms.forEach(form => {
        if (form.classList.contains('hero-form')) {
            form.reset();
        }
    })
})

btnSubmitJoinusForm.addEventListener('click', () => {
    const {name, email, phone} = getInputsValues(inputNameJoinUsForm, inputEmailJoinUsForm, inputPhoneJoinUsForm);
    SendForm(urlTest, name, email, phone, textBtnSubmitJoinUsForm, spinnerJoinUsBtn);
    forms.forEach(form => {
        if (form.classList.contains('joinus-form')) {
            form.reset();
        }
    })
})

function SendForm(url, name, email, phone, textBtn, spinner) {
    if (name && email && phone) {
        textBtn.classList.add('hide')
        spinner.classList.remove('hide')
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({name, email, phone}),
            headers: { 'Content-Type': 'application/json'}
        })
        .then( res => res.json())
        .catch(err => console.log(err))
        .then(response => {
            if (response.msg) {
                if (response.msg == 'success') {
                    greetingsDialog.showModal();
                }
            }
    
            if(response.errors) {
                window.alert(`Error: ${response.errors[0].msg}`)
            }
            textBtn.classList.remove('hide');
            spinner.classList.add('hide');
        })
    }
}

function getInputsValues(inputName, inputEmail, inputPhone) {
    return {
        name: inputName.value,
        email: inputEmail.value,
        phone: inputPhone.value
    }
}

inputPhoneHeroForm.addEventListener('keydown', (event) => {
    onlyNumbersInput(event, inputPhoneHeroForm)
})

inputPhoneJoinUsForm.addEventListener('keydown', (event) => {
    onlyNumbersInput(event, inputPhoneJoinUsForm)
})

function onlyNumbersInput(event, input) {
    const character = event.key;
    if (!/^\d+$/.test(character)) {
        event.preventDefault()
    }

    if (event.code == 'Backspace') {
       const inputText = input.value;
       input.value = inputText.slice(0, -1);
    }

}