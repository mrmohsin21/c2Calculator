const btn = document.querySelectorAll(".btn");

for (let i = 0; i < btn.length; i++) {
  let button = btn[i];
  button.addEventListener("click", () => {
    let input = document.querySelector(".input");

    switch (button.textContent) {
      case "AC":
        input.textContent = "";
        break;
      case "=":
        input.textContent = eval(input.textContent);
        break;
      default:
        input.textContent += button.textContent;
    }
  });
}
