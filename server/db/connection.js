import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connectMySql = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const executeQuery = async (query) => {
  return await connectMySql.query(query);
}

export {
  executeQuery
}

