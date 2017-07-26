import _ from 'lodash'
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } from 'graphql'

const users = [
  { id: 1, firstName: 'Chris', age: 27 },
  { id: 2, firstName: 'Anne', age: 22 },
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id })
      },
    },
  },
})

const schema = new GraphQLSchema({
  query: RootQuery,
})

export default schema
