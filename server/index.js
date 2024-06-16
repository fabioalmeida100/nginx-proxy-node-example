import express from 'express';
import { runMigration } from './db/migration.js';
await runMigration();
import peopleRoute from './routes/peopleRoutes.js';

const app = express();
app.use(express.json());
app.use('/', peopleRoute);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
