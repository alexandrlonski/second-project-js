'use strict';
import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import inputCalc from './modules/inputCalc';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
  
// timer
  countTimer('31 december 2020');
//  menu
toggleMenu();
// popup
togglePopup();
// scroll
scroll();
//  tabs
tabs();
// slider
slider();
// change photo
changePhoto();
// limited for input calc 
inputCalc();
// калькулятор
calc(100);
// send-ajax-form
sendForm();