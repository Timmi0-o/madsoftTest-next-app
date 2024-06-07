'use client'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface FinishedTest {
	title: string
	score: number
}

export default function FinishedTest() {
	const completedQuest = Number(localStorage.getItem('completedQuest'))
	const [leftTime, setLeftTime] = useState<string | null>(null)
	const [attempts, setAttempts] = useState<string | null>(null)
	const questRef = useRef<number[]>([])
	const correctAnswersRef = useRef<number>(0)
	const scoresRef = useRef<number>()
	const isTestAdded = useRef<boolean>(false) // Используем useRef для отслеживания добавления теста

	useEffect(() => {
		const quest = progressTest(completedQuest)
		questRef.current = quest
		const correctAnswers = Number(localStorage.getItem('correctAnswers')) ?? 0
		const storedTime = localStorage.getItem('totalSeconds')
		const attempt = localStorage.getItem('attempt')

		correctAnswersRef.current = correctAnswers
		setLeftTime(storedTime)
		setAttempts(attempt)

		if ((correctAnswersRef.current / completedQuest) * 100 >= 85) {
			scoresRef.current = 5
		} else if ((correctAnswersRef.current / completedQuest) * 100 <= 50) {
			scoresRef.current = 2
		} else if (
			(correctAnswersRef.current / completedQuest) * 100 >= 50 &&
			(correctAnswersRef.current / completedQuest) * 100 <= 70
		) {
			scoresRef.current = 3
		} else if (correctAnswersRef.current === 0 && completedQuest === 0) {
			scoresRef.current = 2
		} else {
			scoresRef.current = 4
		}

		if (!isTestAdded.current) {
			let finishedTests: FinishedTest[] = localStorage.getItem('finishedTests')
				? JSON.parse(localStorage.getItem('finishedTests')!)
				: []

			// Получаем название теста из localStorage и добавляем его в массив
			const titleTest = localStorage.getItem('titleTest')

			if (titleTest) {
				finishedTests.push({ title: titleTest, score: scoresRef.current })
			}

			// Сохраняем обновленный массив обратно в localStorage
			localStorage.setItem('finishedTests', JSON.stringify(finishedTests))

			isTestAdded.current = true
		}
		console.log('correctAnswers', localStorage.getItem('correctAnswers'))
	}, [completedQuest])

	return (
		<div className='flex flex-col items-center w-full'>
			<p className='text-[40px] md:text-[60px]'>Тест закончен</p>
			<div className='my-[20px]'>
				{questRef.current.map((i) => (
					<p
						className='text-[18px] md:text-[26px] px-[10px] bg-[#f0f0f0] my-[20px] rounded-[8px]'
						key={i}
					>{`Ответ на вопрос ${i + 1} записан`}</p>
				))}
			</div>
			<div className='flex flex-col items-center'>
				<p className='text-[26px] px-[10px] bg-[#e3e3e3] py-[5px] my-[20px] rounded-[8px] w-fit'>{`${
					correctAnswersRef.current
				}/${completedQuest} (${
					Math.floor((correctAnswersRef.current / completedQuest) * 100) === 0
						? '0'
						: Math.floor((correctAnswersRef.current / completedQuest) * 100)
				})`}</p>
				<p className='text-[42px] px-[5px] bg-[#e3e3e3] my-[40px] rounded-[8px] text-center w-fit'>
					{`Оценка: ${scoresRef.current}`}
				</p>
			</div>
			<div className='flex justify-center flex-wrap gap-[20px]'>
				<Link href={'/'}>
					<Button title='На главную' />
				</Link>
				<Link href={'/finishedTest'}>
					<Button
						onClick={() => localStorage.setItem('completedQuest', '0')}
						title='Пройденные тесты'
					/>
				</Link>
				{Number(leftTime) >= 2 && Number(attempts) >= 1 ? (
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

function progressTest(numberQuestions: number): number[] {
	let quest = []
	for (let i = 0; i < numberQuestions; i++) {
		quest.push(i)
	}
	return quest
}
