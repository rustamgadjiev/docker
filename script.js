const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.onsubmit = (e) => {
  e.preventDefault();

  if (inputs.some((input) => input.value === "")) {
    alert("Заполните все поля");
    return;
  }

  // const newUser = { userName: input.value };

  fetch("https://6238ce080a54d2ceab7a54d2.mockapi.io/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  })
    .catch((e) => console.log(e))
    // .finally(() => (input.value = ""));
};
