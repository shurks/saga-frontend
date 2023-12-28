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
import EmailIcon from '@mui/icons-material/Email'
import classNames from 'classnames'

export interface AppState {
	categoryId: string | null,
	animating: boolean
	page: { type: 'menu' }
		| { type: 'category', id: string, index: number }
}

export const categories: ({
	title: JSX.Element
	count: number
	icon: JSX.Element
	description: JSX.Element
	hex: string
	meta?: Array<Record<string, any>>
})[] = [
	{
		title: <>Actors</>,
		count: 7,
		icon: <TheaterComedyIcon />,
		description: <>
			Write about the characters that play roles within your psychosis, describe their personalities,
			their role in your life from before, what they want to do to make you unhappy, and more!
		</>,
		hex: '#4f85f8',
		meta: [
			{
				name: 'Maxine (The Goddess of Chaos)',
				description: 'My ex girlfriend from highschool, who apparantly sacrificed me to the devil as a witch, because she thinks that someone with the hardest life challenge and the most miserable person alive should also get the worst punishment imaginable by Satan, as that would be the ultimate deed of evil in her eyes.',
				mentions: 6
			},
			{
				name: 'Mark',
				description: 'My best friend who I speak to daily, but keeps telling me stuff about my doom. In my psychosis I have also met him as the "endboss" of evil, as they like to call it.',
				mentions: 7
			},
			{
				name: 'The holy father',
				description: 'God of the bible, sometimes on my side, sometimes on the enemies.',
				mentions: 12
			},
			{
				name: 'Satan',
				description: 'Master of deception and lies. Can never be trusted. For some time I thought it was my dad, because my mother called him that alot when I was younger, but I realize this is not the truth.',
				mentions: 12
			},
			{
				name: 'Demons 1-3',
				description: 'A group of demons disturbing me, sometimes claiming to be my old friends. Always trying to make me feel guilty about things I did wrong as a kid, and they try to pop hurtful thoughts in my head when I\'m with my friends and family so I feel bad.',
				mentions: 1
			},
			{
				name: 'My grandmother (The God Of Confusion)',
				description: 'My grandmother sometimes pops into my head, explaining why it was necessary to confuse me into doing something onorthodox, which usually ends up in a logical explanation for why I did it.',
				mentions: 2
			},
			{
				name: 'My greatuncle (The God of Destruction)',
				description: 'During one of the scenes I met my great uncle in my head, who told me that he is the God of Destruction, which is why all the Gods came to the conclusion that they need to collaborate to achieve harmony, as they each have a unique value.',
				mentions: 1
			},
			{
				name: 'My father (The God of Justice) and his wife',
				description: 'My father and his wife are sometimes as voices on the background to judge me, because they supposedly have secret plans with me. However, I believe these are just demons using their voices.'
			}
		]
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
		title: <>Blackmail</>,
		count: 5,
		icon: <EmailIcon />,
		description: <>
			Are you shameful for your past sins as a child or things like that, and are the voices in your head
			playing in on this? Try to forget about it, write it down and don't be ashamed, you will stay
			anonymous here.
		</>,
		hex: '#333333'
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
				<div className={classNames({
					'app-content': true,
					'category': this.state.page.type === 'category'
				})} style={{
					...this.state.page.type === 'category'
						? {
							'--primary-color': categories.filter((v, i) => String(i) === this.state.categoryId)[0].hex
						}
						: {}
				} as React.CSSProperties}>
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
					{
						this.state.page.type === 'category'
						&& <div className="app-content-right">
							<div className="app-content-right-title">
								{categories.find((v, i) => String(i) === this.state.categoryId)?.title || 'Unknown'}
							</div>
							<div className="app-content-right-description">
								{categories.find((v, i) => String(i) === this.state.categoryId)?.description || 'Unknown'}
							</div>
						</div>
					}
				</div>
				{
					this.state.page.type === 'category'
					&& (categories.find((v, i) => String(i) === this.state.categoryId))
					&& <div className="app-bottom">
						{
							categories.find((v, i) => String(i) === this.state.categoryId)
							?.meta?.map((v) => (
								<div className="category-actor">
									<div className="category-actor-left">
										<div className="category-actor-left-table">
											<div className="category-actor-left-table-title">
												{v.name}
											</div>
											<div className="category-actor-left-table-relation-to">
												{v.description}
											</div>
										</div>
									</div>
									<div className="category-actor-right">
										{v.mentions} mentions
									</div>
								</div>
							))
						}
					</div>
				}
			</div>
		)
	}
}