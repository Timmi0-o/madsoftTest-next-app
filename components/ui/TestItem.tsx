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
	// const [itemCustom, setItemCustom] = useState('relative')

	// useEffect(() => {
	// 	if (isMore) {
	// 		setItemCustom('relative md:absolute')
	// 	} else {
	// 		setTimeout(() => {
	// 			setItemCustom('relative')
	// 		}, 300)
	// 	}
	// }, [isMore])

	return (
		<>
			<div
				onClick={() => {
					setIsMore(!isMore)
				}}
				className={`relative w-[280px] md:w-[350px] ${
					isMore
						? 'h-[480px] xl:h-[500px] rounded-[16px] z-20 translate-y-[-60px]  md:translate-y-[-40px]'
						: 'h-[200px] md:h-[340px] xl:h-[290px] rounded-[26px]'
				} ${
					!isMore
						? 'active:scale-[0.98] border-[#ffffff34]'
						: 'border-[#0000009d]'
				} flex flex-col items-center p-[5px] border-[1px] hover:shadow-xl pt-[20px] duration-300 ${
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
					className={`mr-[100%] mt-[-20px] z-[0] ${
						isMore ? 'block' : 'hidden'
					}`}
				>
					<FlyingSquares />
				</div>

				<div
					onClick={() => {
						setIsMore(!isMore)
					}}
				>
					<AiOutlineExpandAlt className='absolute top-[7px] md:top-[20px] right-[7px] md:right-[20px] size-[28px] md:size-[32px] text-[#000000dc] cursor-pointer duration-300 active:scale-[0.8]' />
				</div>

				<div className={`flex flex-col md:pt-[60px] px-[10px] w-full`}>
					<p
						className={`text-[24px] md:text-[36px] font-bold text-[#f4f4f4] px-[10px] text-center select-none md:h-[100px] xl:h-auto border-b-transparent border-b-[1px] ${
							isMore ? 'py-[10px] border-b-[#fff] md:mt-[-20px]' : 'mb-[-20px]'
						} duration-300`}
					>
						{isMore
							? title
							: title.length > 14
							? `${title.slice(0, 13)}...`
							: title}
					</p>
					<div
						className={`rounded-[12px] px-[10px] py-[5px] bg-[#ffffff] border-[1px] border-[#ffffff] duration-300 ${
							isMore ? 'mt-0' : 'mt-[50px]'
						}`}
					>
						<p className='text-[#000000] select-none tracking-[0.7px] text-[14px] md:text-[18px]'>{`${
							isMore ? description : `${description.slice(0, 60)}...`
						}`}</p>
					</div>
				</div>
				<div
					className={`flex flex-col justify-between w-full 
						${
							isMore ? 'h-fit  duration-500' : 'h-0 hidden'
						} h-full px-[20px] my-[20px] border-t-[2px] border-t-[#ededed] z-10`}
				>
					<div className='flex flex-wrap gap-[10px] text-[12px] font-bold text-[#000000] my-[20px]'>
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
