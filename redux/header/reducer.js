import * as actionTypes from './actionTypes'

const initialState = {
	profile: false,
}

const headerReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SHOW_PROFILE_OPTION:
			return { ...state, profile: !state.profile }
		default:
			return state
	}
}

export default headerReducer
