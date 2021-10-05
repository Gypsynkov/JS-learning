'use strict';
const user = {};
do {
    user.Fname = prompt("Введите вашу фамилию");
} while ( user.Fname == false );
do {
    user.name = prompt("Введите ваше имя");
} while ( user.name == false );
do {
    user.LName = prompt("Введите ваше отчество");
} while ( user.LName == false );
do {
    user.Date = +prompt("Введите ваш возраст в годах");
} while ( user.Date == false || Number.isInteger(user.Date) == false || user.Date <= 0 ); 
user.sex = confirm('Ваш пол мужской?');
user.ageDay = user.Date * 365;
user.after = user.Date + 5;
const mp = 62;
const wp = 57;
let pens = '';
if ( user.sex == true && mp >= user.Date ) {
    pens = 'нет';}
else if( user.sex == true && wp < user.Date ) {
    pens = 'да';}
if( user.sex == false && wp >= user.Date ) {
    pens = 'нет';}
    else if( user.sex == false && wp < user.Date ) {
    pens = 'да';}
user.sex = (user.sex == true) ? 'мужской' : 'женский';
alert('Ваше ФИО:' + ' ' + user.Fname + ' ' + user.name + ' ' + 
user.LName + '\r\n' + 'Ваш возраст в годах:' + ' ' + 
user.Date + '\r\n' + 'Ваш возраст в днях:' + ' ' + user.ageDay + 
'\r\n' + 'Через 5 лет вам будет:' + ' ' + user.after + 
'\r\n' + 'Ваш пол:' + ' ' + user.sex + '\r\n' + 'На пенсии ли вы:' + ' ' + pens);
