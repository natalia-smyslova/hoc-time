[![Build status](https://ci.appveyor.com/api/projects/status/6rt9837w9wqgychx/branch/main?svg=true)](https://ci.appveyor.com/project/natalia-smyslova/hoc-time/branch/main)

[![Netology AHJ](https://github.com/natalia-smyslova/hoc-time/actions/workflows/web.yml/badge.svg)](https://github.com/natalia-smyslova/hoc-time/actions/workflows/web.yml)

Форматирование даты публикации
===

Есть страница, содержащая список видеозаписей. 
У каждого блока есть дата публикации. 

![Relative Time](https://github.com/natalia-smyslova/ra16-homeworks/raw/master/hoc/time/assets/time.png)

В данный момент выводится просто текущее значение. Пример: `2017-09-01 14:15:10`. 
Решено изменять представление даты следующим образом в зависимости от его значения:
`12 минут назад`, если прошло меньше часа, `5 часов назад`, если прошло больше часа, `X дней назад`, если больше суток.

## Реализация

Используя HOC, обернуть `DateTime` в компонент `DateTimePretty` так, чтобы он преобразовывал дату в нужный вид.

Воспользуйтесь готовым файлом `App.js` и стилями `css/index.css` из каталога в качестве отправной точки. Замените ими те, что создаются в create-react-app.

Для работы с датой и временем можете воспользоваться библиотекой Moment.js.
