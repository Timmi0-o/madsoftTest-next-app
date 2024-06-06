'use client'
import { roboto } from '@/public/fonts/Roboto'
import { showProfileOptions } from '@/redux/header/actionCreators'
import Link from 'next/link'
import { useEffect } from 'react'
import { useClickOutside } from 'react-click-outside-hook'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../ui/Container'
import { Modal } from '../ui/Modal'
import { ProfileOption } from './ProfileOption'

interface RootState {
	header: {
		profile: boolean
	}
}

export const Header = () => {
	const dispatch = useDispatch()
	const profile = useSelector((state: RootState) => state.header.profile)
	const [ref, hasClickedOutside] = useClickOutside()

	useEffect(() => {
		if (hasClickedOutside && profile) {
			dispatch(showProfileOptions())
		}
	}, [dispatch, hasClickedOutside, profile])

	return (
		<div
			className={
				'relative w-full bg-[#212529] shadow-[#787878] shadow-sm mb-[30px] ' +
				roboto.className
			}
		>
			<Container>
				<div className='flex items-center justify-between'>
					<Link href={'/'}>
						<p className='text-[46px] font-[700] text-center text-white'>
							MadSoft
						</p>
					</Link>
					<div ref={ref}>
						<div
							onClick={() => dispatch(showProfileOptions())}
							className='flex items-center justify-center size-[52px] bg-white rounded-[50%] font-bold cursor-pointer hover:opacity-80 duration-300'
						>
							АВА
						</div>
						<div>
							<Modal className='right-[0vh] top-[80px]' stateShow={profile}>
								<ProfileOption />
							</Modal>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
