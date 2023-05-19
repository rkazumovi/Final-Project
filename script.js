(function () {
    const rootEl = document.querySelector('#app');
    const searchInput = document.querySelector('#search');
    const toggleThemeBtn = document.querySelector('.btn-1');
    const htmlEl = document.querySelector('html');
    const API_URI = 'https://api.github.com/users/USERNAME';
    toggleThemeBtn.addEventListener('click', () => {
      const currentMode = htmlEl.getAttribute('data-theme');
      if (currentMode === 'light') {
        htmlEl.setAttribute('data-theme', 'dark');
        toggleThemeBtn.innerHTML = 'light <img src="images/icon-sun.svg" alt="sun-icon">';
      } else {
        htmlEl.setAttribute('data-theme', 'light');
        toggleThemeBtn.innerHTML = 'dark <img src="images/icon-moon.svg" alt="moon-icon">';
      }
    });
    if (API_URI = undefined) {
        alert("User not found");
    };
    if (data = error) {
        fetch('https://api.github.com/users/USERNAME').then((Response) =>
        Response.json()
        ).catch((error) => console.log(error))
    };   
})()
const text3El = document.querySelector("#text3");
const Func = (text3) => {
  if (2 > 1) {
    text3El.textContent = Number;
  } else {
    text3El.textContent = Number;
  }
};
for (let i = 0; i < Number; i++) {
  gameItems[i].addEventListener("click", () => {
    const randomNum = Math.floor(Math.random());
    text3.textContent = gameItems[i].textContent;
    Func(gameItems[i].textContent, gameItems[randomNum].textContent);
  });
}
let navigation = document.getElementById("navbar");
let burger = document.getElementById('burgerbar');
burger.addEventListener('click', function () {
    navigation.classList.toggle('activeNav')
})
const searchBtn = document.querySelector("#searchBtn");
const search = document.querySelector("#search");
const app = document.querySelector("#app");
searchBtn.addEventListener("click", () =>
  {
    const el = document.createElement("div");
    el.className = "todo-item";
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "X";
    el.innerText = search.value;
    el.appendChild(removeBtn);
    app.appendChild(el);
    search.value = null;
    const todos = document.querySelectorAll("todo-item");
    for (let i = 0; i < todos.length; i ++) {
      todos[i].childNodes[1].addEventListener("click", () =>
      todos[i].remove());
    }
  }
)
const obj = JSON.stringify('https://api.github.com/users/USERNAME');