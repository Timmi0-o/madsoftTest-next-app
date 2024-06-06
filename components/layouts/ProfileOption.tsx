import { NawBar } from '../ui/NawBar'

export const ProfileOption = () => {
	return (
		<div>
			<NawBar
				classChild='w-[250px] text-center py-[8px] border-[1px] border-transparent hover:border-white'
				classDad='flex-col'
				nawLink={nawLink}
			/>
		</div>
	)
}

const nawLink = [
	{ title: 'Больше тестов', link: '/userTest' },
	{ title: 'Пройденные тесты', link: '/finishedTest' },
]
