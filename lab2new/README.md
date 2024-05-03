<p align="center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br> 
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>

<br><br><br><br><br>

<p align="center">
Институт естественных наук и техносферной безопасности<br>
Кафедра информатики<br>
Зыков Никита Евгеньевич</p>

<br><br><br>

<p align="center">
Лабораторная работа №2. «HTML».<br>
01.03.02 Прикладная математика и информатика</p>

<br><br><br><br><br><br><br><br><br><br>

<p align="right">Научный руководитель<br>
Соболев Евгений Игоревич</p>

<br><br><br>

<p align="center">г. Южно-Сахалинск<br>
2024 г.</p>

<br><br><br><br><br><br><br><br><br><br>

# Введение

<b>HTML</b> — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.

<b>Visual Studio Code</b> — редактор исходного кода, разработанный Microsoft для Windows, Linux и macOS. Позиционируется как «лёгкий» редактор кода для кроссплатформенной разработки веб- и облачных приложений.

# Цели и задачи

Задачи:
1. Повторите страницу по данному по образцу:
2. Повторите страницу по данному по образцу:
3. Повторите страницу по данному по образцу:
4. Повторите страницу по данному по образцу:
5. Повторите страницу по данному по образцу:
6. Повторите страницу по данному по образцу:
7. Создать структуру HTML страницы с использованием заголовка, абзацев, списков и изображений.
8. Вставить видео на страницу с помощью тега <video> и добавить управляющие элементы.
9. Создать форму обратной связи с полями для ввода имени, email и сообщения.
10. Разработать таблицу с данными о товарах (название, цена, описание) и стилизовать её с помощью CSS.
11. Добавить на страницу интерактивную карту с маркерами и информацией о местоположении.
12. Реализовать выпадающее меню навигации с использованием HTML и CSS.
13. Вставить аудио-плеер на страницу для воспроизведения музыкального трека.
14. Создать галерею изображений с возможностью пролистывания и увеличения фотографий.
15. Разработать форму заказа товара с выбором количества и кнопкой отправки заказа.
16. Использовать iframe для встраивания внешнего контента (например, карты Google или видео с YouTube).
17. Добавить на страницу анимированный слайдер с переходами между изображениями.
18. Реализовать функционал проверки вводимых данных в форме с помощью JavaScript.
19. Создать анимированное меню бургер для мобильной версии сайта.
20. Использовать тег <canvas> для создания простой графики или анимации на странице.
21. Добавить на страницу элементы социальных сетей с возможностью перехода по ссылкам.
22. Разработать форму регистрации пользователей с проверкой пароля на соответствие требованиям.
23. Создать табличное представление данных с возможностью сортировки и фильтрации по столбцам.
24. Использовать Web-шрифты для стилизации текста на странице.
25. Реализовать функционал Drag and Drop для перетаскивания элементов на странице.
26. Создать адаптивную веб-страницу, которая корректно отображается на разных устройствах и разрешениях экрана.



# Решение

Для выполнения этой лабораторной работы, я пользовался:<br>
•	Материалом в сети интернет;

<h2 align = "center">Файл 1.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Style1.css">
</head>
<body>
    <h1>Это заголовок</h1>

    <h2>Это заголовок</h2>

    <p style="font-size:medium; font-family:'Times New Roman';"><b>Это заголовок</b></p>

    <p style="font-family:'Calibri light';"><i>Это заголовок</i></p>

    <p style="font-family:'Times New Roman';">Это <b>абзац.</b></p>

    <p style="font-family:'Times New Roman';">Это еще <i>абзац.</i></p>

    <p style="font-size:larger; font-family:'Calibri light'; font-weight: normal"><i>Это заголовок h1</i></p>

