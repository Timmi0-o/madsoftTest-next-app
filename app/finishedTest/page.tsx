'use client'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface FinishedTest {
	title: string
	score: number
}

export default function FinishedTest() {
	const [tests, setTests] = useState<FinishedTest[]>([])

	useEffect(() => {
		const storedTests = localStorage.getItem('finishedTests')
		if (storedTests !== null) {
			setTests(JSON.parse(storedTests))
		}
	}, [])

	return (
		<Container>
			<div className='flex flex-col items-center justify-between w-full gap-[80px] '>
				<div className='text-[32px] md:text-[60px] font-medium'>
					Завершенные тесты
				</div>
				<div className='flex flex-col items-start gap-[30px]'>
					<div className='flex flex-col gap-[20px]'>
						{tests.map((test, i) => (
							<div key={i} className='flex gap-[10px]'>
								<p className='text-[22px] md:text-[30px]'>{`${i + 1})`}</p>
								<div className='flex gap-[5px] text-[22px] md:text-[30px]'>
									<p className=''>{test.title}</p>
								</div>
								<div className='flex gap-[5px] text-[22px] md:text-[30px]'>
									<p className='bg-[#dedede] px-[5px] rounded-[6px]'>
										Оценка:{' '}
									</p>
									<p className=''>{test.score}</p>
								</div>
							</div>
						))}
					</div>
					<div className='flex gap-[20px]'>
						<div className='w-[120px] sm:w-[250px] md:w-[450px] text-[14px] sm:text-[18px]'>
							<Button
								title='Очистить'
								onClick={() => {
									setTests([])
									localStorage.setItem('finishedTests', '')
								}}
							/>
						</div>
						<div className='w-[120px] sm:w-[250px] md:w-[450px] text-[14px] sm:text-[18px]'>
							<Link href={'/'}>
								<Button title='На главную' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
