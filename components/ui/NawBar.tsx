import { montserrat } from '@/public/fonts/Montserat'
import Link from 'next/link'

interface NawBarProps {
	nawLink: {
		title: string
		link: string
	}[]
	classDad?: string
	classChild?: string
}

export const NawBar = ({ nawLink, classDad, classChild }: NawBarProps) => {
	return (
		<div className={`flex items-center gap-[15px] ${classDad}`}>
			{nawLink.map((naw, i) => (
				<Link key={i} href={naw.link}>
					<p
						className={
							`px-[5px] py-[2px] rounded-[6px] hover:bg-[#343A40] active:opacity-75 text-[#ffffffe5] cursor-pointer hover:scale-[0.97] duration-300 font-[700] ${classChild} ` +
							montserrat.className
						}
					>
						{naw.title}
					</p>
				</Link>
			))}
		</div>
	)
}
