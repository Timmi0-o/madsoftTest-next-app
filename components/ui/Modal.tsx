import { ReactNode, useEffect, useState } from 'react'

interface ModalProps {
	children: ReactNode
	stateShow: boolean
	className?: string
}

export const Modal = ({ children, stateShow, className }: ModalProps) => {
	const [animate, setAnimate] = useState('mt-[15px]')

	useEffect(() => {
		if (stateShow) {
			setAnimate('mt-[0px]')
		} else {
			setAnimate('mt-[15px]')
		}
	}, [stateShow])

	return (
		<>
			{stateShow && (
				<div
					className={`z-[100] absolute py-[15px] px-[5px] bg-[#212529] duration-300 ease-out rounded-[8px] ${animate} ${className}`}
				>
					{children}
				</div>
			)}
		</>
	)
}
