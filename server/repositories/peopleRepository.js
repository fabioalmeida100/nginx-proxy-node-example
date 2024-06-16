import { executeQuery } from '../db/connection.js';

const findAll = async () => {
  const [results, _] = await executeQuery('SELECT * FROM people');
  return results;
}

const create = async (name) => {
  await executeQuery(`INSERT INTO people (name) VALUES ("${name}")`);
}

export {
  findAll,
  create
};
