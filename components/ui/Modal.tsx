import { ButtonClose } from '@/icons/svg/ButtonClose'
import { showProfileOptions } from '@/redux/header/actionCreators'
import { ReactNode, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

interface ModalProps {
	children: ReactNode
	stateShow: boolean
	className?: string
}

export const Modal = ({ children, stateShow, className }: ModalProps) => {
	const dispatch = useDispatch()
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
					className={`z-[100] absolute py-[15px] bg-[#F8F9FA] duration-300 ease-out rounded-[8px] border-[1px] border-[#000] ${animate} ${className}`}
				>
					<div className='absolute top-[10px] flex justify-between items-center border-b-[1px] border-b-[#ffffff51] pb-[10px] w-full px-[10px] z-[101]'>
						<div className='flex items-center gap-[5px]'>
							<div className='size-[10px] rounded-[50%] bg-[#8a1515]'></div>
							<div className='size-[10px] rounded-[50%] bg-black'></div>
							<div className='size-[10px] rounded-[50%] bg-black'></div>
						</div>
						<div
							onClick={() => dispatch(showProfileOptions())}
							className='flex justify-center items-center size-[24px]'
						>
							<div className='size-[18px]'>
								<ButtonClose className='text-black' />
							</div>
						</div>
					</div>

					{children}
				</div>
			)}
		</>
	)
}
