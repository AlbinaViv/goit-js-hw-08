import throttle from 'lodash.throttle';

import '../css/common.css';
// const LS_KEY = "feedback-form-state";
// const refs = {
//     form: document.querySelector(".feedback-form"),
//     textarea: document.querySelector("textarea"),
// };
// const formData = {};


// refs.form.addEventListener("submit", onFormSubmit);
// refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

// refs.form.addEventListener("input", event => {
//     console.log(event.target.name);
//     console.log(event.target.value);

//     formData[event.target.name] = event.target.value;

//     console.log(formData);

//     localStorage.setItem(LS_KEY, JSON.stringify(formData));

//     const value = localStorage.getItem(LS_KEY);
//     console.log(value);
//     console.log(JSON.parse(value));

// });


// populateTextarea();

// function onFormSubmit(event) {
//     event.preventDefault();
//     console.log("відправка форми");

//     event.currentTarget.reset();
//     localStorage.removeItem(LS_KEY);
// }

// function onTextareaInput(event) {
//     const message = event.target.value;
//     localStorage.setItem(LS_KEY, message);

// }
// function populateTextarea() {
//     const savedTextarea = localStorage.getItem(LS_KEY);
//     if (savedTextarea) {
//         refs.textarea.value = savedTextarea;
//     }
// } 

import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const formFields = () => {
    const jsonString = localStorage.getItem('feedback-form-state');
    if (jsonString) {
        const formData = JSON.parse(jsonString);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
};
document.addEventListener('DOMContentLoaded', formFields);

const handleSubmit = event => {
    event.preventDefault();
    const jsnStr = localStorage.getItem('feedback-form-state');
    if (jsnStr) {
        const formData = JSON.parse(jsnStr);
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        form.reset();
    }
};
form.addEventListener('submit', handleSubmit);

const savedFormData = () => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    const jsonStringThrottle = JSON.stringify(formData);
    localStorage.setItem('feedback-form-state', jsonStringThrottle);
};

const throttledSaveFormData = throttle(savedFormData, 500);
form.addEventListener('input', throttledSaveFormData);