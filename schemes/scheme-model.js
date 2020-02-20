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
    .first()
    .then(scheme => scheme || null);
}

function findSteps(id) {
  return db
    .select("steps.id as id", "scheme_name", "step_number", "instructions")
    .from("schemes")
    .innerJoin("steps", "schemes.id", "steps.scheme_id")
    .orderBy("step_number")
    .where({ scheme_id: id });
}

function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then(s => findById(s[0]));
}

function addStep(id, step) {
  return db("steps")
    .where({ id })
    .add(step);
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(() => findById(id));
}

function remove(id) {
  return findById(id).then(toBeRemoved =>
    db("schemes")
      .where({ id })
      .del()
      .then(() => toBeRemoved)
  );
}
