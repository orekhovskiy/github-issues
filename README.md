# Задание
Написать тестовое приложение(веб сервер), предоставляющий REST API для взаимодействия с GITHUB, приложение должно выбирать issue произвольного репозитория, с фильтрацией и сортировкой.
# Как запустить
1. `npm start`
1. Зайти на адрес `http://localhost:3000`
# API
1. Запрос issues для данного репозитория и пользователя: `/api/issues/<owner>/<repository>?<filter>`

