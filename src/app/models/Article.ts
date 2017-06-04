export class Article{
    name: String
    topic: String
    content: String
    created_by: String
    pic: String
    comment: Comment
    created_at: Date
    updated_at: Date
}

export class Comment{
    comment: String
    created_by: String
    created_at: Date
    updated_at: Date
}