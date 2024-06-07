import { useEffect, useState } from 'react'
import { AiFillBulb } from 'react-icons/ai'
import { NawBar } from '../ui/NawBar'

export const ProfileOption = () => {
	const [finishTest, setFinishTest] = useState(0)

	useEffect(() => {
		const finishTest = localStorage.getItem('finishedTests')
		const quantityFinishTest = finishTest ? JSON.parse(finishTest).length : null

		if (quantityFinishTest) {
			setFinishTest(quantityFinishTest)
		}
	}, [])

	const nawLink = [
		{
			title: 'Больше тестов',
			link: '/userTest',
		},
		{
			title: 'Пройденные тесты',
			link: '/finishedTest',
			modify: (
				<div className='relative mr-[10px]'>
					<AiFillBulb size={24} />
					<div className='absolute top-[-6px] right-[-6px] flex justify-center items-center size-[18px] rounded-[50%] bg-[#2374df]'>
						<p className='text-[12px]'>{finishTest}</p>
					</div>
				</div>
			),
		},
	]

	return (
		<div className='relative pt-[40px]'>
			<NawBar
				classChild='w-[250px] mx-[5px] py-[10px] text-center border-[1px] border-transparent hover:border-white'
				classDad='flex-col'
				nawLink={nawLink}
			/>
		</div>
	)
}
