var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    name: String,
    available: Boolean,
    price: Float
  }
`);

var root = { 
  name: () => 'Can-Am Maverick X3 Max X RS Turbo RR Desert Tan', 
  available: () => true, 
  price: () => 31000
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));