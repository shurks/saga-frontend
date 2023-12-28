import React from 'react'
import './app.scss'
import AppLogo from './App logo.svg'
import Category from '../components/category/Category'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import MovieFilterIcon from '@mui/icons-material/MovieFilter'
import ExploreIcon from '@mui/icons-material/Explore'
import MapIcon from '@mui/icons-material/Map'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import GavelIcon from '@mui/icons-material/Gavel'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DoorFrontIcon from '@mui/icons-material/DoorFront'
import EmojiSymbolsIcon from '@mui/icons-material/EmojiSymbols'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

export interface AppState {
	categoryId: string | null,
	animating: boolean
	page: { type: 'menu' }
		| { type: 'category', id: string, index: number }
}

export const categories: {
	title: JSX.Element
	count: number
	icon: JSX.Element
	description: JSX.Element
	hex: string
}[] = [
	{
		title: <>Actors</>,
		count: 7,
		icon: <TheaterComedyIcon />,
		description: <>
			Write about the characters that play roles within your psychosis, describe their personalities,
			their role in your life from before, what they want to do to make you unhappy, and more!
		</>,
		hex: '#4f85f8'
	},
	{
		title: <>Scenarios</>,
		count: 3,
		icon: <MovieFilterIcon />,
		description: <>
			What scenarios have you encountered that were scary to you, or perhaps unexplainable?
			Think about all the scenarios you have witnessed, for the most accurate story.
		</>,
		hex: '#8a30cf'
	},
	{
		title: <>Interpretation</>,
		count: 5,
		icon: <ExploreIcon />,
		description: <>
			Define the colors that represent a way to interpret something in your story that is highlighted
			with the given color, to give the reader a sense of understanding your story.
		</>,
		hex: '#4B0082'
	},
	{
		title: <>Journeys</>,
		count: 5,
		icon: <MapIcon />,
		description: <>
			Reflect on the significant journeys or transformations you've experienced within your psychosis.
			These could include emotional, mental, or even physical journeys you've undergone.
		</>,
		hex: '#f3a33b'
	},
	{
		title: <>Guides</>,
		count: 4,
		icon: <LightbulbIcon />,
		description: <>
			Describe the guiding figures or influences within your psychosis.
			These guides could represent knowledge, support, or conflicting influences
			that shape your perceptions or actions.
		</>,
		hex: '#4caf50'
	},
	{
		title: <>Conflicts</>,
		count: 6,
		icon: <GavelIcon />,
		description: <>
			Detail the conflicts or inner struggles you've faced during your experiences.
			These could involve dilemmas, contradictions, or battles within your mind or reality.
		</>,
		hex: '#e53935'
	},
	{
		title: <>Visions</>,
		count: 3,
		icon: <VisibilityIcon />,
		description: <>
			Explore the visions or hallucinations you've encountered in your psychosis.
			Describe the sights, sounds, or other sensory experiences that felt vivid or surreal.
		</>,
		hex: '#7e57c2'
	},
	{
		title: <>Thresholds</>,
		count: 5,
		icon: <DoorFrontIcon />,
		description: <>
			Reflect on the significant turning points or thresholds you've encountered.
			These moments could represent changes in perception, events, or decisions made.
		</>,
		hex: '#8d6e63'
	},
	{
		title: <>Symbols</>,
		count: 4,
		icon: <EmojiSymbolsIcon />,
		description: <>
			Explore the symbolic elements or representations that have appeared in your psychosis.
			These could be objects, animals, or recurring symbols that hold significance in your experiences.
		</>,
		hex: '#ff9800'
	},
	{
		title: <>Reflections</>,
		count: 3,
		icon: <PersonSearchIcon />,
		description: <>
			Reflect on the insights or realizations gained from your psychosis.
			Describe the lessons learned, personal growth, or changes in perspective.
		</>,
		hex: '#689f38'
	},
	{
		title: <>Transitions</>,
		count: 5,
		icon: <TrendingUpIcon />,
		description: <>
			Detail the transitions or shifts between different states of mind or realities.
			These could include moments of clarity, confusion, or changes in perception.
		</>,
		hex: '#c2185b'
	}
]

export default class App extends React.Component<any, AppState> {
	constructor(props: any) {
		super(props)
		this.state = {
			categoryId: null,
			animating: false,
			page: {
				type: 'menu'
			}
		}
	}

	public render() {
		return (
			<div className="app">
				<div className="app-top">
					<div className="app-top-title">
						We all believe in things
					</div>
					<div className="app-top-logo">
						<img src={AppLogo} alt="Logo" />
					</div>
				</div>
				<div className="app-content">
					{
						categories.map((v, i) => this.state.categoryId === null || this.state.categoryId === String(i) || this.state.animating
							? (
								<Category key={i} index={i} category={v} page={this.state.page} animating={this.state.animating} selected={this.state.categoryId} id={String(i)} onClick={() => {
									this.setState({
										categoryId: this.state.categoryId === String(i) ? null : String(i),
										animating: true,
										page: this.state.categoryId === String(i) ? { type: 'menu' } : this.state.page
									}, () => {
										setTimeout(() => {
											this.setState({
												animating: false,
												page: this.state.categoryId === null
													? { type: 'menu' }
													: { type: 'category', id: String(i), index: i }
											})
										}, 500)
									})
								}} />
							)
							: null
						)
					}
				</div>
			</div>
		)
	}
}