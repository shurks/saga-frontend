import React from 'react'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import './category.scss'
import classNames from 'classnames'
import { AppState, categories } from '../../app/App'

interface CategoryProps {
    category: typeof categories[number]
    index: number
    id: string
    onClick: () => void
    animating: boolean
    selected: string | null
    page: AppState['page']
}

interface CategoryState {
    cubeTransition: {
        index: number
        toIndex: number|null
        fromIndex: number|null
    }
    selected: string | null
}

export default class Category extends React.Component<CategoryProps, CategoryState> {
    public containerRef!: React.RefObject<HTMLDivElement>
    
    constructor(props: any) {
        super(props)
        this.state = {
            cubeTransition: {
                index: 0,
                toIndex: null,
                fromIndex: null
            },
            selected: null
        }
    }

    public render() {
        return (
            <div className={classNames({
                'category-container': true,
                'fading': this.props.selected !== this.props.id && this.props.animating && this.props.page.type === 'menu',
                'unfading': this.props.selected !== this.props.id && this.props.animating && this.props.page.type === 'category',
            })} ref={this.containerRef} style={{
                '--primary-color': this.props.category.hex,
                transform: this.props.page.type === 'menu'
                    ? this.props.selected !== this.props.id && this.props.animating
                        ? (this.props.index + 1) % 3 === 0
                            ? this.state.selected === this.props.id ? 'scale(0.5)' : `translateX(50%) scale(0.5)`
                            : (this.props.index + 1) % 3 === 2
                                ? `scale(0.5)`
                                : this.state.selected === this.props.id ? 'scale(0.5)' : `translateX(-50%) scale(0.5)`
                        : this.props.selected === this.props.id && this.props.animating
                            ? `translateX(-${(((this.props.index + 1) % 3 === 0 ? 2 : (this.props.index + 1) % 3 === 1 ? 0 : 1)) * 100}%) translateX(${(((this.props.index + 1) % 3 === 0 ? 2 : (this.props.index + 1) % 3 === 1 ? 0 : 1)) * 100 === 0 ? '0' : '-10px'}) translateY(-${(Math.floor(this.props.index / 3)) * 100}%) translateY(${(Math.floor(this.props.index / 3)) * 100 === 0 ? '0' : '-10px'})`
                            : undefined
                    : undefined,
                transition: this.state.selected
                    ? 'all 0.5s ease-in-out'
                    : this.props.selected === this.props.id && !this.props.animating
                        ? this.props.page.type === 'menu'
                            ? undefined
                            : 'none'
                        : undefined
            } as React.CSSProperties} onClick={() => {
                if (this.props.category.meta?.type === 'saga' && this.props.selected === this.props.id) {
                    document.location = 'https://hurx.io/we-all-believe-in-things.pdf'
                    return
                }
                this.setState({
                    cubeTransition: {
                        ...this.state.cubeTransition,
                        toIndex: this.state.cubeTransition.index === 0 ? 1 : 0,
                        fromIndex: this.state.cubeTransition.index
                    },
                    selected: this.props.selected === this.props.id
                        ? this.props.id
                        : this.props.page.type === 'category'
                            ? this.props.id
                            : null
                }, () => {
                    this.props.onClick()
                    setTimeout(() => {
                        this.setState({
                            cubeTransition: {
                                ...this.state.cubeTransition,
                                fromIndex: null,
                                toIndex: null,
                                index: this.state.cubeTransition.toIndex || 0
                            },
                            selected: null
                        })
                    }, 500)
                })
            }}>
                <div className={classNames({
                    'animation-cube': true,
                    'animation-cube-left-to-right': this.state.cubeTransition.toIndex !== null && this.state.cubeTransition.fromIndex !== null
                        && this.state.cubeTransition.toIndex < this.state.cubeTransition.fromIndex,
                    'animation-cube-right-to-left': this.state.cubeTransition.toIndex !== null && this.state.cubeTransition.fromIndex !== null
                        && this.state.cubeTransition.toIndex > this.state.cubeTransition.fromIndex
                })}>
                    <div className="cube">
                        <div className={classNames({
                            'category': true,
                            'active': this.state.cubeTransition.index === 0
                        })}>
                            <div className={classNames({
                                'category-inner': true
                            })}>
                                <div className="category-inner-title">
                                    {this.props.category.title}
                                    <div className="category-inner-title-count">
                                        {this.props.category.meta?.values.length}
                                    </div>
                                </div>
                                <div className="category-inner-icon">
                                    {this.props.category.icon}
                                </div>
                                <div className="category-inner-description">
                                    {this.props.category.description}
                                </div>
                            </div>
                        </div>
                        <div className={classNames({
                            'category': true,
                            'active': this.state.cubeTransition.index === 1,
                            'big-icon': true
                        })}>
                            <div className={classNames({
                                'category-inner': true,
                                'selected': this.props.page.type === 'category'
                            })}>
                                <div className="category-inner-icon">
                                    {this.props.category.icon}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}