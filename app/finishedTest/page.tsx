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
	const storedTests = localStorage.getItem('finishedTests')
	const [tests, setTests] = useState<FinishedTest[]>([])

	useEffect(() => {
		if (storedTests) {
			setTests(JSON.parse(storedTests))
		}
	}, [storedTests])

	return (
		<Container>
			<div className='flex flex-col items-center justify-between w-full gap-[30px]'>
				<div className='text-[32px] md:text-[60px] font-medium'>
					Завершенные тесты
				</div>
				<div className='flex flex-col items-center gap-[30px] w-full'>
					{tests.length >= 1 ? (
						<div className='grid grid-cols-2 gap-[20px] border-[1px] border-[#00000075] rounded-[8px] p-[20px] mx-[10px] md:mx-0 bg-[#f2f2f2] w-fit'>
							{tests.map((test, i) => (
								<div
									key={i}
									className='relative flex items-center justify-between gap-[10px] bg-[#fff] px-[5px] rounded-[8px] py-[4px]'
								>
									<p className='absolute text-[10px] top-0 text-[#00000028] md:text-[18px]'>{`${
										i + 1
									}`}</p>
									<p className='text-[12px] sm:text-[16px] md:text-[22px] lg:text-[32px] pl-[14px] sm:pl-[24px]'>
										{test.title}
									</p>
									<div className='flex gap-[5px] text-[14px] sm:text-[16px] md:text-[30px]'>
										{/* <p className='px-[5px] text-[14px] sm:text-[16px] md:text-[30px]'>
											Оценка:
										</p> */}
										<p
											className={`${
												test.score === 5
													? 'bg-blue-300'
													: test.score === 4
													? ' bg-green-400'
													: test.score === 3
													? 'bg-red-400'
													: 'bg-[#00000046]'
											} px-[10px] rounded-[6px]`}
										>
											{test.score}
										</p>
									</div>
								</div>
							))}
						</div>
					) : (
						''
					)}
					<div className='flex gap-[20px] mx-[10px]'>
						{tests.length > 1 ? (
							<div className='w-[120px] sm:w-[250px] md:w-[400px] text-[14px] sm:text-[18px]'>
								<Button
									bg='bg-[#363636]'
									title='Очистить'
									onClick={() => {
										setTests([])
										localStorage.setItem('finishedTests', '')
									}}
								/>
							</div>
						) : (
							''
						)}

						<div className='w-[120px] sm:w-[250px] md:w-[400px] text-[14px] sm:text-[18px]'>
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