</body>
</html>
```
<h2 align = "center">Файл 2.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Style1.css">
</head>
<body>
    <h1>Что такое CMS</h1>
    <p><b>CMS</b> - «система управления контентом» (<b>движок</b>) – написанная PHP-<br>программистами основа для сайта, с помощью которой вы сможете управлять<br>сайтом (добавлять контент, менять пункты меню и т.п.) не зная HTML и CSS.</p>
    <div>Однако, для того чтобы сделать сайт с помощью <b>CMS</b> <i>потребуются услуги</i> и<br>программиста, и дизайнера, и верстальщика. И капиталовложения.</div>
    <h2>Какие бывают cms</h2>
    <div>Бывают различные системы управления контентом: для интернет-магазинов,<br>для блогов, для форумов и т.д.</div>

    <h2>Примеры cms</h2>
    <div><i>Примеры популярных CMS</i>: Joomla, WordPress (для блогов), PhpBB (для<br>форумов).</div>
    <p><b>CMS-ки</b> бывают <i>платные</i> и <i>бесплатные</i>.</p>
</body>
</html>
```
<h2 align = "center">Файл 3.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Style1.css">
</head>
<body>
    <h1>Списки</h1>
    <h2>Список цветов</h2>
    <ul>
        <li>Красный</li>
        <li>Желтый</li>
        <li>Зеленый</li>
        <li>Синий</li>
    </ul>
    <h2>Список студентов</h2>
    <ul style="list-style-type: decimal;">
        <li>Иванов</li>
        <li>Петров</li>
        <li>Сидоров</li>
        <li>Николаев</li>
    </ul>
    <h2>Список студентов</h2>
    <ul style="list-style-type: decimal;">
        <li>Иванов<ul><li>Возраст - 23 года</li><li>Курс - 3</li></ul></li>
        <li>Петров<ul><li>Возраст - 19 лет</li><li>Курс - 2</li></ul></li>
        <li>Сидоров<ul><li>Возраст - 18 лет</li><li>Курс - 1</li></ul></li>
    </ul>

</body>
</html>
```
<h2 align = "center">Файл 4.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Style1.css">
</head>
<body>
    <h1 style="font-size: larger; font-stretch:ultra-condensed"><b>Что нужно знать, чтобы делать сайты</b></h1>
    <ul style="list-style-type: decimal;">
        <li><b>HTML</b></li>
        <li><i>CSS</i></li>
        <li>PHP</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Flash</li>
        <li>SEO</li>
    </ul>
    <h2>PHP и JavaScript</h2>
    <div>Языки программирования <b>PHP</b> и <b>JavaScript</b> позволяют сделать сайт<br>динамичным, то есть реагирующим на действия пользователя. Например, можно<br>сделать красивую выпадающую менюшку или слайдер</div>
    <h2>Виды скриптов</h2>
    <div>Для этого пишутся скрипты (англ. <i>script</i> - «сценарий») - программы,<br>позволяющиее реагировать на действия пользователя. Скрипты бывают двух<br>видов:</div>
    <ul>
        <li>те, которые выполняются на сервере, а результат их выполнения<br>приходит в браузер к пользователю уже в готовом виде. Это скрипты,<br>написанные на языке <b>PHP</b>. На нем пишутся <b>CMS-ки</b> – системы<br>управления контентом.</li>
        <li>те, которые выполняются прямо в браузере пользователя. Это скрипты,<br>написанные на языке <b>JavaScript</b>. Они чаще всего используются для, того<br>чтобы сделать страницу более удобной и красивой.</li>
    </ul>
</body>
</html>
```
<h2 align = "center">Файл 5.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Посетите <a href="2.html">1 страницу</a>!</p>
    <p>Посетите <a href="3.html">2 страницу</a>!</p>
    <p>Посетите <a href="4.html">3 страницу</a>!</p>
</body>
</html>
```
<h2 align = "center">Файл 6.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="i1.png">
</body>
</html>
```
<h2 align = "center">Файл 7.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Привет, мир!</h1>
    <p>Это абзац текста.</p>

    <h2>Список:</h2>
    <ul>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
    </ul>

    <h2>Нумерованный список:</h2>
    <ol>
        <li>Первый пункт</li>
        <li>Второй пункт</li>
        <li>Третий пункт</li>
    </ol>

    <h2>Изображение:</h2>
    <img src="i1.png" alt="Собака">
