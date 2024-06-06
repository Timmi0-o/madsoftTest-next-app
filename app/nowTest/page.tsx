'use client'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Timer } from '@/components/ui/Timer'
import { useEffect, useState } from 'react'

function NowTest() {
	const [currentQuest, setCurrentQuest] = useState(1)

	const testTimer = localStorage.getItem('testTime')

	console.log('testTimer', testTimer)

	const time = new Date()
	time.setSeconds(time.getSeconds() + Number(testTimer))

	const numberQuestions = localStorage.getItem('numberQuestions')
	const attempt = localStorage.getItem('attempt')

	const questions = progressTest(Number(numberQuestions))

	useEffect(() => {
		if (Number(attempt) === 0) {
			window.location.href = '/result'
		}
	}, [attempt])

	const [questCheck, setQuestCheck] = useState(false)
	const [answerId, setAnswerId] = useState(0)

	const isQuestCheck = (id: number) => {
		if (answerId === id) {
			setQuestCheck(!questCheck)
		}
	}
	return (
		<Container>
			<div className='flex flex-col justify-center gap-[60px]'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-[40px]'>
						<div className='flex items-center gap-[25px]'>
							<p className='text-[46px] font-[400]'>Тестирование</p>
						</div>
						<Timer timerTime={time} />
					</div>
					<p className='text-[22px] font-[500] px-[10px] bg-[#f0f0f0] rounded-[8px] border-[1px] border-[#0000003c]'>{`Осталось попыток: ${attempt}`}</p>
				</div>

				<div className='flex flex-wrap gap-[10px] w-full min-h-[100px]'>
					{questions.map((quest, i) => (
						<div
							onClick={() => setCurrentQuest(i + 1)}
							className={`relative flex flex-col justify-center items-center duration-300 ease-out w-fit h-fit cursor-pointer ${
								currentQuest === i + 1
									? 'translate-y-[10px]'
									: 'translate-y-[0px]'
							}`}
							key={quest}
						>
							{/* {currentQuest === i + 1 && (
								<p className='absolute px-[4px] rounded-[4px] bg-[#ebebeb] text-[18px] font-bold top-[-40px]'>
									{i + 1}
								</p>
							)} */}

							<div
								className={`w-[80px] h-[15px] border-[1px] duration-300 ease-out transition-all rounded-[4px]  ${
									currentQuest === i + 1
										? 'bg-[#cd1c1c] border-[#cd1c1c]'
										: currentQuest < i + 1
										? 'bg-[#dfd9d9] border-[#dfd9d9]'
										: currentQuest > i + 1
										? 'bg-[#000000] border-[#000000]'
										: ''
								}`}
							></div>
						</div>
					))}
				</div>
				<div className='border-[1px] border-[#333] rounded-[12px] h-[250px] p-[15px] bg-[#f3f3f3]'>
					{quests.map(
						(quest, i) =>
							i + 1 === currentQuest && (
								<div key={i}>
									<p className='text-[26px] px-[5px] bg-[#e9e9e9] rounded-[12px] w-fit'>
										{quest.title}
									</p>
									<div className='mt-[20px]'>
										{quest.answer.map((answer, i) => (
											<div
												onClick={() => {
													setAnswerId(i)
													isQuestCheck(i)
												}}
												className='flex gap-[10px]'
												key={i}
											>
												<div
													className={`size-[24px] border-[1px] border-black cursor-pointer ${
														questCheck && 'bg-black'
													}`}
												></div>
												<p className='text-[24px] mb-[10px] cursor-pointer'>
													{answer}
												</p>
											</div>
										))}
									</div>
								</div>
							)
					)}
				</div>
				<div className='flex justify-between w-full'>
					<div className='w-[300px] duration-300 '>
						<Button
							title={
								currentQuest === Number(numberQuestions)
									? 'Закончить тест'
									: 'Следующий вопрос'
							}
							onClick={() => {
								if (currentQuest === Number(numberQuestions)) {
									window.location.href = '/result'
								} else {
									setCurrentQuest(currentQuest + 1)
								}
							}}
						/>
					</div>
					<div className='w-[250px]'>
						<Button
							title='Перезапустить'
							bg='bg-[#383838]'
							onClick={() => {
								const attempt = localStorage.getItem('attempt')
								localStorage.setItem('totalSeconds', testTimer)
								if (Number(attempt) >= 1) {
									localStorage.setItem(
										'attempt',
										(Number(attempt) - 1).toString()
									)
								}
								window.location.reload()
							}}
						/>
					</div>
				</div>
			</div>
		</Container>
	)
}

