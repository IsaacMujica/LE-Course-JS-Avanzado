import createDom from '../utils/dom.js'
import { createHTMLTag } from '../utils/utils.js'
import { reducer } from '../reducer/reducer.js'
import { createStore } from '../store/store.js'

const store = {
	store: createStore(reducer, {v: Number(window.localStorage.getItem('burnedCalories')) ?? 0}),
	pizza: createStore(reducer, {v:1835000}),
	coke: createStore(reducer, {v:97000}),
	ginTonic: createStore(reducer, {v:120000}),
	beer: createStore(reducer, {v:210704.22}),
}

const numberFormat = Intl.NumberFormat('de-DE')
const calories = 1.42

store.store.subscribe(_ => {
	window.localStorage.setItem('burnedCalories', store.store.getState().value)
	window.result.textContent = `Has quemado ${store.store.getState().value} calorías`
	const totalcaloriesCount = store.pizza.getState().global + store.coke.getState().global + store.ginTonic.getState().global + store.beer.getState().global
	if (totalcaloriesCount) {
		window.total.hidden = false
		const totalBurnedCalories = totalcaloriesCount - store.store.getState().value
		window.total.textContent = `Te faltan ${numberFormat.format(totalBurnedCalories.toFixed())} calorías por quemar
		en ${numberFormat.format((totalBurnedCalories/calories).toFixed())} clicks ¡Buena Suerte!`
	} else window.total.hidden = true
})
store.pizza.subscribe(_ => {
	formatterStoreSubscribe('pizza')
})
store.coke.subscribe(_ => {
	formatterStoreSubscribe('coke')
})
store.ginTonic.subscribe(_ => {
	formatterStoreSubscribe('ginTonic')
})
store.beer.subscribe(_ => {
	formatterStoreSubscribe('beer')
})

function formatterStoreSubscribe(type) {
	const typeEmoji = {
		pizza: '\u{1f355}',
		coke: '\u{1f964}',
		ginTonic: '\u{1f378}',
		beer: '\u{1f37a}',
	}
	const storeState = store[type].getState()
	if (storeState.quantity > 0) {
		window[type].hidden = false
		let burnedCalories = storeState.global - store.store.getState().value < 0 ? 0 : storeState.global - store.store.getState().value
		/*if (burnedCalories < 0)
			burnedCalories = 0*/
		window[type].textContent = `${typeEmoji[type]}: ${storeState.quantity}`
	} else window[type].hidden = true
}

const handlerBurnClick = _ => {
	store.store.dispatch({
		type: 'BURN',
		payload: calories
	})
	store.pizza.dispatch({
		type: ''
	})
	store.coke.dispatch({
		type: ''
	})
	store.ginTonic.dispatch({
		type: ''
	})
	store.beer.dispatch({
		type: ''
	})
}

const handlerCaloryAdder = function(event) {
	const $parent = this.parentElement.parentElement
	const calory = store[$parent.getAttribute('data-resourse')]
	calory.dispatch({
		type: 'GLOBALADD',
		payload: 1
	})
}
const handlerCalorySubtracter = function(event) {
	const $parent = this.parentElement.parentElement
	const calory = store[$parent.getAttribute('data-resourse')]
	calory.dispatch({
		type: 'GLOBALSUBT',
		payload: 1
	})
}
window.addEventListener('click', handlerBurnClick)
document.querySelectorAll('.add').forEach(function($elem) {
	$elem.addEventListener('click', handlerCaloryAdder)
 });
document.querySelectorAll('.subtract').forEach(function($elem) {
	$elem.addEventListener('click', handlerCalorySubtracter)
 });

// 🍕 🥤 🍸 🍺