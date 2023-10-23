import throttle from 'lodash.throttle';

const KEY_FORM = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');

function checkStorageAfterRefresh() {
  const currentStorage = JSON.parse(localStorage.getItem(KEY_FORM));
  if (currentStorage !== null) {
    emailEl.value = currentStorage.email;
    messageEl.value = currentStorage.message;
  }
}
checkStorageAfterRefresh();

const setObjectInStorageThrottled = throttle(function (event) {
  const formObj = { email: emailEl.value, message: messageEl.value };
  localStorage.setItem(KEY_FORM, JSON.stringify(formObj));
}, 500);
formEl.addEventListener('input', setObjectInStorageThrottled);

function getObjAndReset(event) {
  event.preventDefault();
  const currentStorage = JSON.parse(localStorage.getItem(KEY_FORM));
  console.log(currentStorage);
  localStorage.removeItem(KEY_FORM);
  formEl.reset();
}
formEl.addEventListener('submit', getObjAndReset);
