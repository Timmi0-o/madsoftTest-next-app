import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
	return (
		<div className='relative max-w-[360px] sm:max-w-[620px] md:max-w-[720px] lg:max-w-[964px] xl:max-w-[1300px] mx-auto'>
			{children}
		</div>
	)
}
