const button = document.querySelector(".header__content > a"); // кнопка
const text = document.querySelector(".header__content > p"); // текст

function toggleText() {
    button.addEventListener("click", () => { // если был клик по кнопке - показываем/скрываем текст
        text.classList.toggle("active");
        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            button.innerHTML = "Скрыть" + "&nbsp;"; // меняем содержимое кнопки в зависимости от состояния
        }
        else {
            button.innerHTML = "Показать весь" + "&nbsp;";
        }
    })
    showButton();
    
    window.addEventListener('resize', function () { // обработчик изменения размера экрана
        showButton();
    })
}

function showButton() {
    if (text.scrollHeight == text.clientHeight) { // если текст вмещается полностью, то кнопку убираем
        button.style.display = "none";
    }
    else {
        button.style = '';
    }
}

export { toggleText }