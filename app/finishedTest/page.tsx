'use client'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function FinishedTest() {
	const [tests, setTests] = useState([])

	useEffect(() => {
		if (localStorage.getItem('finishedTests')) {
			setTests(JSON.parse(localStorage.getItem('finishedTests')))
		}
	}, [])

	return (
		<Container>
			<div className='flex flex-col items-center justify-center w-full gap-[40px] '>
				<div className='text-[30px] md:text-[60px]'>Завершенные тесты</div>
				<div className='flex flex-col gap-[20px]'>
					{tests.map((test, i) => (
						<div key={i} className='flex gap-[10px] text-[26px]'>
							<p className='text-[18px] md:text-[30px]'>{`${i + 1})`}</p>
							<div className='flex gap-[5px] text-[18px] md:text-[30px]'>
								<p className='bg-[#dedede] px-[5px] rounded-[6px]'>Название:</p>
								<p className=''>{test.title}</p>
							</div>
							<div className='flex gap-[5px] text-[18px] md:text-[30px]'>
								<p className='bg-[#dedede] px-[5px] rounded-[6px]'>Оценка: </p>
								<p className=''>{test.score}</p>
							</div>
						</div>
					))}
				</div>
				<div className='w-[250px] md:w-[450px]'>
					<Button
						title='Очистить'
						onClick={() => {
							setTests([])
							localStorage.setItem('finishedTests', '')
						}}
					/>
				</div>
				<div className='w-[250px] md:w-[450px]'>
					<Link href={'/'}>
						<Button title='На главную' />
					</Link>
				</div>
			</div>
		</Container>
	)
}
