import { MouseEventHandler } from 'react'

interface ButtonProps {
	title?: string
	className?: string
	onClick?: MouseEventHandler<HTMLDivElement> | undefined
	bg?: string
}

export const Button = ({ title, className, onClick, bg }: ButtonProps) => {
	return (
		<div
			onClick={onClick && onClick}
			className={`flex justify-center items-center text-[14px] md:text-[18px] rounded-[12px] w-full h-[40px] md:h-[45px]  text-[#F8F9FA] font-semibold hover:opacity-75 duration-300 active:opacity-60 tracking-[1px] md:tracking-[2px] cursor-pointer px-[5px] md:px-[10px] select-none ${className} ${
				bg ? bg : 'bg-[#D90429]'
			}`}
		>
			<p>{title ? title : 'Пройти тест'}</p>
		</div>
	)
}
