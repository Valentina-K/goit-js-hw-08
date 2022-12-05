import throttle from 'lodash.throttle';
const FEEDBACK_FORM_STATE = "feedback-form-state";

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('.feedback-form input');
const textRef = document.querySelector('.feedback-form textarea');

let storage = {};
updatePage();
formRef.addEventListener('input', throttle(onChangeValue,500));
formRef.addEventListener('submit', onFormSubmit);


function onChangeValue(evt) {
    storage[evt.target.name] = evt.target.value;
    
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(storage));
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM_STATE);

    console.log(storage);    
    clearStorage(storage);    
}

function updatePage() {
    const storageString = localStorage.getItem(FEEDBACK_FORM_STATE);
    if (storageString) {
        storage = JSON.parse(storageString);
        inputRef.value = storage.hasOwnProperty('email')?storage['email']:'';
        textRef.value = storage.hasOwnProperty('message')?storage['message']:'';
    }
}

function clearStorage(obj){
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            obj[key] = '';        
        }
    }
}
