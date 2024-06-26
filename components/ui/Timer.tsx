import React, { useEffect } from 'react'
import { useTimer } from 'react-timer-hook'

type TimerProps = {
	timerTime: Date
	time?: string
}

export const Timer: React.FC<TimerProps> = ({ timerTime }) => {
	const savedTotalSeconds = localStorage.getItem('totalSeconds')

	const initialSeconds = savedTotalSeconds
		? Number(savedTotalSeconds)
		: Math.floor((timerTime.getTime() - new Date().getTime()) / 1000)

	const expiryTimestamp = new Date(new Date().getTime() + initialSeconds * 1000)

	const { seconds, minutes, totalSeconds } = useTimer({
		expiryTimestamp,
		onExpire: () => console.warn('onExpire called'),
	})

	useEffect(() => {
		localStorage.setItem('totalSeconds', totalSeconds.toString())
	}, [totalSeconds])

	useEffect(() => {
		if (minutes === 0 && seconds === 0) {
			window.location.href = '/result'
		}
	}, [minutes, seconds])

	return (
		<div className='text-[15px] md:text-[32px] px-[3px] md:px-[20px] rounded-[8px] border-[2px] border-[#fa7a7a] text-[#131313c1] font-medium tracking-[8px]'>
			<span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
			<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
		</div>
	)
}
