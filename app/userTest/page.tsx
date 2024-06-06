import { Container } from '@/components/ui/Container'
import { TestItem } from '@/components/ui/TestItem'

export default function Test() {
	return (
		<Container>
			<div>
				<p className='text-[60px] text-center font-[500] text-[#212529] my-[30px]'>
					Русский язык
				</p>
				<div className='grid grid-cols-3 gap-[20px]'>
					{items.map((item, i) => (
						<div key={i}>
							<TestItem
								title={item.title}
								time={item.time}
								attempt={item.attempt}
								description={item.description}
								numberQuestions={items.length}
							/>
						</div>
					))}
				</div>
			</div>
			<div>
				<p className='text-[60px] text-center font-[500] text-[#212529] my-[30px]'>
					Математика
				</p>
				<div className='grid grid-cols-3 gap-[20px]'>
					{items.map((item, i) => (
						<div key={i}>
							<TestItem
								title={item.title}
								time={item.time}
								attempt={item.attempt}
								description={item.description}
								numberQuestions={items.length}
							/>
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}

const items = [
	{
		title: 'Тест по русскому языку',
		time: '25',
		attempt: '1',
		description: 'Тест по темам за 3 четверть',
	},
	{
		title: 'Тест по математике',
		time: '15',
		attempt: '2',
		description: 'Тест по темам за год',
	},
	{
		title: 'Тест по химии',
		time: '10',
		attempt: '1',
		description: 'Тест по желанию',
	},
	{
		title: 'Тест по английскому языку',
		time: '30',
		attempt: '4',
		description: 'Тест по олимпиадным заданиям',
	},

	{
		title: 'Тест по физике',
		time: '45',
		attempt: '5',
		description: 'Тест по темам за год',
	},
]
