let { people, nextID } = require('../database/dummy');
const connectors = {
  getPersonById: id => {
    return people.find(person => String(person.id) === String(id));
  },
  getPeople: () => {
    return people;
  },
  createPerson: person => {
    person.id = nextID;
    people.push(person);
    nextID++;
    return person;
  },
  updatePerson: (id, updatedPerson) => {
    const index = people.findIndex(person => String(person.id) === String(id));
    let person = people[index];
    person = Object.assign(person, updatedPerson);
    people[index] = person;
    return person;
  },
  deletePerson: id => {
    delete people[id];
    return id;
  },
};
module.exports = { connectors };
