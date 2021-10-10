/*Graphql server'ının apollo server'ının bulunduğu uri
http://localhost:3000/api/graphql */

import {ApolloServer} from 'apollo-server-micro';
import {typeDefs} from './schemas';
import {resolvers} from './resolver';
import mongoose from 'mongoose';

const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      context: async () => {
         if(mongoose.connections[0].readyState) return;
         await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
         .then(()=> {
             console.log(`Mongodb Connected`);
         }).catch(error => {
             console.error(`${error.reason}`);
         })
      }
})

export const config = {
    api: {
        bodyParser: false // body kısmını parse etme next.js yapsın
    }
}

 export default apolloServer.createHandler({ path: "/api/graphql"})