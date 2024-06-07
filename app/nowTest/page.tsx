'use client'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Timer } from '@/components/ui/Timer'
import { useEffect, useState } from 'react'

interface SelectedAnswers {
	[key: number]: number
}

function NowTest() {
	const curTest = Number(localStorage.getItem('nowTest'))
	const [currentQuest, setCurrentQuest] = useState(curTest || 1)

	// Берем из хранилища кол-во секунд теста и создаем время для таймера
	const testTimer = localStorage.getItem('testTime') || '0'
	const time = new Date()
	time.setSeconds(time.getSeconds() + Number(testTimer))

	// Количество вопросов и попыток в тесте
	const numberQuestions = localStorage.getItem('numberQuestions') || '0'
	const attempt = localStorage.getItem('attempt')

	// Массив с количеством вопросов в тесте
	const questions = progressTest(Number(numberQuestions))

	// Если попыток 0, то пользователя редиректит на страницу с результатом
	useEffect(() => {
		if (Number(attempt) === 0) {
			window.location.href = '/result'
		}
	}, [attempt])

	// Сохраняем id теста, на котором остановились
	useEffect(() => {
		localStorage.setItem('nowTest', currentQuest.toString())
	}, [currentQuest])

	// Записываем выбранные ответы в объект
	const initialSelectedAnswers = JSON.parse(
		localStorage.getItem('selectsAnswers') || '{}'
	)
	const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>(
		initialSelectedAnswers
	)

	const [correctAnswers, setCorrectAnswers] = useState(0)
	console.log('correctAnswers', correctAnswers)

	const selectAnswer = (
		questIndex: number,
		answerIndex: number,
		rightAnswer: number
	) => {
		const previouslySelectedAnswer = selectedAnswers[questIndex]

		setSelectedAnswers((prevSelectedAnswers) => ({
			...prevSelectedAnswers,
			[questIndex]: answerIndex,
		}))

		if (answerIndex === rightAnswer - 1) {
			if (previouslySelectedAnswer !== rightAnswer - 1) {
				setCorrectAnswers((prev) => prev + 1)
				localStorage.setItem('correctAnswers', (correctAnswers + 1).toString())
			}
		} else {
			if (previouslySelectedAnswer === rightAnswer - 1) {
				setCorrectAnswers((prev) => prev - 1)
				localStorage.setItem('correctAnswers', (correctAnswers - 1).toString())
			}
		}
		console.log('correctAnswers', correctAnswers)
	}

	useEffect(() => {
		localStorage.setItem('selectsAnswers', JSON.stringify(selectedAnswers))
	}, [selectedAnswers])

	return (
		<Container>
			<div className='flex flex-col justify-center gap-[60px] px-[20px] xl:px-0'>
				<div className='flex flex-col gap-[10px] md:flex-row md:gap-0 items-center justify-between'>
					<div className='flex items-center gap-[40px]'>
						<p className='text-[26px] md:text-[46px] font-[400]'>
							Тестирование
						</p>
						<Timer timerTime={time} />
					</div>
					<p className='text-[14px] md:text-[22px] font-[500] px-[10px] bg-[#f0f0f0] rounded-[8px] border-[1px] border-[#0000003c]'>{`Осталось попыток: ${attempt}`}</p>
				</div>
				<div className='flex flex-wrap gap-[10px] w-full min-h-[50px] md:min-h-[100px]'>
					{questions.map((quest, i) => (
						<div
							onClick={() =>
								Object.keys(selectedAnswers).length >= i
									? setCurrentQuest(i + 1)
									: ''
							}
							className={`relative flex flex-col justify-center items-center duration-300 ease-out w-fit h-fit cursor-pointer ${
								currentQuest === i + 1
									? 'translate-y-[5px] md:translate-y-[10px]'
									: 'translate-y-[0px]'
							}`}
							key={quest}
						>
							<div
								className={`w-[50px] md:w-[80px] h-[15px] py-[5px] border-[1px] duration-300 ease-out transition-all rounded-[4px]  ${
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

				{/* Вопрос с ответами */}
				<div className='border-[1px] border-[#333] rounded-[12px] h-fit md:h-[250px] p-[15px] bg-[#f3f3f3] mt-[-25px] md:mt-0'>
					{quests.map(
						(quest, i) =>
							i + 1 === currentQuest && (
								<div key={i}>
									<p className='text-[26px] px-[10px] bg-[#e9e9e9] rounded-[12px] w-fit'>
										{quest.title}
									</p>
									<div className='mt-[20px]'>
										{quest.answer.map((answer, j) => (
											<div
												onClick={() => selectAnswer(i, j, quest.rightAnswer)}
												className='flex items-center gap-[10px] cursor-pointer mb-[10px]'
												key={j}
											>
												<div className='flex justify-center items-center size-[24px]'>
													<div
														className={`border-[1px] duration-300 transition-all  border-black rounded-[4px] ${
															selectedAnswers[i] === j
																? 'bg-black size-[22px]'
																: 'bg-transparent size-[24px] '
														}`}
													></div>
												</div>
												<p className='text-[16px] md:text-[24px]'>{answer}</p>
											</div>
										))}
									</div>
								</div>
							)
					)}
				</div>
				<div className='flex flex-col md:flex-row gap-[20px] md:gap-0 md:justify-between w-full'>
					<div className='flex gap-[20px] md:gap-0'>
						<div className={`w-[150px] md:w-[250px] duration-300 mr-[20px] `}>
							<Button
								className={`${
									Object.keys(selectedAnswers).length !== currentQuest
										? 'bg-black cursor-default'
										: ''
								} `}
								title={
									currentQuest === Number(numberQuestions)
										? 'Закончить тест'
										: 'Дальше'
								}
								onClick={() => {
									if (
										currentQuest === Number(numberQuestions) &&
										Object.keys(selectedAnswers).length === currentQuest
									) {
										window.location.href = '/result'
										localStorage.setItem('completedQuest', numberQuestions)
										localStorage.setItem(
											'correctAnswers',
											correctAnswers.toString()
										)
									} else if (
										Object.keys(selectedAnswers).length === currentQuest
									) {
										setCurrentQuest(currentQuest + 1)
									}
								}}
							/>
						</div>
						<div className={`w-[120px] md:w-[150px] duration-300 `}>
							<Button
								title='Очистить'
								onClick={() => {
									const updatedSelectedAnswers = { ...selectedAnswers }
									delete updatedSelectedAnswers[currentQuest - 1]
									setSelectedAnswers(updatedSelectedAnswers)
								}}
							/>
						</div>
					</div>
					<div className='w-[200px]'>
						<Button
							title='Перезапустить'
							bg='bg-[#383838]'
							onClick={() => {
								const attempt = localStorage.getItem('attempt')
								localStorage.setItem('totalSeconds', testTimer)
								localStorage.setItem('nowTest', '1')
								localStorage.setItem('selectsAnswers', '0')
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

export default NowTest

// Получаем количество вопросов в вопросе и делаем из этого массив
function progressTest(numberQuestions: number) {
	let quest = []
	for (let i = 0; i < Number(numberQuestions); i++) {
		quest.push(i)
	}
	console.log('quest', quest)

	return quest
}

// Импровизационная БД
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
