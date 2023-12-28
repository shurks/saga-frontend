import { ObjectType } from "type-graphql"
import Word from "./word"
import { OneToMany } from "typeorm"

@ObjectType()
export default class Paragraph {
    @OneToMany(() => Word, word => word.paragraph, {
        eager: true
    })
    public words!: Word
}