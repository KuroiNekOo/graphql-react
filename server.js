import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from './app/typedefs.js';
import resolvers from './app/resolvers/index.js';

const gqlServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(gqlServer, {
  listen: { port: process.env.PORT || 3000 },
});

console.log(`🚀  Server ready at: ${url}`);