</body>
</html>
```
<h2 align = "center">Файл 8.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <video src="UOKE2987.MOV" controls style="width: 20%; height: 20%;"></video>
</body>
</html>
```
<h2 align = "center">Файл 9.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <form action="/" method="post">
        <fieldset>
            <legend>Форма для отзыва</legend>
            <label>Имя: <input type="text" placeholder="Имя" required></input></label>
            <label>email: <input type="email" placeholder="email" required></input></label>
            <label>Текст сообщения: </label>
            <label><textarea placeholder="Введите сообщение" required></textarea></label>
            <label><button type="submit">Отправить</button></label>
        </fieldset>
    </form>
</body>
</html>
```

<h2 align = "center">Файл 10.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Style2.css">
</head>
<body>
    <table>
        <thead>
          <tr>
            <th scope="row">Название</th>
            <th scope="row">Цена</th>
            <th scope="row">Описание</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Сандалии Джобса</td>
            <td>$218,7 тыс.</td>
            <td>Коричневые замшевые сандалии марки Birkenstock, которые в 1970–1980-х гг. носил основатель Apple Стив Джобс</td>
          </tr>
          <tr>
            <td>Джинсы XIX века</td>
            <td>$87,4 тыс.</td>
            <td>Пара джинсов бренда Levi&#x27;s 1880 г., была найдена в заброшенной шахте</td>
          </tr>
          <tr>
            <td>Последнее письмо Леннона</td>
            <td>$63,8 тыс.</td>
            <td>Письмо участника группы Beatles Джона Леннона, написанное за несколько часов до его смерти</td>
          </tr>
          <tr>
            <td>Первый </strong>iPhone<strong></td>
            <td>$35,4 тыс.</td>
            <td>О том, что эта модель — одна из самых старых, говорит изображение на коробке iPhone: на ней изображено устройство с 12 иконками, а тринадцатая иконка — iTunes — появилась в конце 2007 г.</td>
          </tr>
        </tbody>
      </table>
</body>
</html>
```
<h2 align = "center">Файл 11.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12923.338232128239!2d139.5014941010232!3d35.92654937380563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018dbf0c9d5e2ff%3A0x2e3ecba4d6419842!2z5bCP5rGf5oi45rip5rOJIEtBU0hJQkE!5e0!3m2!1sru!2sru!4v1710324859546!5m2!1sru!2sru" width="800" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</body>
</html>
```
<h2 align = "center">Файл 12.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Style3.css">
</head>
<body>
    <div class="navbar">
        <a href="#home">HOME</a>
        <div class="dropdown">
          <button class="dropbtn" style="color: #ffffff;">Выпадающее меню
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#1S">Ссылка 1</a>
            <a href="2.html">CMS</a>
            <a href="3.html">СПиски</a>
          </div>
        </div>
        <a href="#news">Новости</a>
      </div> 
</body>
</html>
```
<h2 align = "center">Файл 13.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <audio controls="controls">
        <source src="vnezapnyiy-horror.mp3" type="audio/mpeg">
        </audio>
