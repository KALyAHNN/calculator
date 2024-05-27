# CS50 Final Project - Calculator (Web Application)
#### Video Demo:  <URL HERE>
#### Description:
This is my final project to conclude the CS50 Introduction to Computer Science course.

My final project is a simple calculator web application built using the following:
- Flask
- JavaScript
- HTML
- CSS
- Jinja
- Bootstrap

## Features
- Basic arithmetic operations such as
    - Addition
    - Subtraction
    - Multiplication
    - Division
- User-friendly web application
- Error handling

## Technologies used
The technologies used in this are as follows:
- Flask: It is a micro web framework written in Python.
- JavaScript: It is a programming language used to add user interaction in webpages.
- HTML: It is a markup language for creating webpages.
- CSS: It is a stylesheet language used for styling webpages.
- Jinja: It is a templating engine for Python, used with Flask to generate dynamic HTML content.
- Bootstrap: It is a popular front-end framework for building responsive and mobile-first websites and web applications.

## Usage
- In the homepage, enter your name and click on submit.
- Then, a greeting message is displayed along with a simple calculator.
- Enter arithmetic expressions using number buttons and sign buttons.
- After entering the expression, press the '=' button to get the result.
- The result will be displayed in the calculator display area.
- If required, the same result can be used for further calculations also.
- Backspace button is given to delete any typos.
- CE button is given to clear everything.

## File Structure
- project/
    - static/
        - myscripts.js
        - style.css
    - templates/
        - layout.html
        - index.html
        - calculator.html
    - app.py
    - README.md

- `static/`: Contains static files such as CSS and JavaScript.
- `templates/`: Contains HTML templates rendered by Jinja.
- `app.py`: Main Flask application file.
- `README.md`: Documentation file.

As my final project, I have designed a simple web application called **Calculator**. As a newbie in this field of Computer Science, I tried my level best to design this based on the basic knowledge aquired during this course.

In this project, I preferred Flask and Jinja for designing the basic layout, homepage and calculator page. I used CSS and Bootstrap for styling my webpages and components like buttons, forms, divs etc. I have used JavaScript programming for the functionality of calculator. In JavaScript, I have defined different functions to make this user-friendly.

When you open the homepage, you will be asked to enter your name in a text box. Then, enter your name in the given text box and click on submit. After clicking on submit, you will be directed to another webpage, where you will be greeted with a welcome message. Under that message, you will find a simple calculator with all the necessory buttons and display.

Use the number buttons to enter any decimal values and use the sign buttons for the required arithmetic operation (like `+` for addition, `-` for subtraction, `*` for multiplication and `/` for division). And you are given `.` button to enter real numbers for calculation.

When you click on any button, the digit or sign related to that button is displayed on the display. You can use multiple operators while entering your arithmetic expressions. You can enter arithmetic expressions of any length. In this calculator, you have backspace button. If you make any mistake while entering the arithmetic expression, you need not clear everything and reenter the entire expression. Just click on backspace button and clear that small typo or mistake, and continue entering the remaining expression. While entering the larger expressions, the expression will scroll automatically to the left in the display to show whatever your entering.

After typing the entire expression, click on `=` button to get the result. If you make any mistake while entering the expression, you will get an Error message. If you try to divide any value with zero, you will get Infinity message.

After obtaining the result, if you want to continue with further calculation using the obtained result, you can do that. No error message will be displayed. Otherwise, you can simply click on `CE` button to clear everything on display and start entering new expressions for new calculations.

On the bottom of your page, you will find `Go to homepage` button. If you click on it, you will be redirected to the homepage, where you will prompted again to enter your name and submit.

