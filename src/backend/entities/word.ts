import { Field, ID, ObjectType } from "type-graphql"
import Paragraph from "./paragraph"
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import Highlight from "./highlight"

@Entity()
@ObjectType()
export default class Word {
    @PrimaryGeneratedColumn('uuid')
    @Field(type => ID)
    public uuid!: string

    @Column()
    @Field()
    public value!: string

    @ManyToOne(() => Paragraph, paragraph => paragraph.words, {
        lazy: true
    })
    @Field(() => Paragraph)
    public paragraph!: Paragraph

    @OneToOne(() => Highlight, highlight => highlight.word, {
        eager: true
    })
    @Field(() => Highlight)
    public highlight!: Highlight

    @Column({
        default: new Date()
    })
    @Field({
        defaultValue: new Date()
    })
    public createdAt!: Date

    @Column({
        default: new Date()
    })
    @Field({
        defaultValue: new Date()
    })
    public updatedAt!: Date
}