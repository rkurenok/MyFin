const tabs = document.querySelector(".tabs__items"); // табы
let selectedTab = document.querySelector(".tabs__item");

function showTabContent() {
    tabs.addEventListener('click', (e) => {  // вешаем обработчик событий клика
        e.preventDefault(); // предотвращаем действие браузера по умолчанию

        const target = e.target; // где был клик?
        if (target.tagName != 'A') return; // если не по ссылке (можно кликнуть по пустому месту рядом) - останавливаем функцию

        if (selectedTab) { // убрать существующую подсветку, если есть
            selectedTab.classList.remove('active');
        }
        selectedTab = target;
        selectedTab.classList.add('active'); // подсветить новый td

        // показываем контент
        const id = target.getAttribute("href");
        const content = document.querySelector(id);
        if (!content.classList.contains("active")) {
            const nextElem = content.nextElementSibling;
            const prevElem = content.previousElementSibling;
            
            content.classList.add("active");
            if (nextElem && nextElem.classList.contains("active")) {
                nextElem.classList.remove("active");
            }
            else {
                prevElem.classList.remove("active");
            }
        }
    })
}

export { showTabContent }