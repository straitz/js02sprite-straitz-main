
# Лаб. работа № 2: Двигаем спрайт

Мы напишем программу для движения персонажа на игровом поле,
состоящем из клеточек, в ответ на нажатия клавиш. 
Страница на языке HTML уже готова, называется `index.html`, 
и ее изменять не надо. Она загружает файл `play.js`,
содержащий код всех необходимых функций на языке JavaScript.
Вы должны добавить туда логику движения персонажа

Страница выглядит [вот так](./index.html). Для изображения 
игрового поля на ней используется объект Холст (canvas) HTML5 
с фиксированными размерами 512 на 320 пикселей. Одна клетка
имеет размеры 32x32, то есть поле 16 клеток в ширину и 10 клеток
в высоту. Используются два вида изображений - трава для всего поля
и спрайт с прозрачным фоном поверх него для персонажа.

## Ваши задачи

1. Измените функцию `init()`, так, чтобы персонаж располагался в 
   левом верхнем углу.(done)
2. Измените функцию `init()`, так, чтобы все поле заполнялось травой.(done)
3. Измените функцию `moveOnce()` так, чтобы по первому щелчку мыши 
   выполнялась анимация сдвига персонажа вниз от угла. Нужно стирать его в углу.(done)
4. Измените функцию `moveOnce()` так, чтобы по *каждому* щелчку мыши 
   строго выше, строго левее, строго ниже, или строго правее поля,
   выполнялся сдвиг персонажа в соответствующую сторону, кроме случаев,
   когда он уже уперся в край поля с этой стороны. Используйте глобальные
   переменные `ghostRow`, `ghostCol`, и координаты `event.clientX`, 
   `event.clientY` места отпускани кнопки мыши. При щелчке внутри поля
   или, например левее *и* выше, ничего делать не нужно.(1/2 done)
5. По образцу обработчика `onmouseup` напишите обработчик клавиатуры на событие
   `onkeyup`, так, чтобы движение персонажа происходило также и по нажатию
   клавиш со стрелками или A/S/D/W.(done)
6. *Бонус.* Добавьте на поле дерево, и сделайте так, чтобы персонаж не 
   мог вставать на клетку с деревом.(done)


## Оценивание
|Пункт | 1 | 2 | 3 | 4 | 5 | ЧитАкк | всего |
|------|---|---|---|---|---|--------|-------|
|Балл  |   |   |   |   |   |        |       |
