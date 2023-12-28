import { Field, ID, ObjectType } from "type-graphql"
import { v4 } from "uuid"

@ObjectType()
export default class Book {
    @Field(type => ID)
    public uuid: string = v4()
}