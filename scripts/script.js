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
