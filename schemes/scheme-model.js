const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps").where({ id });
}

function add(scheme) {
  return db("schemes").add(scheme);
}

function addStep(id, step) {
  return db("steps")
    .where({ id })
    .add(step);
}

function update(id, changes) {
  return db("steps")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("steps")
    .where({ id })
    .del();
}