function progressTest(numberQuestions: number) {
	let quest = []
	for (let i = 0; i < Number(numberQuestions); i++) {
		quest.push(i)
	}
	console.log('quest', quest)

	return quest
}

export default NowTest

const quests = [
	{
		title: 'Что должен знать Frontend разработчик?',
		answer: ['HTML, CSS, JS', 'React, Angular, Vue', 'Ничего'],
		rightAnswer: 1,
	},
	{
		title: 'CSS сложный?',
		answer: ['Да', 'Нет', 'Хз'],
		rightAnswer: 2,
	},
	{
		title: 'Я прошел собес?',
		answer: ['Да', 'Да', 'Да'],
		rightAnswer: 1,
	},
	{
		title: 'Сколько я делал по времени сайт?',
		answer: ['1 час', 'часов 10 (правильно)', 'Не помню'],
		rightAnswer: 2,
	},
	// Добавим еще вопросы
	{
		title: 'Что такое HTML?',
		answer: [
			'Гипертекстовый язык разметки',
			'Язык программирования',
			'Аппаратное обеспечение',
		],
		rightAnswer: 1,
	},
	{
		title:
			'Какой язык программирования используется для стилизации веб-страниц?',
		answer: ['CSS', 'JavaScript', 'HTML'],
		rightAnswer: 1,
	},
	{
		title:
			'Как называется методология, используемая для структурирования и стилизации веб-страниц?',
		answer: ['БЭМ', 'React', 'Node.js'],
		rightAnswer: 1,
	},
	{
		title: 'Какие основные концепции лежат в основе React?',
		answer: ['Компоненты и виртуальный DOM', 'CSS и HTML', 'Функции и циклы'],
		rightAnswer: 1,
	},
	{
		title:
			'Какое название у распространенного паттерна проектирования, используемого в React для управления состоянием приложения?',
		answer: ['Redux', 'Flux', 'VueX'],
		rightAnswer: 3,
	},
	{
		title: 'Что такое асинхронный JavaScript?',
		answer: [
			'Код, который выполняется вне основного потока выполнения',
			'Код, который выполняется синхронно',
			'Код, который выполняется во время загрузки страницы',
		],
		rightAnswer: 1,
	},
	{
		title: 'Какая основная цель использования асинхронного JavaScript?',
		answer: [
			'Избежать блокировки основного потока выполнения',
			'Ускорить загрузку страницы',
			'Создать анимацию',
		],
		rightAnswer: 1,
	},
	{
		title: 'Что такое REST API?',
		answer: [
			'Архитектурный стиль для построения веб-сервисов',
			'Язык программирования',
			'Фреймворк для разработки веб-приложений',
		],
		rightAnswer: 1,
	},
	{
		title: 'Какие основные HTTP методы используются в REST API?',
		answer: [
			'GET, POST, PUT, DELETE',
			'CREATE, READ, UPDATE, DELETE',
			'SEND, RECEIVE',
		],
		rightAnswer: 1,
	},
	{
		title: 'Что такое адаптивный дизайн?',
		answer: [
			'Дизайн, который адаптируется к разным размерам экранов устройств',
			'Дизайн, который работает только на мобильных устройствах',
			'Дизайн, который работает только на десктопных устройствах',
		],
		rightAnswer: 1,
	},
	{
		title: 'Какой тег используется для создания ссылок в HTML?',
		answer: ['<a>', '<link>', '<href>'],
		rightAnswer: 1,
	},

	{
		title:
			'Как называется процесс определения стилей и распределения их по элементам веб-страницы?',
		answer: [
			'Каскадные таблицы стилей (CSS)',
			'Язык гипертекстовой разметки (HTML)',
			'JavaScript',
		],
		rightAnswer: 1,
	},
	{
		title: 'Как создать новый элемент в React?',
		answer: [
			'С помощью JSX синтаксиса',
			'С помощью document.createElement',
			'С помощью jQuery',
		],
		rightAnswer: 1,
	},
	{
		title: 'Что такое компонент в React?',
		answer: [
			'Независимая единица интерфейса, управляющая своим собственным состоянием',
			'Объект JavaScript',
			'Страница веб-сайта',
		],
		rightAnswer: 1,
	},
	{
		title: 'Какие основные преимущества использования компонентов в React?',
		answer: [
			'Переиспользуемость, управляемость состоянием и читаемость кода',
			'Высокая производительность и быстрая загрузка страниц',
			'Простота в использовании',
		],
		rightAnswer: 1,
	},
	{
		title:
			'Как называется паттерн, который используется в React для передачи данных от родительских к дочерним компонентам через свойства?',
		answer: ['Props', 'State', 'Hooks'],
		rightAnswer: 1,
	},
	{
		title: 'Что такое хук (hook) в React?',
		answer: [
			'Функция, которая позволяет использовать состояние и другие возможности React без написания классов',
			'Специальный элемент в JSX',
			'Атрибут в React-компонентах',
		],
		rightAnswer: 1,
	},
	{
		title: 'Какие основные методы жизненного цикла компонента есть в React?',
		answer: [
			'componentDidMount, componentDidUpdate, componentWillUnmount',
			'render, setState, forceUpdate',
			'start, stop, pause',
		],
		rightAnswer: 1,
	},
	{
		title: 'Что такое Virtual DOM (виртуальный DOM) в React?',
		answer: [
			'Виртуальное представление реального DOM для оптимизации производительности',
			'Веб-страница, которая отображается в iframe',
			'Новая версия HTML стандарта',
		],
		rightAnswer: 1,
	},
	{
		title:
			'Каким образом React обновляет реальный DOM при изменении состояния компонентов?',
		answer: [
			'Сравнивает Virtual DOM с предыдущей версией и применяет изменения только для изменившихся элементов',
			'Перерисовывает весь DOM с нуля',
			'Отправляет запрос на сервер для получения нового HTML',
		],
		rightAnswer: 1,
	},
	{
		title: 'Что такое JSX в React?',
		answer: [
			'Синтаксическое расширение JavaScript, используемое для описания структуры пользовательского интерфейса',
			'Фреймворк для создания веб-приложений',
			'Набор готовых компонентов',
		],
		rightAnswer: 1,
	},
	{
		title: 'Какие преимущества JSX предоставляет разработчикам React?',
		answer: [
			'Удобство и читаемость кода, возможность использования JavaScript выражений внутри JSX',
			'Большая скорость выполнения программы',
			'Поддержка только в современных браузерах',
		],
		rightAnswer: 1,
	},
	{
		title: 'Что такое состояние (state) компонента в React?',
		answer: [
			'Внутренние данные компонента, которые могут изменяться в процессе его жизненного цикла',
			'Атрибуты HTML элементов',
			'Свойства, переданные компоненту извне',
		],
		rightAnswer: 1,
	},
	{
		title:
			'Какие основные методы предоставляет хук useState для управления состоянием компонента в React?',
		answer: [
			'setState и getState',
			'updateState и getState',
			'useState и setState',
		],
		rightAnswer: 1,
	},
	{
		title: 'Что такое useEffect в React?',
		answer: [
			'Хук, который позволяет выполнять побочные эффекты в функциональных компонентах',
			'Специальный элемент в JSX',
			'Метод жизненного цикла компонента',
		],
		rightAnswer: 1,
	},
	{
		title:
			'Какие задачи обычно выполняются с использованием хука useEffect в React?',
		answer: [
			'Выполнение сетевых запросов, подписка на события, управление состоянием',
			'Отрисовка интерфейса, обработка событий, анимация',
			'Управление временем жизни компонента',
		],
		rightAnswer: 1,
	},
	{
		title: 'Каким образом можно оптимизировать работу компонентов в React?',
		answer: [
			'Используя мемоизацию, ленивую загрузку и мемоизированные хуки',
			'Увеличивая количество компонентов на странице',
			'Используя только классовые компоненты',
		],
		rightAnswer: 1,
	},
]
