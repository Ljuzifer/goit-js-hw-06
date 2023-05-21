const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onGetFormData);

function onGetFormData(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("input");

  if (inputs[0].value.trim() === "" || inputs[1].value.trim() === "") {
    return alert("All fields must be filled!");
  }

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };
  loginForm.reset();
  console.log(formData);
}
