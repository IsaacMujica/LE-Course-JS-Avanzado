import createDom from '../utils/dom.js';
import { createHTMLTag } from from '../utils/utils.js'

const name = 'Isaac'
const $content = document.querySelector('#content')
content.append(createHTMLTag(`Mi nombre es ${name}`))
content.append(createHTMLTag(`Mi nombre es ${29}`))
content.append(createHTMLTag(`Este es el ${'Curso de JavaScript para React'}`))
// content.append(createHTMLTag(`Mi nombre es ${x = 'Isaac'}`))
content.append(createHTMLTag(`Mi nombre es ${(function nameF(){return 'Isaac'})()}`))
content.append(createHTMLTag(`Mi nombre es ${(function (){return 'Isaac'})()}`))
content.append(createHTMLTag(`Mi nombre es ${(() => {return 'Isaac'})()}`))
// ESTO ES UNA ESTRUCTURA DE CONTROL Y NO UNA EXPRESIÓN
// content.append(createHTMLTag(`Mi nombre es ${ if (true) { console.info('Isaac') } }`))
content.append(createHTMLTag(`Mi nombre es ${ true && 'Isaac Ternary' }`))
content.append(createHTMLTag(`Mi nombre es ${ false ? 'Isaac Ternary True' : 'Isaac Ternary False' }`))
content.append(createHTMLTag(`Mi nombre es ${ ['a', 'b'].map(letra => `${letra}-styled`) }`))