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
		localStorage.setItem('currentQuest', '0')
		localStorage.setItem('testTime', '0')
		localStorage.setItem('numberQuestions', '0')
		localStorage.setItem('selectsAnswers', '0')
		localStorage.setItem('correctAnswers', '0')
	}
	useEffect(() => {
		if (router !== '/nowTest' && router !== '/result') {
			clearLocalStorage()
		}
	}, [router])
	return (
		<Provider store={store}>
			<div className='flex flex-col justify-between h-[100vh]'>
				<Header />
				<div className='mt-[100px] mb-[30px]'>{children}</div>

				<Footer />
			</div>
		</Provider>
	)
}
export default MyProvider
