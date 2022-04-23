const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date.js');
const user = require('./user.js');

const resolvers = {
    Query: {
        getUser: user.getUser,
    },
    Mutation: {
        addUser: user.addUser,
        setUser: user.setUser,
    },
    GraphQLDate,
};

const server = new ApolloServer({
    typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    resolvers,
    formatError: (error) => {
        console.log(error);
        return error;
     },
});

async function installHandler(app) {
    const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
    console.log('CORS setting:', enableCors);
    await server.start();
    server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler };