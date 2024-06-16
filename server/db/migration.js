import { executeQuery } from './connection.js';

const createTablePeople = () => {
  return `CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
  )`;
};

const insertPeople = (name) => {
  return `INSERT INTO people (name) VALUES ("${name}")`;
};

const deleteAllPeople = () => {
  return 'DELETE FROM people';
}

const initialMigration = async () => {
  await executeQuery(createTablePeople());
  await executeQuery(deleteAllPeople());
  await executeQuery(insertPeople("Alice"));
  await executeQuery(insertPeople("Bob"));
};

const runMigration = async () => {
  await initialMigration();
};

export {
  runMigration
};
