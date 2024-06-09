import './FlyingSquares.scss'

interface FlyingSquaresProps {
	sqBg?: string
}

export const FlyingSquares = ({ sqBg }: FlyingSquaresProps) => {
	const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	return (
		<ul className='circles'>
			{circles.map((i) => (
				<li key={i} style={{ backgroundColor: sqBg || '#ffffff9e' }}></li>
			))}
		</ul>
	)
}
