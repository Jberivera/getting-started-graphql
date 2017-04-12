'use strict';

const {
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString
} = require('graphql');

const nodeInterface = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    type: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolveType: (data) => !!data.title
});

module.exports = {
  nodeInterface
};