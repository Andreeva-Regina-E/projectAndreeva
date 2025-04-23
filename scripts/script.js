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





