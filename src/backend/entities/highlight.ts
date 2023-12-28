import { ObjectType } from "type-graphql"
import Word from "./word"
import { OneToOne } from "typeorm"

/**
 * Represents a highlight used to put a context
 * to one or multiple words.
 */
@ObjectType()
export default class Highlight {
    @OneToOne(() => Word, word => word.highlight, {
        lazy: true
    })
    public word!: Word
}