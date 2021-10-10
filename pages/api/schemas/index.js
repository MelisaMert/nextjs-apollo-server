import {gql} from  "apollo-server-micro"  // schema definition language'i kullanıyor olacağiz

/* typeDefs'lar nelerdir?
   Uygulama içindeki datanın nasıl görüneceğini belirlediğimiz
   definitionlarını yazdığımız alan
*/

export const typeDefs =  gql`
    type Query {
        users: [User!]!
    }

    type User {
        id: ID!
        name: String!
        age: String!
    }

    type Mutation {
        createUser(name: String!, age: String!): User!
    }
`;
