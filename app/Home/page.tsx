'use client'
import { Footer } from '@/components/layouts/Footer'
import { Header } from '@/components/layouts/Header'
import { store } from '@/redux/store'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'

interface MyProviderProps {
	children: ReactNode
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
	const router = usePathname()
	const clearLocalStorage = () => {
		localStorage.setItem('totalSeconds', '0')
		localStorage.setItem('attempt', '0')
		localStorage.setItem('nowTest', '0')
		localStorage.setItem('testTime', '0')
		localStorage.setItem('numberQuestions', '0')
		localStorage.setItem('selectsAnswers', '0')
	}
	useEffect(() => {
		if (router !== '/nowTest') {
			clearLocalStorage()
		}
	}, [router])
	return (
		<Provider store={store}>
			<div className='min-h-[100vh] mb-[30px]'>
				<Header />
				<div className='pt-[100px]'></div>
				{children}
			</div>
			<Footer />
		</Provider>
	)
}
export default MyProvider
