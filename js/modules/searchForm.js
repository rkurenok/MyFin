const button = document.querySelector(".header__search-button-reset"); // кнопка
const input = document.querySelector(".header__search-input"); // поле ввода

function showButton() {
    button.addEventListener('click', (e) => {  // вешаем обработчик событий клика
        e.preventDefault(); // предотвращаем действие браузера по умолчанию (submit в form = перезагрузка страницы)
        input.value = ""; // удаляем содержимое поля поиска
        button.classList.remove('active'); // скрываем кнопку
    })
}

function clearInput() {
    input.addEventListener('input', () => { // обработчик события на изменение содержимого
        if (input.value) { // если что-то ввели
            button.classList.add('active'); // показываем кнопку (крестик)
        }
        else { // если все стерли
            button.classList.remove('active'); // скрываем кнопку
        }
    })
}

export {showButton, clearInput}