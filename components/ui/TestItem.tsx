'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'

interface TestItemProps {
	title: string
	time: string
	attempt: string
	description: string
	numberQuestions: number
}

export const TestItem = ({
	title,
	time,
	attempt,
	description,
	numberQuestions,
}: TestItemProps) => {
	return (
		<>
			<div className='relative flex flex-col items-center gap-[20px] lg-w-[350px] xl:w-[400px] h-[600px] border-[#ADB5BD] border-[1px] rounded-[12px] cursor-pointer duration-300 hover:shadow-lg '>
				<div className='relative w-[300px] xl:w-[380px] h-[260px] rounded-[8px] bg-[#E9ECEF] border-[1px] border-[#ADB5BD] mt-[10px]'>
					<Image
						className='rounded-[8px]'
						src={
							'https://psy-files.ru/wp-content/uploads/b/1/f/b1f03092e33cd71e229ca532faad64c9.jpg'
						}
						fill
						alt=''
					/>
				</div>
				<div className='flex flex-col gap-[30px] lg:w-[300px] xl:w-[380px]'>
					<p className='text-[22px] md:text-[28px] font-medium text-[#343A40] px-[5px] rounded-[8px] bg-[#DEE2E6] border-x-[1px] border-x-[#212529] min-w-[300px] text-center'>
						{title}
					</p>
					<div className='flex flex-col gap-[5px] text-[18px] font-bold text-[#495057] pl-[10px] border-l-[2px] border-l-[#D90429]'>
						<p>{`Время: ${time} минут`}</p>
						<p>{`Попыток: ${attempt}`}</p>
						<p>{`Вопросов: ${numberQuestions}`}</p>
						<p>{`Описание: ${description}`}</p>
					</div>
				</div>
				<div className='absolute bottom-[10px] w-[300px]'>
					<Link href={'/nowTest'}>
						<Button
							onClick={() => {
								localStorage.setItem('testTime', (Number(time) * 60).toString())
								localStorage.setItem(
									'totalSeconds',
									(Number(time) * 60).toString()
								)
								localStorage.setItem(
									'numberQuestions',
									numberQuestions.toString()
								)
								localStorage.setItem('attempt', attempt.toString())
								localStorage.setItem('titleTest', title)
							}}
						/>
					</Link>
				</div>
			</div>
		</>
	)
}
