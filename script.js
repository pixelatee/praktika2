// Переменная для хранения пользователей
let users = [];

// Функция для загрузки данных из users.json
fetch("users.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Не удалось загрузить файл users.json");
    }
    return response.json();
  })
  .then((data) => {
    users = data; // Сохраняем пользователей
    console.log("Пользователи загружены:", users);
  })
  .catch((error) => {
    console.error("Ошибка загрузки JSON:", error);
  });

// Функция для проверки входа
function login(phone, password) {
  // Ищем пользователя с указанным номером и паролем
  const user = users.find((u) => u.phone === phone && u.password === password);
  if (user) {
    alert("Успешный вход!");
  } else {
    alert("Неверный номер телефона или пароль.");
  }
}

// Подключение функций к кнопке входа (если есть)
document.querySelector("#loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Отключаем стандартное поведение формы
  const phone = document.querySelector("#phone").value;
  const password = document.querySelector("#password").value;
  login(phone, password);
});
