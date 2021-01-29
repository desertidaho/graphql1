var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var Poems1 = require('./poems1');

var poems1 = new Poems1();

var schema = buildSchema(`
  type Query {
    titles: Array
  }
`);

var root = { titles: () => getTitles() };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

function getTitles() {
  return poems1.poems1();
}