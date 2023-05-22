const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onGetFormData);

function onGetFormData(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  // console.log(event.currentTarget.elements);

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("All fields must be filled!");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  loginForm.reset();
  console.log(formData);
}