</body>
</html>
```
<h2 align = "center">Файл 14.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="Style4.css">
</head>
<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>
<body>
    <div class="container">
        <div class="mySlides">
          <div class="numbertext">1 / 5</div>
            <img src="1.jpg" style="width:50%">
        </div>
      
        <div class="mySlides">
          <div class="numbertext">2 / 5</div>
            <img src="2.jpg" style="width:50%">
        </div>
      
        <div class="mySlides">
          <div class="numbertext">3 / 5</div>
            <img src="3.jpg" style="width:50%">
        </div>
      
        <div class="mySlides">
          <div class="numbertext">4 / 5</div>
            <img src="4.jpg" style="width:50%">
        </div>
      
        <div class="mySlides">
          <div class="numbertext">5 / 5</div>
            <img src="5.jpg" style="width:50%">
        </div>
      
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      
        <div class="caption-container">
          <p id="caption"></p>
        </div>
      
        <div class="row">
          <div class="column">
            <img class="demo cursor" src="1.jpg" style="width:100%" onclick="currentSlide(1)" alt="Котик 1">
          </div>
          <div class="column">
            <img class="demo cursor" src="2.jpg" style="width:100%" onclick="currentSlide(2)" alt="Котик 2">
          </div>
          <div class="column">
            <img class="demo cursor" src="3.jpg" style="width:100%" onclick="currentSlide(3)" alt="Котик 3">
          </div>
          <div class="column">
            <img class="demo cursor" src="4.jpg" style="width:100%" onclick="currentSlide(4)" alt="Котик 4">
          </div>
          <div class="column">
            <img class="demo cursor" src="5.jpg" style="width:100%" onclick="currentSlide(5)" alt="Котик 5">
          </div>
        </div>
      </div>
</body>
</html>
```
<h2 align = "center">Файл 15.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Форма заказа товара</title>
  
</head>
<body>
  <h2>Заказ товара</h2>
  <form method="post">
    <div>
      <label for="product">Выберите товар:</label>
      <select id="product" name="product">
        <option value="товар1">Сандалии Джобса(не оригинал)</option>
        <option value="товар2">Джинсы XIX века</option>
        <option value="товар3">Последнее письмо Леннона(копия)</option>
      </select>
    </div>
    <div>
      <label for="quantity">Количество:</label>
      <input type="number" id="quantity" name="quantity" min="1" value="1" max="40">
    </div>
    <button type="submit">Отправить заказ</button>
  </form>
</body>
</html>
```
<h2 align = "center">Файл 16.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12923.338232128239!2d139.5014941010232!3d35.92654937380563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018dbf0c9d5e2ff%3A0x2e3ecba4d6419842!2z5bCP5rGf5oi45rip5rOJIEtBU0hJQkE!5e0!3m2!1sru!2sru!4v1710324859546!5m2!1sru!2sru" width="800" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</body>
</html>
```
<h2 align = "center">Файл 17.html</h2>

```html
<!DOCTYPE html>
<html>
<head>
	<title>Слайдер на CSS</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta charset="utf-8">
</head>
<body>
	<div class="all">
		<input checked type="radio" name="respond" id="desktop">
			<article id="slider">
					<input checked type="radio" name="slider" id="switch1">
					<input type="radio" name="slider" id="switch2">
					<input type="radio" name="slider" id="switch3">
					<input type="radio" name="slider" id="switch4">
					<input type="radio" name="slider" id="switch5">
				<div id="slides">
					<div id="overflow">
						<div class="image">
							<article><img src="1.jpg"></article>
							<article><img src="2.jpg"></article>
							<article><img src="3.jpg"></article>
							<article><img src="4.jpg"></article>
							<article><img src="5.jpg"></article>
						</div>
					</div>
				</div>
				<div id="controls">
					<label for="switch1"></label>
					<label for="switch2"></label>
					<label for="switch3"></label>
					<label for="switch4"></label>
					<label for="switch5"></label>
				</div>
				<div id="active">
					<label for="switch1"></label>
					<label for="switch2"></label>
					<label for="switch3"></label>
					<label for="switch4"></label>
					<label for="switch5"></label>
				</div>
			</article>
	</div>
</body>
</html>
```
<h2 align = "center">Файл 18.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Свяжитесь с нами</h1>
    <form id="contactForm" onsubmit="return validateForm()">
        <div>
            <label for="name">Имя:</label>
            <input type="text" id="name" name="name">
            <span id="nameError" class="error"></span>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <span id="emailError" class="error"></span>
        </div>
        <div>
            <label for="message">Сообщение:</label>
            <textarea id="message" name="message"></textarea>
            <span id="messageError" class="error"></span>
        </div>
        <input type="submit" value="Отправить">
    </form>

    <script>
        function validateForm() {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
            var isValid = true;

            if (name === "") {
                document.getElementById('nameError').innerText = "Пожалуйста, введите ваше имя";
                isValid = false;
            } else {
                document.getElementById('nameError').innerText = "";
            }

            if (email === "" || !email.includes("@")) {
                document.getElementById('emailError').innerText = "Пожалуйста, введите корректный email";
                isValid = false;
            } else {
                document.getElementById('emailError').innerText = "";
            }

            if (message === "") {
                document.getElementById('messageError').innerText = "Пожалуйста, введите сообщение";
                isValid = false;
            } else {
                document.getElementById('messageError').innerText = "";
            }

            return isValid;
        }
    </script>
