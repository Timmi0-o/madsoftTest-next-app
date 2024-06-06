'use client'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function FinishedTest() {
	const [leftTime, setLeftTime] = useState<string | null>(null)

	useEffect(() => {
		const storedTime = localStorage.getItem('totalSeconds')
		setLeftTime(storedTime)
	}, [])

	return (
		<div className='flex flex-col items-center w-full'>
			<p className=' text-[60px]'>Тест закончен</p>
			<div className='flex gap-[20px]'>
				<Link href={'/'}>
					<Button title='На главную' />
				</Link>
				<Link href={'/finishedTest'}>
					<Button title='Пройденные тесты' />
				</Link>
				{Number(leftTime) > 1 ? (
					<Link href={'/nowTest'}>
						<Button title='Вернуться к тесту' />
					</Link>
				) : (
					''
				)}
			</div>
		</div>
	)
}
