import React from "react"
import { categories } from "../../app/App"

interface ActorsPageProps {
    name: string
    description: string
    mentions: number
}

export default class ActorsPage extends React.Component<ActorsPageProps> {
    constructor(props: any) {
        super(props)
    }

    public render = () => {
        return (
            <div className="category-actor">
                <div className="category-actor-left">
                    <div className="category-actor-left-table">
                        <div className="category-actor-left-table-title">
                            {this.props.name}
                        </div>
                        <div className="category-actor-left-table-relation-to">
                            {this.props.description}
                        </div>
                    </div>
                </div>
                <div className="category-actor-right">
                    {this.props.mentions} mentions
                </div>
            </div>
        )
    }
}