</body>
</html>
```
<h2 align = "center">Файл 19.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style19.css">
<style>
body {
  font-family: Arial, sans-serif;
}

.menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: left;
}
.menu {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: left;
}

.menu li {
  margin: 10px;
}

.menu a {
  text-decoration:overline;
  color: #333;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #f2f2f2;
  transition: background-color 0.3s;
}

.menu a:hover {
  background-color: #ddd;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.menu a {
  animation: slideIn 0.5s ease-in-out forwards;
}

</style>
</head>
<body>
    <!--<div class="menu-toggle">
        <div class="bar">бигмак</div>
        <div class="bar">что-то</div>
        <div class="bar">нечто</div>
    </div>-->
    <div class="navbar">
    <div class="dropdown">
      <button class="menu-toggle" style="color: #ffffff;">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar2"></div>
        <div class="bar1"></div>
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <div class="menu">
          <ul>
            <li><a href="#home">Главная</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
<script src="script.js"></script>
</body>
</html>
```
<h2 align = "center">Файл 20.html</h2>
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <canvas id="myCanvas" width="500" height="500"></canvas>
    <script>
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'red';
            var x=Math.random();
            var y=Math.random();
            ctx.fillRect( x* 30, 100+y* 30, 250, 250);
            crown(x,y);
            
        }
        function draw1() {
            var x=Math.random();
            var y=Math.random();
            ctx.fillStyle = 'white';
           
            ctx.fillRect(100+x* 30, 200+y* 30, 25, 25);
            ctx.fillRect(150+x* 30, 230+y* 35, 25, 25);
            
            ctx.fillStyle = 'black';
            ctx.fillRect(110+x* 34, 210+y* 32, 5, 5);
            ctx.fillRect(160+x* 32, 240+y* 34, 5, 5);
            
            ctx.fillStyle = 'yellow';
            ctx.fillRect(120+x* 30, 260+y* 35, 30, 50);
            
        }

        function crown(a,b){
           
            ctx.fillStyle = 'orange'; 
            ctx.beginPath();
            ctx.arc(120+a*20, 100+b*20, 56, 3/4 * Math.PI, 1/4 * Math.PI, true);
            ctx.fill();
            ctx.fillStyle = 'yellow'; 
            ctx.moveTo(80+a*20, 140+b*20);
            ctx.lineTo(60+a*20, 40+b*20);
            ctx.lineTo(100+a*20, 100+b*20);
            ctx.lineTo(120+a*20, 20+b*20);
            ctx.lineTo(140+a*20, 100+b*20);
            ctx.lineTo(180+a*20, 40+b*20);
            ctx.lineTo(160+a*20, 140+b*20);
            ctx.stroke();
            ctx.fill();
        }

    
        setInterval(draw, 200);
        setInterval(draw1, 200);
        
    </script>
