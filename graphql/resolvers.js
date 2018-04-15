const { connectors } = require('./connectors');
const resolvers = {
  Query: {
    person: (obj, { id }, context, info) => {
      return connectors.getPersonById(id);
    },
    people: (obj, args, context, info) => {
      return connectors.getPeople();
    },
  },
  Mutation: {
    createPerson: (obj, { input }, context, info) => {
      return connectors.createPerson(input);
    },
    updatePerson: (obj, { id, input }, context, info) => {
      return connectors.updatePerson(id, input);
    },
    deletePerson: (obj, { id }, context, info) => {
      return connectors.deletePerson(id);
    },
  },
};
module.exports = { resolvers };
