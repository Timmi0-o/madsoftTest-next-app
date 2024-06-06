import { roboto } from '@/public/fonts/Roboto'
import Link from 'next/link'
import { Container } from '../ui/Container'

export const Footer = () => {
	return (
		<div
			className={
				'w-full bg-[#212529] shadow-[#787878] shadow-sm' + roboto.className
			}
		>
			<Container>
				<div className='flex items-center justify-center py-[30px]'>
					<Link href={'/'}>
						<p className='text-[46px] font-[700] text-center text-white'>
							MadSoft
						</p>
						<p className='text-[#F8F9FA]'>Все права пока не защищены ©️ 2024</p>
					</Link>
				</div>
			</Container>
		</div>
	)
}
