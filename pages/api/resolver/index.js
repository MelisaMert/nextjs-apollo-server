import { User } from "../models/User";

export const resolvers = {
    Query: {
        users: () => {
            return [{
                id: 'apollo',
                name: 'Melisa',
                age: 25
            }]
        },
    },

    Mutation: {
        createUser: async (parent, {name, age}, ctx, info) => {
            const user = new User({
                name,
                age,
            });

            return await user.save();
        }
    }
}