'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { Button } from './Button'
import { FlyingSquares } from './FlyingSquares/FlyingSquares'

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
	const [isItemHover, setIsItemHover] = useState(false)

	return (
		<>
			<div
				onMouseEnter={() => setIsItemHover(true)}
				onMouseLeave={() => setIsItemHover(false)}
				className={`relative w-[300px] lg-w-[350px] xl:w-[400px] flex flex-col items-center p-[5px] border-[#00000034] border-[2px] rounded-[26px] hover:shadow-xl pt-[20px] transition-all duration-300 ease-linear ${
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
					className={`mr-[100%] mt-[-20px] duration-500 z-[0] ${
						isItemHover && isMore ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<FlyingSquares />
				</div>

				<div
					onClick={() => {
						setIsMore(!isMore)
					}}
				>
					<AiOutlineExpandAlt className='absolute top-[20px] right-[20px] size-[32px] text-[#000000dc] cursor-pointer duration-300 active:scale-[0.9]' />
				</div>

				<div
					className={`flex flex-col gap-[20px] pt-[30px] pb-[10px] px-[10px] transition-opacity duration-300`}
				>
					<p className='text-[32px] md:text-[40px] font-bold text-[#f4f4f4] px-[10px] text-center select-none'>
						{title}
					</p>
					<div className='rounded-[12px] px-[10px] py-[5px] bg-[#ffffff] border-[1px] border-[#ffffff]'>
						<p className='text-[#000000] select-none text-justify tracking-[0.7px]'>{`${description}`}</p>
					</div>
				</div>
				{isMore && (
					<div className='w-full px-[20px] my-[20px] border-t-[2px] border-t-[#ededed] z-10'>
						<div className='flex flex-wrap gap-[20px] text-[16px] font-bold text-[#000000] my-[20px]'>
							<div className='flex gap-[10px] items-center'>
								<div className='size-[12px] rounded-[50%] bg-white'></div>
								<p className='bg-[#fff] w-fit px-[10px] py-[5px] rounded-[8px]'>{`Время: ${time} минут`}</p>
							</div>
							<div className='flex gap-[10px] items-center'>
								<div className='size-[12px] rounded-[50%] bg-white'></div>
								<p className='bg-[#fff] w-fit px-[10px] py-[5px] rounded-[8px]'>{`Попыток: ${attempt}`}</p>
							</div>
							<div className='flex gap-[10px] items-center'>
								<div className='size-[12px] rounded-[50%] bg-white'></div>
								<p className='bg-[#fff] w-fit px-[10px] py-[5px] rounded-[8px]'>{`Вопросов: ${numberQuestions}`}</p>
							</div>
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
