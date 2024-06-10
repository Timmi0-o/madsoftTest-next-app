'use client'
import { Container } from '@/components/ui/Container'
import { TestItem } from '@/components/ui/TestItem'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Test() {
	return (
		<Container>
			<div className=' overflow-x-hidden'>
				{subjects.map((subject, i) => (
					<>
						<div className='flex flex-col items-center mb-[30px]' key={i}>
							<p className='text-[28px] md:text-[60px] text-center font-[500] text-[#212529] mb-[30px] px-[10px] xl:px-0 tracking-[10px] select-none'>
								{subject}
							</p>
							<div className='hidden sm:grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
								{items.map(
									(item, i) =>
										subject === item.title && (
											<div key={i}>
												<TestItem
													title={item.title}
													time={item.time}
													attempt={item.attempt}
													description={item.description}
													numberQuestions={items.length}
													id={i}
												/>
											</div>
										)
								)}
							</div>
							<div className='sm:hidden w-full mt-[-70px]'>
								<Swiper centeredSlides spaceBetween={0} slidesPerView={1.2}>
									{items.map(
										(item, j) =>
											subject === item.title && (
												<SwiperSlide className='pt-[110px]' key={j}>
													<div>
														<TestItem
															title={item.title}
															time={item.time}
															attempt={item.attempt}
															description={item.description}
															numberQuestions={items.length}
															id={j}
														/>
													</div>
												</SwiperSlide>
											)
									)}
								</Swiper>
							</div>
						</div>
					</>
				))}
			</div>
		</Container>
	)
}

const subjects = [
	'Русский язык',
	'Математика',
	'Физика',
	'Химия',
	'Английский язык',
	'История',
	'Биология',
	'География',
	'Информатика',
	'Литература',
]

const items = [
	{
		title: 'Русский язык',
		time: '25',
		attempt: '1',
		description:
			'Тест по темам русского языка за третью четверть, включающий орфографию, пунктуацию и синтаксис.',
	},
	{
		title: 'Русский язык',
		time: '30',
		attempt: '2',
		description:
			'Тест по литературным произведениям русских классиков и их анализу.',
	},
	{
		title: 'Математика',
		time: '15',
		attempt: '2',
		description:
			'Тест по ключевым темам математики за год, охватывающий алгебру, геометрию и теорию вероятностей.',
	},
	{
		title: 'Математика',
		time: '20',
		attempt: '3',
		description:
			'Тест по уравнениям и неравенствам, включающий логарифмические и экспоненциальные уравнения.',
	},
	{
		title: 'Математика',
		time: '30',
		attempt: '1',
		description:
			'Тест по планиметрии и стереометрии, включающий задачи на вычисление площадей и объемов.',
	},
	{
		title: 'Физика',
		time: '45',
		attempt: '5',
		description:
			'Тест по основным темам физики за весь учебный год, включая механику, электромагнетизм и термодинамику.',
	},
	{
		title: 'Физика',
		time: '30',
		attempt: '3',
		description:
			'Тест по оптике и квантовой физике, включающий задачи на преломление света и фотоэффект.',
	},
	{
		title: 'Физика',
		time: '20',
		attempt: '2',
		description:
			'Тест по термодинамике, включающий законы термодинамики и их применение.',
	},
	{
		title: 'Химия',
		time: '10',
		attempt: '1',
		description:
			'Тест по химии для желающих, включающий основные концепции и законы, а также базовые химические реакции.',
	},
	{
		title: 'Химия',
		time: '20',
		attempt: '2',
		description:
			'Тест по органической химии, включающий строение и свойства органических соединений.',
	},
	{
		title: 'Английский язык',
		time: '30',
		attempt: '4',
		description:
			'Тест по заданиям олимпиадного уровня, направленный на проверку знаний грамматики, лексики и навыков аудирования.',
	},
	{
		title: 'Английский язык',
		time: '25',
		attempt: '2',
		description: 'Тест по чтению и анализу текстов на английском языке.',
	},
	{
		title: 'Английский язык',
		time: '15',
		attempt: '3',
		description:
			'Тест по основам грамматики и словарного запаса английского языка.',
	},
	{
		title: 'История',
		time: '20',
		attempt: '2',
		description:
			'Тест по ключевым историческим событиям и персонам, охватывающий основные эпохи и значимые моменты мировой истории.',
	},
	{
		title: 'История',
		time: '35',
		attempt: '3',
		description:
			'Тест по истории Древнего мира, включающий важнейшие цивилизации и их вклад в мировую культуру.',
	},
	{
		title: 'История',
		time: '30',
		attempt: '1',
		description:
			'Тест по истории Средних веков, включая важнейшие события и процессы этого периода.',
	},
	{
		title: 'Биология',
		time: '35',
		attempt: '3',
		description:
			'Тест по основным темам биологии, включая клеточную структуру, генетику, эволюцию и экосистемы.',
	},
	{
		title: 'Биология',
		time: '20',
		attempt: '2',
		description:
			'Тест по анатомии человека, включающий строение и функции основных систем органов.',
	},
	{
		title: 'География',
		time: '25',
		attempt: '2',
		description:
			'Тест по физической и экономической географии, включая изучение природных зон, климатов и ресурсов.',
	},
	{
		title: 'География',
		time: '30',
		attempt: '1',
		description:
			'Тест по географии России, включая природные условия, ресурсы и экономическое развитие регионов.',
	},
	{
		title: 'Информатика',
		time: '40',
		attempt: '4',
		description:
			'Тест по основам информатики, включая программирование, базы данных, алгоритмы и структуры данных.',
	},
	{
		title: 'Информатика',
		time: '30',
		attempt: '3',
		description:
			'Тест по веб-разработке, включая основы HTML, CSS и JavaScript.',
	},
	{
		title: 'Литература',
		time: '30',
		attempt: '3',
		description:
			'Тест по литературе, охватывающий основные произведения и авторов, литературные течения и анализ текстов.',
	},
	{
		title: 'Литература',
		time: '20',
		attempt: '2',
		description:
			'Тест по русской литературе XIX века, включающий произведения Пушкина, Лермонтова и Толстого.',
	},
	{
		title: 'Литература',
		time: '35',
		attempt: '4',
		description:
			'Тест по зарубежной литературе, включающий произведения Шекспира, Гёте и Диккенса.',
	},
]
