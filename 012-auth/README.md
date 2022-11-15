# Домашнее задание к занятию «2.8 Аутентификация. PassportJS»
**Правила выполнения домашней работы:** 
* Выполняйте домашнее задание в отдельной ветке проекта на гитхабе.
* В поле для сдачи работы прикрепите ссылку на ваш проект в Git.
* Присылать на проверку можно каждую задачу по отдельности или все задачи вместе. 
* Во время проверки по частям ваша домашняя работа будет со статусом «На доработке».
* Любые вопросы по решению задач задавайте в Slack.

## Задание
1. Реализуйте API:
```
GET /api/user/login   страница с формой входа / регистрации
GET /api/user/me      страница профиля
POST /api/user/login
POST /api/user/signup
```
2. Настройте локальную аутентификацию с помощью PassportJS.

## Решение

https://github.com/91nickel/netology-books

Настройки паспорта тут:  
https://github.com/91nickel/netology-books/blob/master/books/middleware/passport.js  

Маршрутизация тут:  
https://github.com/91nickel/netology-books/blob/master/books/routes/user.js  
https://github.com/91nickel/netology-books/blob/master/books/routes/api/user.js  

Потрогать руками можно на  
http://test.foroffice.ru:29999/user

Тестировать API

Новый пользователь:
``` console
curl -L -X POST test.foroffice.ru:29999/api/user/signup \
-H "Content-Type: application/x-www-form-urlencoded" \
-d'username=test&password=test'
```
Авторизация:
``` console
curl -L -X POST test.foroffice.ru:29999/api/user/login \
-H "Content-Type: application/x-www-form-urlencoded" \
-d'username=test&password=test' -c /tmp/cookie
```
Профиль:
``` console
curl -L test.foroffice.ru:29999/api/user/me -b /tmp/cookie
```
Выход:
``` console
curl -L test.foroffice.ru:29999/api/user/logout -b /tmp/cookie
```