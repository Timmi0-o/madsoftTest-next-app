'use client'
import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import { store } from '@/redux/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

interface MyProviderProps {
	children: ReactNode
}
export default function MyProvider({ children }: MyProviderProps) {
	return (
		<div>
			<Provider store={store}>
				<div className='min-h-[100vh] mb-[30px]'>
					<Header />
					{children}
				</div>
				<Footer />
			</Provider>
		</div>
	)
}
