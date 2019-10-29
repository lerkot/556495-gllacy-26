var feedback = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var name = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");
var form = popup.querySelector(".feedback-form");
var sendComment = popup.querySelector(".btn-send");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}


feedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    username.value = storage;
    email.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!username.value || !email.value || !comment.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
