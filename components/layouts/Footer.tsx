import { roboto } from '@/public/fonts/Roboto'
import Link from 'next/link'
import { Container } from '../ui/Container'

export const Footer = () => {
	return (
		<div
			className={
				'w-full bg-[#F8F9FA] border-t-[1px] border-t-[#000000a3]' +
				roboto.className
			}
		>
			<Container>
				<div className='flex items-center justify-center py-[30px]'>
					<Link href={'/'}>
						<p className='text-[46px] font-[700] text-center text-black'>
							MadSoft
						</p>
						<p className='text-[#000000ba]'>
							Все права пока не защищены ©️ 2024
						</p>
					</Link>
				</div>
			</Container>
		</div>
	)
}
