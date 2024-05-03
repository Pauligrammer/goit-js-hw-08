import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const formDataStr = localStorage.getItem("feedback-form-state");
if (formDataStr) {
    const formData = JSON.parse(formDataStr);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
}

const dataLocalStorage = (ev) => {
    const data = {
        email: ev.target.elements.email.value,
        message: ev.target.elements.message.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
};
    
form.addEventListener("input", throttle(dataLocalStorage, 500));

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    console.log({
    email: ev.target.elements.email.value,
    message: ev.target.elements.message.value
});
localStorage.clear();
form.reset(0);
});