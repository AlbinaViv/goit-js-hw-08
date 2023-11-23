import throttle from 'lodash.throttle';

const LS_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector("textarea"),
    input: document.querySelector("input"),
};


let formData = {};


refs.form.addEventListener("submit", throttle(onFormSubmit, 500));
refs.form.addEventListener("input", throttle(onTaxteareaInput, 500));

function onTaxteareaInput(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(LS_KEY, JSON.stringify(formData));

}


function onFormSubmit(event) {
    console.log(formData);

    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(LS_KEY);
}

populateTextarea();

function populateTextarea() {
    const savedTextarea = localStorage.getItem(LS_KEY);
    const savedInput = JSON.parse(savedTextarea);

    if (savedTextarea) {
        refs.input.value = savedInput.email;
        refs.textarea.value = savedInput.message;
    }
}


