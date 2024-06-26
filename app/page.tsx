'use client'
import { Container } from '@/components/ui/Container'
import { TestItem } from '@/components/ui/TestItem'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

function Page() {
	return (
		<>
			<Container>
				<div className='flex flex-col items-center'>
					<p className='text-[32px] md:text-[60px] text-center font-[500] text-[#212529] mb-[30px] px-[20px] xl:px-0 tracking-[10px] select-none'>
						Ваши тесты
					</p>
					<div className='hidden xl:grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
						{items.map((item, i) => (
							<div key={i}>
								<TestItem
									title={item.title}
									time={item.time}
									attempt={item.attempt}
									description={item.description}
									numberQuestions={item.numberQuestions}
									id={i}
								/>
							</div>
						))}
					</div>
				</div>
			</Container>
			<div className='block xl:hidden w-full mt-[-80px]'>
				<Swiper
					breakpoints={{
						300: {
							slidesPerView: 1.25,
						},
						350: {
							slidesPerView: 1.3,
						},
						400: {
							slidesPerView: 1.45,
						},
						500: {
							slidesPerView: 1.9,
						},
						730: {
							slidesPerView: 2,
						},
						900: {
							slidesPerView: 2.5,
						},
					}}
					centeredSlides
					spaceBetween={40}
				>
					{items.map((item, i) => (
						<SwiperSlide key={i} className='pt-[110px]'>
							<div>
								<TestItem
									title={item.title}
									time={item.time}
									attempt={item.attempt}
									description={item.description}
									numberQuestions={item.numberQuestions}
									id={i}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}

export default Page

const items = [
	{
		title: 'Математика',
		time: '15',
		attempt: '2',
		description:
			'Тест включает задачи по алгебре и геометрии, охватывая весь учебный год. Проверка знаний основных формул и теорем.',
		numberQuestions: 15,
	},
	{
		title: 'Русский язык',
		time: '25',
		attempt: '1',
		description:
			'Тест на знание грамматики и правописания, охватывающий материал за третью четверть. Включает разбор сложных предложений и пунктуации.',
		numberQuestions: 3,
	},
	{
		title: 'Английский язык',
		time: '30',
		attempt: '4',
		description:
			'Тест состоит из олимпиадных заданий, направленных на углубленное изучение языка. Проверка навыков чтения, письма и аудирования.',
		numberQuestions: 7,
	},
	{
		title: 'Химия',
		time: '10',
		attempt: '1',
		description:
			'Вводный тест по общей химии, включающий основные понятия и законы. Подходит для оценки базового уровня знаний студентов.',
		numberQuestions: 15,
	},
	{
		title: 'Физика',
		time: '45',
		attempt: '5',
		description:
			'Тест по основным физическим законам и явлениям, изученным в течение года. Включает задачи на расчет и анализ физических процессов.',
		numberQuestions: 9,
	},
	{
		title: 'Чисто тест функций',
		time: '0.3',
		attempt: '2',
		description:
			'Короткий проверочный тест по математическим функциям. Оценивает понимание основных свойств и графиков функций.',
		numberQuestions: 3,
	},
]
