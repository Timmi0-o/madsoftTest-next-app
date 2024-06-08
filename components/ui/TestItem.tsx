'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineExpandAlt } from 'react-icons/ai'
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
	const [isMore, setIsMore] = useState(false)

	return (
		<>
			<div
				className={`relative flex flex-col items-center gap-[10px] lg-w-[300px] xl:w-[420px] min-h-[400px] p-[5px] border-[#00000034] border-[2px] rounded-[36px] duration-300 hover:shadow-xl pt-[30px] ${
					title === 'Математика'
						? 'bg-[#6993ff]'
						: title === 'Русский язык'
						? 'bg-[#21d8b3]'
						: title === 'Английский язык'
						? 'bg-[#ff6bbd]'
						: title === 'Химия'
						? 'bg-[#ebce3b]'
						: title === 'Физика'
						? 'bg-[#eb733b]'
						: title === 'Литература'
						? 'bg-[#38dc50]'
						: 'bg-[#7f38dc]'
				} `}
			>
				<div
					onClick={() => {
						setIsMore(!isMore)
					}}
				>
					<AiOutlineExpandAlt className='absolute top-[20px] right-[20px] size-[32px] text-[#000000dc] cursor-pointer duration-300 active:scale-[0.9]' />
				</div>

				<div
					className={`flex flex-col gap-[20px] p-[20px] transition-opacity duration-300`}
				>
					<p className='text-[32px] md:text-[46px] font-bold text-[#f4f4f4] px-[10px] text-center h-[150px] select-none'>
						{title}
					</p>
					<div className='rounded-[12px] px-[10px] py-[5px] bg-[#ffffff] border-[1px] border-[#ffffff]'>
						<p className='text-[#000000] font-medium select-none'>{`${description}`}</p>
					</div>
				</div>
				{isMore && (
					<div className='w-full px-[20px] mb-[20px]'>
						<div className='flex flex-col gap-[15px] text-[22px] font-bold text-[#efefef] pl-[10px] border-l-[2px] border-l-[#151515] my-[20px]'>
							<p>{`Время: ${time} минут`}</p>
							<p>{`Попыток: ${attempt}`}</p>
							<p>{`Вопросов: ${numberQuestions}`}</p>
						</div>
						<Link href={'/nowTest'}>
							<Button
								bg='bg-transparent'
								className='text-[#000000c0] border-[1px] border-[#000000d5] hover:bg-[#ffffff] hover:text-[#000000] hover:border-[#ffffffd5] rounded-[4px]'
								onClick={() => {
									localStorage.setItem(
										'testTime',
										(Number(time) * 60).toString()
									)
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
				)}
			</div>
		</>
	)
}

// ;<div
// 	className={`relative flex flex-col items-center gap-[20px] lg-w-[350px] xl:w-[400px] min-h-[300px] border-[#ADB5BD] border-[1px] rounded-[12px] cursor-pointer duration-300 hover:shadow-xl ${
// 		title === 'Чисто тест функций' ? 'bg-[#e2e2e2]' : 'bg-[#f2f2f2]'
// 	} `}
// >
// 	<div className='relative w-[300px] xl:w-[380px] h-[260px] rounded-[8px] bg-[#E9ECEF] border-[1px] border-[#ADB5BD] mt-[10px]'>
// 		<Image className='rounded-[8px]' src={'/image1.jpg'} fill alt='' />
// 	</div>
// 	{/* <div className='flex flex-col gap-[30px] lg:w-[300px] xl:w-[380px]'>
// 		<p className='text-[22px] md:text-[28px] font-medium text-[#343A40] px-[5px] rounded-[8px] bg-[#DEE2E6] border-x-[1px] border-x-[#212529] min-w-[300px] text-center'>
// 			{title}
// 		</p>
// 		<div className='flex flex-col gap-[5px] text-[18px] font-bold text-[#495057] pl-[10px] border-l-[2px] border-l-[#D90429]'>
// 			<p>{`Время: ${time} минут`}</p>
// 			<p>{`Попыток: ${attempt}`}</p>
// 			<p>{`Вопросов: ${numberQuestions}`}</p>
// 			<p>{`Описание: ${description}`}</p>
// 		</div>
// 	</div> */}
// 	<div className='w-[300px] mb-[15px]'>
// 		<Link href={'/nowTest'}>
// 			<Button
// 				onClick={() => {
// 					localStorage.setItem('testTime', (Number(time) * 60).toString())
// 					localStorage.setItem(
// 						'totalSeconds',
// 						(Number(time) * 60).toString()
// 					)
// 					localStorage.setItem(
// 						'numberQuestions',
// 						numberQuestions.toString()
// 					)
// 					localStorage.setItem('attempt', attempt.toString())
// 					localStorage.setItem('titleTest', title)
// 				}}
// 			/>
// 		</Link>
// 	</div>
// </div>
