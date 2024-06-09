'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { Button } from './Button'
import { FlyingSquares } from './FlyingSquares/FlyingSquares'

interface TestItemProps {
	title: string
	time: string
	attempt: string
	description: string
	numberQuestions: number
	id: number
}

export const TestItem = ({
	title,
	time,
	attempt,
	description,
	numberQuestions,
	id,
}: TestItemProps) => {
	const [isMore, setIsMore] = useState(false)
	const [itemCustom, setItemCustom] = useState('relative')

	useEffect(() => {
		if (isMore) {
			setItemCustom('relative md:absolute')
		} else {
			setTimeout(() => {
				setItemCustom('relative')
			}, 300)
		}
	}, [isMore])

	return (
		<>
			<div
				onClick={() => {
					setIsMore(!isMore)
				}}
				className={`${itemCustom} w-[295px] lg-w-[350px] xl:w-[400px] ${
					isMore
						? 'h-[600px] xl:h-[500px] rounded-[16px] z-20 mt-[-100px] md:mt-[-100px] scale-[1.03]'
						: 'h-[320px] md:h-[340px] xl:h-[270px] rounded-[26px]'
				} ${
					!isMore ? 'active:scale-[0.98]' : ''
				} flex flex-col items-center p-[5px] border-[#00000034] border-[2px] hover:shadow-xl pt-[20px] duration-300 ${
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
						isMore ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<FlyingSquares />
				</div>

				<div
					onClick={() => {
						setIsMore(!isMore)
					}}
				>
					<AiOutlineExpandAlt className='absolute top-[20px] right-[20px] size-[32px] text-[#000000dc] cursor-pointer duration-300 active:scale-[0.8]' />
				</div>

				<div
					className={`flex flex-col gap-[20px] pt-[60px] md:pt-[40px] pb-[10px] px-[10px] transition-opacity duration-300 w-full`}
				>
					<p
						className={`text-[24px] md:text-[36px] font-bold text-[#f4f4f4] px-[10px] text-center select-none md:h-[100px] xl:h-auto border-b-transparent border-b-[1px] ${
							isMore ? 'pb-[10px] border-b-[#fff]' : ''
						} duration-300`}
					>
						{title}
					</p>
					<div
						className={`rounded-[12px] px-[10px] py-[5px] bg-[#ffffff] border-[1px] border-[#ffffff] duration-300 ${
							isMore ? 'mt-0' : 'mt-[50px]'
						}`}
					>
						<p className='text-[#000000] select-none tracking-[0.7px]'>{`${
							isMore ? description : `${description.slice(0, 70)}...`
						}`}</p>
					</div>
				</div>
				{isMore && (
					<div
						className={`flex flex-col justify-between w-full h-full px-[20px] my-[20px] border-t-[2px] border-t-[#ededed] z-10`}
					>
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
								className='text-[#000000c0] border-[1px] border-[#000000d5] active:bg-[#ffffff] md:hover:bg-[#ffffff] hover:text-[#000000] hover:border-[#ffffffd5] rounded-[4px]'
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
