
## В проекте применены

Backend:
- сервер на основе фреймворка django
- библиотека django rest framework для организации api интерфейса
- инструмент для генерации документации к эндпоинтам swagger, redoc
- база данных SQLite

Frontend:
- react, установленный инструментом create vite
- библиотека для маршрутизации react-router 
- взаимодействие с backend сервером django при помощи HTTP клиента axios

## Установка и запуск среды разработки backend Django


В виртуальное окружение клонируем репозиторий:  
 

Затем инсталлируем необходимые для работы проекта пакеты из файла requirements.txt:  

`pip install -r requirements.txt`


В консоли переходим в директорию проекта и стартуем проект:  
python manage.py runserver

API проекта будет доступно по адресам:   
http://127.0.0.1:8000/api/swagger-ui/ - page swagger-ui
http://127.0.0.1:8000/api/redoc/ - page redoc
http://127.0.0.1:8000/api/categories/ - список всех категорий блюд  
http://127.0.0.1:8000/api/dishes/?category=id -  Пример запроса блюд по категориям 
http://127.0.0.1:8000/api/recipe/ - список всех рецептов блюд  
http://127.0.0.1:8000/api/recipe/id - Рецепт блюда id  


## Установка и запуск среды разработки frontend React + Vite

Клонировать репозиторий  
Установить зависимости: `npm install`   
Запуск сервера DevServer: `npm run dev`  

Автор проекта: **Фролов Антон Сергеевич**  
e-mail: slaider84@list.ru  
Группа SkillFactory: FPW-137  

  