</body>
</html>
```
<h2 align = "center">Файл 21.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .img{
            height: 17px;
            width: auto;
        }
    </style>
</head>
<body>
    <div> 
        <a href="https://www.facebook.com"><img src="facebook.png" alt="Facebook"></a> 
        <a href="https://twitter.com/login?lang=ru"><img src="twitter.png" alt="Twitter"></a> 
        <a href="https://web.tlgrm.app/"><img src="telegram.png" alt="telegram"></a> 
        <a href="https://m.vk.com/"><img src="vk.png" alt="vk"></a> 
    </div>
</body>
</html>
```
<h2 align = "center">Файл 22.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Регистрация</h2>

<form action="registration.php" method="post">
  <label for="username">Имя пользователя:</label><br>
  <input type="text" id="username" name="username" required><br><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" required><br><br>

  <label for="password">Пароль (минимум 8 символов, должен содержать хотя бы одну цифру и одну букву в верхнем регистре):</label><br>
  <input type="password" id="password" name="password" required pattern="(?=.*\d)(?=.*[A-Z]).{8,}" title="Пароль должен содержать не менее 8 символов, хотя бы одну цифру и одну букву в верхнем регистре"><br><br>
  
  <input type="submit" value="Зарегистрироваться">
</form>
</body>
</html>
```
<h2 align = "center">Файл 23.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid black;
          padding: 8px;
          text-align: left;
        }
      </style>
</head>
<body>
    <h2>Таблица с возможностью сортировки и фильтрации</h2>

<input type="text" id="myInput" onkeyup="filterTable()" placeholder="Фильтр...">

<table id="myTable">
  <tr>
    <th onclick="sortTable(0)">Название</th>
    <th onclick="sortTable(1)">Цена</th>
    <th onclick="sortTable(2)">Описание</th>
  </tr>
  <tr>
    <td>Сандалии Джобса</td>
    <td>$218,7 тыс.</td>
    <td>Коричневые замшевые сандалии марки Birkenstock, которые в 1970–1980-х гг. носил основатель Apple Стив Джобс</td>
  </tr>
  <tr>
    <td>Джинсы XIX века</td>
    <td>$87,4 тыс.</td>
    <td>Пара джинсов бренда Levi&#x27;s 1880 г., была найдена в заброшенной шахте</td>
  </tr>
  <tr>
    <td>Последнее письмо Леннона</td>
    <td>$63,8 тыс.</td>
    <td>Письмо участника группы Beatles Джона Леннона, написанное за несколько часов до его смерти</td>
  </tr>
  <tr>
    <td>Первый </strong>iPhone<strong></td>
    <td>$35,4 тыс.</td>
    <td>О том, что эта модель — одна из самых старых, говорит изображение на коробке iPhone: на ней изображено устройство с 12 иконками, а тринадцатая иконка — iTunes — появилась в конце 2007 г.</td>
  </tr>
</table>

<script>
  function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
</script>

</body>
</html>
```
<h2 align = "center">Файл 24.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @font-face {
          font-family: myCustomFont1;
          src: url('Lemontuesday.woff2') format('woff2'),
               url('Lemontuesday.woff') format('woff');
        }
        @font-face {
          font-family: myCustomFont2;
          src: url('Berniershade.woff2') format('woff2'),
               url('Berniershade.woff') format('woff');
        }
    
        p {
          font-family: myCustomFont1, sans-serif;
          font-size: 16px;
        }
        div {
          font-family: myCustomFont2, sans-serif;
          font-size: 30px;
        }
      </style>
</head>
<body>
    <p>This is it.</p>
    <div>допустим</div>
