import { montserrat } from '@/public/fonts/Montserat'
import Link from 'next/link'

interface NawBarProps {
	nawLink: {
		title: string
		link: string
		modify?: any
	}[]
	classDad?: string
	classChild?: string
}

export const NawBar = ({ nawLink, classDad, classChild }: NawBarProps) => {
	return (
		<div className={`flex items-center gap-[5px] ${classDad}`}>
			{nawLink.map((naw, i) => (
				<Link key={i} href={naw.link}>
					<div
						className={`flex justify-between gap-[5px] cursor-pointer hover:scale-[0.97] duration-300 px-[5px] rounded-[6px] hover:bg-[#f4f4f4] active:opacity-75   ${classChild}`}
					>
						<p
							className={`text-[#000000e5] font-[700] ` + montserrat.className}
						>
							{naw.title}
						</p>
						<div className='text-[#ffffffe5]'>{naw.modify}</div>
					</div>
				</Link>
			))}
		</div>
	)
}
