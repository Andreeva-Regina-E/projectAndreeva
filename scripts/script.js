'use strict'
document.addEventListener('DOMContentLoaded', () => {
// * 1. Начало.
// * 2. Получаем все элементы изображений с описанием.
// * 3. Для каждого изображения (проверяем есть ли такие изображения):
// *    3.1. Добавляем обработчик наведения курсора на изображение:
// *        3.1.1. Да:
// *            3.1.1.1. показываем текст при наведении.
// *            3.1.2. Нет: продолжаем.
// *    3.2. Добавляем обработчик курсор уходит с изображения:
// *        3.3.1. Да: 
// *            3.3.1.1. Скрываем элемент с описание.
// *        3.3.2. Нет: продолжаем.
// * 4. Конец

const LOGImg = document.querySelector(".LOG__img");
LOGImg.addEventListener('mouseenter', () => {
    console.log('Мышка наведена на изображение, показываем текст');
});

});



const heightHeader = header.offsetHeight;           // определяем высоту блока, включая внутренние отступы

document.addEventListener('scroll', () => {         // навешиваем слушатель событий на scroll страницы и ожидаем ее прокрутку

    console.log('Страница скролится');

    let scrollPageY = this.scrollY;                 // получаем значение насколько прокрутили страницу

    if (scrollPageY > heightHeader) {               // условие: если расстояние от верха страницы больше высоты элемента
        header.classList.add('header--scroll')      // устанавливаем класс модификатора на элемент
    } else {
        header.classList.remove('header--scroll')   // удаляем класс модификатора у элемента
    }

});


const CoachesContainer = document.querySelector(".coaches");

if (CoachesContainer){
    const dataTitleCoaches = [
        "Ксения Ишуткина",
        "Елена Смирнова",
        "Александр Иванов",
        "Герман Шматков",
        "Юлия Петрова",
    ];

    const titleCoaches =
        coachesContainer.querySelectorAll(".coaches__subtitle");

        titleCoaches.forEach((item, index) => {
        item.textContent = dataTitleTreners[index];
       });
 }

//Объявляем переменную welcоmeButtonModal и сохраняем в нее кнопку c классом welcome__button
const freelessonButtonModal = document.querySelector(".free-lesson__button");
//объявляем переменную modalApplication и сохраняем в нее модальное окно, которое хотим увидеть
const modalApplication = document.querySelector(".applications");

//Если есть такая кнопка и модальное окно
if (freelessonButtonModal && modalApplication) {
//Для кнопки «Записаться на курс» добавляем обработчик события клика по этой кнопке:
    freelessonsButtonModal.addEventListener("click", () => {
// удаляем атрибут hidden у модального окна modalApplication и модальное окно становится видимым
      modalApplication.removeAttribute("hidden");
    });
}

// добавляем обработчик события при клике вне области формы. Тогда каждый раз, когда пользователь кликает где-либо на фоне вокруг появившейся формы, будет вызываться функция,
window.addEventListener("click", (event) => {
// проверяем, был ли клик на фоне модального окна
    if (event.target === modalApplication) {
//если условие выполняется, добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
        modalApplication.setAttribute("hidden", true);
    }
});

//Объявляем переменную closeModalButton и сохраняем в нее кнопку c классом application__button
const closeModalButton = document.querySelector(".application__close");

//Для кнопки «Закрыть» добавляем обработчик события клика по этой кнопке:
closeModalButton.addEventListener("click", () => {
// Добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
    modalApplication.setAttribute("hidden", true);
});


//Объявляем переменную cardsPrice и сохраняем в нее элемент с классом price
const cardsPrice = document.querySelector('.price');

// Если такой элемент существует
if (cardsPrice) {
//Объявляем переменную priceList и сохраняем в нее элемент с классом price__list, чтобы мы могли добавить новые элементы
        const priceList = cardsPrice.querySelector('.price__list');

//Создаем объект cardsPriceData, которая содержит данные для трех карточки.
        const cardsPriceData = {
// каждая ссылка содержит level (название тарифа), price (цена), description (описание тарифа), button (кнопку для оформления заявки).
            price1: {
                level: '– PRO –',
                price: '8 900 ₽',
                description: '4 месяца',
                button: 'Оставить заявку'
            },
            price2: {
                level: '– POBO –',
                price: '11 900 ₽',
                description: '6 месяцев',
                button: 'Оставить заявку'
            },
            price3: {
                level: '– PROG –',
                price: '2 850 ₽',
                description: '1 месяц',
                button: 'Оставить заявку'
            }
        }

//Создаем функцию createCard, которая будет добавлять карточку. Внутри функции 4 переменные: level (название тарифа), price (цена), description (описание тарифа), button (кнопку для оформления заявки)
        const createCard = (level, price, description, button) => {
// Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 4 переменные
            const card = `
            <li class="price__item">
                <p class="price__level">${level}</p>
                <p class="price__price">${price}</p>
                <p class="price__description">${description}</p>
                <button class="price__button button">${button}</button>
            </li>
        `;
//  Возвращаем значение переменной card
            return card;
        }
// Создаем цикл for и проходим по всем элементам объекта cardsPriceData.
        for (const cardKey in cardsPriceData) {
//Получаем данные одной карточки из объекта cardsPriceData 
            const card = cardsPriceData[cardKey];
//создаем переменную cardElement и вызываем функцию createLink, куда передаем тариф, цену, описание и кнопку (то, из чего будет состоять ваша карточка).
            const cardElement = createCard(card.level, card.price, card.description, card.button);
// с помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка priceList.
            priceList.insertAdjacentHTML('beforeend', cardElement);
        }
}


//Объявляем переменную headerMenu и сохраняем в нее header__menu
const headerMenu = document.querySelector('.header__menu');
// Если такой элемент существует
if (headerMenu){
//Объявляем переменную headerList и сохраняем в нее header__list, чтобы мы могли добавить новые элементы
        const headerList = headerMenu.querySelector('.header__list');

//Создаем объект menuData, который содержит данные для трех ссылок меню.
        const menuData = {
// Каждая ссылка содержит link (адрес ссылки; если ссылка никуда не ведет, то можно оставить #) и title (текст ссылки).
            link1: {
                link: '#',
                title: 'Главная',
            },
            link2: {
                link: '#',
                title: 'Каталог тренировок',
            },
            link3: {
                link: '#',
                title: 'Тренеры',
            },
            link3: {
                link: '#',
                title: 'Прайс',
            },
            link3: {
                link: '#',
                title: 'Контакты',
            }
        }

//Создаем функцию createLink, которая будет добавлять ссылку в меню. Внутри функции 2 переменные: UrlLink – адрес, а title — текст ссылки.
        const createLink = (UrlLink, title) =>{
// создаем переменную  link, которая будет содержать HTML-код ссылки и вставляем в него 2 переменные
            const link = `
            <li class="header__item"><a href="${UrlLink}" class="header__link">${title}</a></li>
            `;
            return link;
        }

// Создаем цикл for и проходим по всем элементам объекта menuData.
        for (const linkItem in menuData) {
//Получаем данные для ссылки и сохраняем в переменную link.
            const link = menuData[linkItem];
//Создаем переменную linkIndex и вызываем функцию createLink, куда передаем адрес и заголовок.
            const linkIndex = createLink(link.UrlLink, link.title);
// С помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка headerList.
            headerList.insertAdjacentHTML('beforeend', linkIndex);

        }
}

