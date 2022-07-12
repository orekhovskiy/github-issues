# Задание
Написать тестовое приложение(веб сервер), предоставляющий REST API для взаимодействия с GITHUB, приложение должно выбирать issue произвольного репозитория, с фильтрацией и сортировкой.
# Как запустить
1. `npm start`
1. Сервер доступен по адресу `http://localhost:3000`
# API
1. Запрос issues для данного репозитория и пользователя: `/api/issues/<owner>/<repository>?<filter>` 
    - параметры фильтрации  и сортировки (секция ***Query parameters***): https://docs.github.com/en/rest/issues/issues#list-repository-issues    