</body>
</html>
```
<h2 align = "center">Файл 25.html</h2>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #dragElement {
            width: 100px;
            height: 100px;
            background-color: #f2f2f2;
            border: 1px solid #ccc;
            text-align: center;
            line-height: 100px;
            position: absolute;
            left: 0px;
            top: 0px;
        }
        #dropArea {
            width: 200px;
            height: 200px;
            border: 2px dashed #aaa;
            margin: 20px;
            position: relative;
            text-align: center;
        }
      </style>
      <script>
            function dragStart(event) {
      event.dataTransfer.setData("text", event.target.id);
    }

    function allowDrop(event) {
      event.preventDefault();
    }

    function drop(event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("text");
      var draggedElement = document.getElementById(data);
      if (draggedElement) {
        var dropArea = event.target;
        dropArea.appendChild(draggedElement);
        draggedElement.style.position = "relative";
        draggedElement.style.left = "0px";
        draggedElement.style.top = "0px";
      }
    }
      </script>
</head>
<body>
    <div id="dragElement" draggable="true" ondragstart="dragStart(event)">Неси меня</div>
    <div id="dropArea" ondrop="drop(event)" ondragover="allowDrop(event)">Кровать</div>
</body>
</html>
```
<h2 align = "center">Файл 26.html</h2>

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>"Мой сайт якобы"</title>
    
    <style>
        @font-face {
          font-family: myCustomFont1;
          src: url('Lemontuesday.woff2') format('woff2'),
               url('Lemontuesday.woff') format('woff');
        }
        @font-face {
          font-family: myCustomFont2;
          src: url('Ustrokeregular.woff2') format('woff2'),
               url('Ustrokeregular.woff') format('woff');
        }
        section h1 {
            font-size: calc(1rem + 2vw);
            font-family: myCustomFont1, sans-serif;
        }
        section p {
            font-size: calc(12px + 1vw);
            font-family: myCustomFont2, sans-serif;
            margin: 10px;
            -webkit-text-stroke: 0px rgb(0, 0, 0); 
            /*text-shadow: 1px #000000;*/
        }
        html {
            background-image: url(IMG_0248.PNG) , linear-gradient(#603463, #469ba2, #000000);
            background-repeat: no-repeat;
            background-position: center center;
            background-attachment: fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: contain;
        }
    
        .rightpic {
            float: right;
            margin: 0 0 5px 5px; 
        }
    
        .sign {
            float: left; 
            padding: 7px; 
            margin: 10px 0 5px 5px; 
        }
        .sign figcaption {
            margin: 0 auto 5px;
            color: azure;
            font-size: calc(7px + 1vw);
            font-family: myCustomFont2, sans-serif;
            -webkit-text-stroke: 0px rgb(0, 0, 0); 
        }
        img {
            max-width: 100%;
            height: auto;
        }
  
    </style>
</head>
<body>
    <figure class="sign">
        <p><img src="IMG_0794.PNG" width="203" height="270" alt="типо фото" style="border: 2px solid #9b179b"></p>
        <figcaption>Свое фото не дам,<br>но вот вам скетч</figcaption>
    </figure>
    <section>
        <h1 align="center" style="background-color: rgb(153, 64, 64); color: azure; border: 5px solid #469ba2">Привет, проходимец</h1>
        <p style="font-style:italic; color: rgb(255, 255, 255);">
            <b>Зовут меня Никита, мне 20 лет. Значимых достижений пока не наблюдается. 
            Из хобби: рисование, чтение манги и манхв, а также компьтерные игры
            </b>
        </p>
    </section>
</body>
    
</html>
```                

# Результат
<img src="s1.png">
<img src="s2.png">
<img src="s3.png">
<img src="s4.png">
<img src="s5.png">
<img src="s6.png">
<img src="s7.png">
<img src="s8.png">
<img src="s9.png">
<img src="s10.png">
<img src="s11.png">
<img src="s12.png">
<img src="s13.png">
<img src="s14.png">
<img src="s15.png">
<img src="s16.png">
<img src="s17.png">
<img src="s18.png">
<img src="s19.png">
<img src="s20.png">
<img src="s21.png">
<img src="s22.png">
<img src="s23.png">
<img src="s24.png">
<img src="s25-1.png">
<img src="s25-2.png">
<img src="s26-1.png">
<img src="s26-2.png">
<img src="s26-3.png">

# Вывод
Была сделана лабораторная работа №2


