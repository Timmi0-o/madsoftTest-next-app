import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './header/reducer'

export const store = configureStore({
	reducer: {
		header: headerReducer,
	},
})
