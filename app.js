const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe?.user;

const hello = document.getElementById("hello");

if (user) {
    hello.textContent = `Привет, ${user.first_name}!`;
} else {
    hello.textContent = "Открой приложение через Telegram";
}

document.getElementById("button").addEventListener("click", () => {
    tg.showAlert("🎉 Всё работает!");
});