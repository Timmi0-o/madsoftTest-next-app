import { Container } from '@/components/ui/Container'
import { TestItem } from '@/components/ui/TestItem'

function Page() {
	return (
		<Container>
			<div>
				<p className='text-[40px] md:text-[60px] text-center font-[500] text-[#212529] mb-[30px] px-[20px] xl:px-0'>
					Ваши тесты
				</p>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
					{items.map((item, i) => (
						<div key={i}>
							<TestItem
								title={item.title}
								time={item.time}
								attempt={item.attempt}
								description={item.description}
								numberQuestions={item.numberQuestions}
							/>
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}

export default Page

const items = [
	{
		title: 'Математика',
		time: '15',
		attempt: '2',
		description: 'Тест по темам за год',
		numberQuestions: 15,
	},
	{
		title: 'Русский язык',
		time: '25',
		attempt: '1',
		description: 'Тест по темам за 3 четверть',
		numberQuestions: 3,
	},
	{
		title: 'Английский язык',
		time: '30',
		attempt: '4',
		description: 'Тест по олимпиадным заданиям',
		numberQuestions: 7,
	},
	{
		title: 'Химия',
		time: '10',
		attempt: '1',
		description: 'Тест по желанию',
		numberQuestions: 15,
	},
	{
		title: 'Физика',
		time: '45',
		attempt: '5',
		description: 'Тест по темам за год',
		numberQuestions: 9,
	},
	{
		title: 'Чисто тест функций',
		time: '0.3',
		attempt: '2',
		description: 'Тест по темам за год',
		numberQuestions: 3,
	},
]
