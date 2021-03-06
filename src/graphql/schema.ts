import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
    {
        id: 1,
        name: 'Djian',
        email: 'djian@lucca.com'
    },
    {
        id: 2,
        name: 'Lucca',
        email: 'lucca@lucca.com'
    },
    {
        id: 3,
        name: 'Carvalho',
        email: 'carvalho@lucca.com'
    }
];

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        createUser(name: String, email: String): User
    }
`;

const resolvers = {
    Query: {
        allUsers: () => users
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = Object.assign({id: users.length + 1}, args);
            users.push(newUser);
            return newUser;
        }
    }
}

export default makeExecutableSchema({typeDefs, resolvers})