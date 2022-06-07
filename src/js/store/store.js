export const createStore = (reducer, initialState) => {
	let state = {
		value: initialState.v ?? 0,
		quantity: initialState.q ?? 0,
		global: (initialState.s ?? 0) * (initialState.q ?? 0)
	}
	let updater = _ => {}
	const getState = _ => {
		let cacheState = { ...state }
		cacheState.value = Number(cacheState.value.toFixed(2))
		return cacheState
	}

	const dispatch = action => {
		state = reducer(state, action)
		updater()
	}
	const subscribe = listener => {
		updater = listener
	}
	return {
		getState,
		dispatch,
		subscribe
	}
}