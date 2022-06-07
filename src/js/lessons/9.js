import createDom from '../utils/dom.js'
import { createHTMLTag } from '../utils/utils.js'
import { reducer } from '../reducer/reducer.js'
import { createStore } from '../store/store.js'

const store = createStore(reducer, 'estado inicial de la aplicación')
// store.dispatch()
// store.getState()
// store.subscribe()

store.subscribe(_ => {
	console.info('Ha cambiado algo en el store.', store.getState())
})
store.dispatch('Voy a cambiar algo')