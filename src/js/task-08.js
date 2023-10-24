const loginForm = document.querySelector("loginForm");
document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;

    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
      alert("¡Por favor, complete todos los campos!");
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value,
      };

      console.log(formData);

      this.reset();
    }
  });
