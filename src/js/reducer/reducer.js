export const reducer = (state, action) => {
	switch(action.type) {
		case 'BURN':
			state.value += action.payload
			return state
		/*case 'BURNED':
			state.value - action.payload
			return state*/
		case 'GLOBALADD':
			state.quantity += action.payload
			state.global   = state.quantity * state.value
			return state
		case 'GLOBALSUBT':
			if(state.quantity - action.payload > -1)
				state.quantity -= action.payload
			state.global   = state.quantity * state.value
			return state
		default:
			return state
	}
}