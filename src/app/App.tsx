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
import DownloadIcon from '@mui/icons-material/Download'
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
	meta?: { type: string, values: Array<Record<string, any>> }
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
		meta: {
			type: 'actor',
			values: [
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
					name: 'The holy father (The God of Love)',
					description: 'God of the bible, sometimes on my side, sometimes on the enemies.',
					mentions: 12
				},
				{
					name: 'Satan (The God of Evil)',
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
					description: 'My father and his wife are sometimes as voices on the background to judge me, because they supposedly have secret plans with me. However, I believe these are just demons using their voices.',
					mentions: 3
				},
				{
					name: 'An unknown holy man of the highest holiness',
					description: 'This is a man who showed me miracles I can\'t even comprehend, I have witnessed what it is like to be in a different reality where there is no physics, and he kept me there just to keep me safe. As he does not want someone as pure as myself to be destructed by evil and chaos.',
					mentions: 1
				},
				{
					name: 'All the girls I get a crush on',
					description: 'Whenever I get a crush on a girl, there are voices in my head with their actual voice telling me to do stuff like masturbate and whatsoever, which does not align at all with what they are saying and doing in real life. It is a trap to feel bad about treating a girl you like like that by demons.',
					mentions: 2
				}
			]
		}
	},
	{
		title: <>Scenarios</>,
		count: 3,
		icon: <MovieFilterIcon />,
		description: <>
			What scenarios have you encountered that were scary to you, or perhaps unexplainable?
			Think about all the scenarios you have witnessed, for the most accurate story.
		</>,
		hex: '#8a30cf',
		meta: {
			type: 'scenario',
			values: [
				{
					title: "Hearing voices for the first time",
					description: <>
						<p>
							When I heard voices for the first time, it was very scary. It was something I have never experienced before and I freaked out.
							The voices told me to commit suicide within 24 hours or they would kill me and torture me so I wish I did it. I felt like I had no other
							choice, I tried jumping off my balcony, but I was too scared. Eventually I bought a bottle of whiskey and drank it within 1 minute fully,
							after which I woke up 3 days later in black puke being unable to swallow anything but soup.
						</p>
					</>
				},
				{
					title: "Getting bullied out of Tilburg",
					description: <>
						<p>
							After a Moroccan man, who was my dealer, came by to give me some stuff, he robbed me for my last 5.000 euros. I called the police for that,
							and it ended up in a ghetto scene on the streets, where I couldn't get near my house anymore. I must have been in a fake reality, because there
							were only germans and weird people who suddenly had access to my appartment. I walked for 3 days until my dad found me and brought me to the doctor,
							for the legs I could barely still stand on, while voices told me I was in hell and my dad was the super devil.
						</p>
					</>
				},
				{
					title: "People rooting against me",
					description: "Todo"
				},
				{
					title: "Believing Maxine was a God and wanted to torture me",
					description: "Todo"
				},
				{
					title: "Living on the streets with no option but to accept help to get a roof over my head",
					description: "Todo"
				},
				{
					title: "Spending alot of time in mental hospitals",
					description: "Todo"
				},
				{
					title: "Giving up on life and just kept gaming",
					description: "Todo"
				},
				{
					title: "Getting lynched by the holy father",
					description: "Todo"
				},
				{
					title: "Finding Gods and being declared the God of Gods",
					description: "Todo"
				},
				{
					title: 'Seeing demons trying to take over our kind in sudden places',
					description: 'Todo'
				},
				{
					title: 'Following my destiny',
					description: 'Todo'
				},
				{
					title: 'Feeling satanic forces in my home and not daring to go in',
					description: 'Todo'
				},
				{
					title: "Staring the ultimate doom in the eyes",
					description: "Todo"
				},
				{
					title: 'I went back home and went back to gaming',
					description: 'Todo'
				},
				{
					title: 'I decided to work on a cure for schizophrenia',
					description: 'Todo'
				}
			]
		}
	},
	{
		title: <>Interpretation</>,
		count: 5,
		icon: <ExploreIcon />,
		description: <>
			Define the colors that represent a way to interpret something in your story that is highlighted
			with the given color, to give the reader a sense of understanding your story.
		</>,
		hex: '#4B0082',
		meta: {
			type: 'interpretation',
			values: [
				{
					hex: '#03c2fc',
					description: 'The things we currently see as part of religion and God\'s will.'
				},
				{
					hex: '#05eb4a',
					description: 'The things we are doing correctly, based on the actual world views'
				},
				{
					hex: '#ee7dff',
					description: 'The introduction of what I see as an actual God logically reasoning'
				},
				{
					hex: '#ebe305',
					description: 'The things we do wrong, based on our confusion that is caused by listening to the wrong story of the Gods over the years.'
				}
			]
		}
	},
	{
		title: <>Journeys</>,
		count: 5,
		icon: <MapIcon />,
		description: <>
			Reflect on the significant journeys or transformations you've experienced within your psychosis.
			These could include emotional, mental, or even physical journeys you've undergone.
		</>,
		hex: '#f3a33b',
		meta: {
			type: 'journeys',
			values: [
				{
					title: 'Deciding to rather be happy and have pain later in hell if it would come',
					description: 'Todo'
				},
				{
					title: 'Trying to get back to my carreer, but failing due to all the medication',
					description: 'Todo'
				},
				{
					title: 'Sleeping in front of the police office on my birthday to share my story',
					description: 'Todo'
				},
				{
					title: 'Running through a bridge of demons without any fear and dissing them',
					description: 'Todo'
				},
				{
					title: 'Getting back to my useless life of gaming and no family or luxury',
					description: 'Todo'
				},
				{
					title: 'Regaining my friends at last',
					description: 'Todo'
				}
			]
		}
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
		hex: '#4caf50',
		meta: {
			type: 'guides',
			values: [
				{
					name: 'The holy father (The God of Love)',
					description: 'God of the bible, he always kept testing me for my ability to love like him. He always wanted the best for everyone. He told me alot about things like the Bible and why they were said in these ways back in the year 0000. He is the main influence of all the God\'s who recognized me for my ability to bring harmony to all God\'s in existence.'
				},
				{
					name: 'My grandmother (The God Of Confusion)',
					description: 'My grandmother sometimes pops into my head, explaining why it was necessary to confuse me into doing something onorthodox, which usually ends up in a logical explanation for why I did it. The confusion made me realize what was wrong with the connection between all God\'s and that we need to collaborate so we don\'t end up destructed. However, I also found out that destiny decides that I will become invincible in my quest of keeping the order of the God\'s stable, so there is no way out.'
				},
				{
					name: 'An unknown holy man of the highest holiness',
					description: 'This is a man who showed me miracles I can\'t even comprehend, I have witnessed what it is like to be in a different reality where there is no physics, and he kept me there just to keep me safe. As he does not want someone as pure as myself to be destructed by evil and chaos.'
				},
				{
					name: 'My imaginary girlfriend',
					description: 'Feeling loved is really important, even when it is makebelieve, it helped me through tought times believing someone still loved me.'
				},
				{
					name: 'Mother nature / intuition / following your heart',
					description: 'Following the voice of nature or intuition or my heart always makes me take the right decisions in times where it seems like all is doomed, and I always end up good whenever I listen to it automatically. Thank you mother nature, for being so kind.'
				}
			]
		}
	},
	{
		title: <>Conflicts</>,
		count: 6,
		icon: <GavelIcon />,
		description: <>
			Detail the conflicts or inner struggles you've faced during your experiences.
			These could involve dilemmas, contradictions, or battles within your mind or reality.
		</>,
		hex: '#e53935',
		meta: {
			type: 'conflicts',
			values: [
				{
					title: "Thinking of going down as the Anti-christ",
					description: "They tried to convince me that as I am Jesus, that I would go down in the books as even worse as the anti-christ together with the holy father. This is where I did not know anymore what to do, as it was very convincing. But eventually I ended up going to the police, as I knew they stand for justice and not for love or hate. However, at the time, it did make me realize that even the anti-christ could have some reasoning behind his madness."
				}
			]
		}
	},
	{
		title: <>Visions</>,
		count: 3,
		icon: <VisibilityIcon />,
		description: <>
			Explore the visions or hallucinations you've encountered in your psychosis.
			Describe the sights, sounds, or other sensory experiences that felt vivid or surreal.
		</>,
		hex: '#7e57c2',
		meta: {
			type: 'visions',
			values: [
				{
					title: 'Seeing swords of infinte power',
					description: 'The devil claimed that he would have a sword, which I saw entering my body almost, which on impact, would feel like an entire universe would explode on me. I was very scared at that time, but it never happened, and I can only see that it has been bluf all this time.'
				},
				{
					title: 'Seeing the super devil',
					description: 'Back when I was mad at God for not being able to sustain our society, and proving him that I would be worthy of a position like him, he sent the super devil to me. Which is probably makebelief, however I actually saw him in gruesome detail flying outside of my window. I had to overcome this fear.'
				},
				{
					title: 'Seeing demons',
					description: 'At some point, testing my psychosis to the extreme, I saw literal demons, and other people saw them too. But they were only visible on dark material, of which they could not leave. I could see them running, trying to get into my reality, but they could never get out of the black substances that they appeared on.'
				},
				{
					title: 'Feeling stabbed',
					description: 'Demons tried stabbing me, however I only felt it for a pinch, as their swords were pushed through me, it didn\'t bother me too much.' 
				}
			]
		}
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
							categories.find((v, i) => String(i) === this.state.categoryId)?.meta?.type === 'actor'
								? categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.values.map((v) => (
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
								: categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.type === 'scenario'
									? categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.values.map((v) => (
										<div className="category-scenario">
											<div className="category-scenario-title">
												{v.title}
											</div>
											<div className="category-scenario-relation-to">
												{v.description}
											</div>
										</div>
									))
									: categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.type === 'interpretation'
										? categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.values.map((v) => (
											<div className="category-interpretation" style={{
												background: v.hex
											}}>
												<div className="category-interpretation-description">
													{v.description}
												</div>
											</div>
										))
										: categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.type === 'journeys'
											? categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.values.map((v) => (
												<div className="category-journey" style={{
													background: v.hex
												}}>
													<div className="category-journey-title">
														{v.title}
													</div>
													<div className="category-journey-description">
														{v.description}
													</div>
												</div>
											))
											: categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.type === 'guides'
												? categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.values.map((v) => (
													<div className="category-guides" style={{
														background: v.hex
													}}>
														<div className="category-guides-title">
															{v.name}
														</div>
														<div className="category-guides-description">
															{v.description}
														</div>
													</div>
												))
												: categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.type === 'conflicts'
													? categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.values.map((v) => (
														<div className="category-conflicts" style={{
															background: v.hex
														}}>
															<div className="category-conflicts-title">
																{v.title}
															</div>
															<div className="category-conflicts-description">
																{v.description}
															</div>
														</div>
													))
													: categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.type === 'visions'
														? categories.find((v, i) => String(i) === this.state.categoryId)!.meta?.values.map((v) => (
															<div className="category-visions" style={{
																background: v.hex
															}}>
																<div className="category-visions-title">
																	{v.title}
																</div>
																<div className="category-visions-description">
																	{v.description}
																</div>
															</div>
														))
														: <></>
							}
					</div>
				}
			</div>
		)
	}
}