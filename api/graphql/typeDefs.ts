// The GraphQL schema in string form
export default `
    type Query { 
        books: [Book] 
    }
    type Book { 
        title: String, 
        author: String 
    }
`;

export interface Book {
    title: string;
    author: string;
}
