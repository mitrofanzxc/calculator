# Deploy: [Link](https://mitrofanzxc.github.io/calculator/)

### `npm i`

Install all dependencies.

### `npm run start`

Run the app in the development mode.

### `npm run watch`

Keep track of all changes.

### `npm run cypress:open`

Start testing the app.

## Requirements of the project:

- [x] Необходимо реализовать приложение калькулятор. Приложение должно предоставлять основные арифметические операции, построитель выражений и полную историю всех выражений.
- [x] Обязательная компонентная модель:
  - Header - должен отображать заголовок приложения, а также ссылки на другие страницы.
  - Calculator - корневой элемент для менеджмента данных калькулятора (логика для хранения истории, операций, текущего состояния и т.д.).
  - Display - отображает ввод калькулятора, выражения и историю.
  - History - отображает список ранее выполненных операций.
  - ControlPanel - используется для управления взаимодействиями калькулятора, которые не связаны с расчетными операциями. Например, он предоставляет функционал для открытия/скрытия истории.
  - Keypad - используется для ввода операндов, а также выполнения различных операций с этими операндами..
- [x] Необходимый функционал:
  - Сложение
  - Вычитание
  - Умножение
  - Деление
  - Переключение знака
  - Построитель выражения
  - История операций
  - Показывать полную историю
  - Очистка истории
  - Очистка вычисленного значения и выражения
  - Очистка всего (истории, вычисленного значения и выражения)
  - Точность расчета - 3 символа.
- [x] Дополнительный функционал:
  - Действительные числа могут быть записаны как 0.5 и .5
  - Операция % - остаток от деления
- [x] Для реализации логики приложения, необходимо использовать поведенческий паттерн программирования "Команда", который позволяет превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов, ставить запросы в очередь, логировать их, а также поддерживать отмену операций (см. подробнее паттерн Команда).
- [x] Реализация с использованием как классовых, так и функциональных react компонентов и использованием хуков. Разделите весь функционал приложения на две страницы, на одной из которых будет представлена реализация через классовые компоненты, а на второй - через функциональные. Например, в компоненте header должны быть представлены ссылки на следующие страницы: home(FC) и home(CC).
- [x] Обработка ошибок через паттерн "Error Boundaries"
- [x] Реализация светлой и тёмной темы с использованием styled-components
- [x] Проверка типов в React компонентах, передаваемых параметров и подобных объектов.
- [x] Использование алиасов для импортирования файлов.
- [x] Реализовать e2e тестирование c полным покрытием функционала приложения:
  - Арифметические операции.
  - Модуль истории.
  - Модуль дисплея.
  - Модуль клавиатуры.
  - Модуль навигации.
  - Модуль смены темы и т.д.
