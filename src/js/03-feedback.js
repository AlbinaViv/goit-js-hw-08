import throttle from 'lodash.throttle';

import '../css/common.css';
const LS_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
// const email = form.elements.email;
// const message = form.elements.message;
const valueEl = localStorage.getItem(LS_KEY);

document.addEventListener('DOMContentLoaded', onFormValue);
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(savedFormData, 500));

// const formData = {};

const onFormValue = () => {
    if (valueEl) {
        const formData = JSON.parse(valueEl);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
};

const onFormSubmit = event => {
    event.preventDefault();
    const valueEl = localStorage.getItem('feedback-form-state');
    if (valueEl) {
        const formData = JSON.parse(valueEl);
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        form.reset();
    }
};

const savedFormData = () => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

