import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from './app/typedefs.js';
import resolvers from './app/resolvers/index.js';

import OuserDbDataSource from './app/datasources/ouser.db.datasource.js';

const knexConfig = {
  client: 'pg',
  connection: {
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5432,
    user: process.env.PGUSER || 'spedata',
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE || 'ouser',
  },
};

const gqlServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(gqlServer, {
  context: () => {
    const { cache } = gqlServer;
    return {
      dataSources: {
        ouserDb: new OuserDbDataSource({ cache, knexConfig }),
      },
    }
  },
  listen: { port: process.env.PORT || 3000 },
});

console.log(`🚀  Server ready at: ${url}`);